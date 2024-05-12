import React from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import MapView, { LatLng, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import LocationMapController from './LocationMap.controller';
import { SCREEN_WIDTH, relativeY } from '@utils/constants/Layout.const';

export interface LocationMapProps {
  onCoordChange: (coord: LatLng) => void;
  initialCoord?: LatLng;
  style?: StyleProp<ViewStyle>;
}

export const deltas = { latitudeDelta: 0.004, longitudeDelta: 0.004 };

export default function LocationMap(props: LocationMapProps) {
  const controller = LocationMapController(props);
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      onPress={controller.onMapPress}
      showsUserLocation
      showsMyLocationButton
      zoomEnabled
      showsCompass
      region={controller.region}
      initialRegion={
        props.initialCoord ? { ...props.initialCoord, ...deltas } : undefined
      }
      onUserLocationChange={controller.locationChangeHandler}
      style={[styles.map, props.style]}>
      <Marker
        draggable
        coordinate={controller.coord}
        onDragEnd={controller.onMarkerDragEnd}
      />
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: { width: SCREEN_WIDTH, height: relativeY(75) },
});
