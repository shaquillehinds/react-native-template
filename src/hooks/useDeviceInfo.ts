import { useEffect } from 'react';
import { useTypedSelector } from './useTypedSelector';
import { getUniqueId } from 'react-native-device-info';
import messaging from '@react-native-firebase/messaging';
import { transportLayer } from '@transports/TransportLayer';
import { isIOS } from '@utils/constants/Layout.const';
import {
  retrieveCountry,
  retrieveDeviceInfo,
  retrieveFcmToken,
  storeDeviceInfo,
  storeFcmToken,
} from '@utils/storage';
import validateObject from '@utils/validateObject';
// import { DebugLogger } from '@utils/Logger';

// const log = DebugLogger('useDeviceInfo.ts');

const optionalDeviceKeys = [
  'country',
  'currentUser',
] as (keyof UnpopulatedDevice)[];
const requiredDeviceKeys = [
  'deviceId',
  'fcmToken',
  ...optionalDeviceKeys,
] as (keyof UnpopulatedDevice)[];

export default function useDeviceInfo() {
  const user = useTypedSelector(state => state.user);
  const userId = user._id;
  const authenticated = useTypedSelector(state => state.user.authenticated);

  useEffect(() => {
    getUniqueId().then(async deviceId => {
      const country = (await retrieveCountry()) || undefined;
      const token = await retrieveFcmToken(userId || deviceId);
      const fcmToken = token || (await messaging().getToken());
      const storedDevice = await retrieveDeviceInfo();
      const currentDevice = {
        deviceId,
        country,
        fcmToken,
        currentUser: userId,
      };
      if (storedDevice) {
        const upToDate = validateObject(
          storedDevice,
          requiredDeviceKeys,
          optionalDeviceKeys,
          currentDevice,
        );
        if (upToDate) return;
      }
      const { data: device } = await transportLayer.mainTransport.getDevice(
        { deviceId },
        true,
      );
      if (device) {
        if (authenticated && userId && !device.currentUser) {
          const { data } = await transportLayer.mainTransport.updateDevice(
            currentDevice,
            true,
          );
          data && storeDeviceInfo(data);
        } else {
          if ((!device.country && country) || device.fcmToken !== fcmToken) {
            const { data } = await transportLayer.mainTransport.updateDevice(
              currentDevice,
              true,
            );
            data && storeDeviceInfo(data);
          }
          if (device.fcmToken !== fcmToken)
            await storeFcmToken(deviceId, fcmToken);
          storeDeviceInfo({ ...device, ...currentDevice });
        }
      } else {
        const newDevice: Omit<
          UnpopulatedDevice,
          '_id' | 'createdAt' | 'updatedAt'
        > = {
          deviceId,
          lastActive: Date.now(),
          deviceOS: isIOS ? 'IOS' : 'ANDROID',
          country,
        };
        if (userId) newDevice.currentUser = userId;
        if (fcmToken) newDevice.fcmToken = fcmToken;
        const { data } = await transportLayer.mainTransport.createDevice(
          newDevice,
          true,
        );
        data && storeDeviceInfo(data);
      }
    });
  }, [authenticated, userId]);
}
