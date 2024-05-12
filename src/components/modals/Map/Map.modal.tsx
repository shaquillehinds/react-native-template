import React from 'react';
import { LatLng } from 'react-native-maps';
import { BaseModal } from '@components/modals';
import { BaseModalProps } from '../Base.modal';
import MapController from './Map.controller';
import { PrimaryButton, SecondaryButton } from '@components/buttons';
import RowLayout from '@components/layouts/Row.layout';
import LocationMap from '@components/misc/LocationMap';

export interface MapModalProps extends BaseModalProps {
  onCoordSave: (coord: LatLng) => void;
}

export default function MapModal(props: MapModalProps) {
  const controller = MapController(props);
  return (
    <BaseModal {...props} disableSwipe>
      <LocationMap onCoordChange={controller.coordChangeHandler} />
      <RowLayout margin={[3, 0, 0, 0]}>
        <PrimaryButton onPress={controller.saveHandler} margin={[0, 3, 0, 0]}>
          Save Pin
        </PrimaryButton>
        <SecondaryButton onPress={controller.cancelHandler}>
          Cancel
        </SecondaryButton>
      </RowLayout>
    </BaseModal>
  );
}
