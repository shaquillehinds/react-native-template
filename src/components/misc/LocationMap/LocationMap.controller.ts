import { useState } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import {
  LatLng,
  MapPressEvent,
  MarkerDragStartEndEvent,
  Region,
  UserLocationChangeEvent,
} from 'react-native-maps';

export interface LocationMapProps {
  onCoordChange: (coord: LatLng) => void;
  initialCoord?: LatLng;
  style?: StyleProp<ViewStyle>;
}

export const deltas = { latitudeDelta: 0.004, longitudeDelta: 0.004 };

export default function LocationMapController(props: LocationMapProps) {
  const [coord, setCoord] = useState<LatLng>({
    latitude: props.initialCoord?.latitude || 0,
    longitude: props.initialCoord?.longitude || 0,
  });
  const [region, setRegion] = useState<Region>();

  const locationChangeHandler = ({
    nativeEvent: { coordinate },
  }: UserLocationChangeEvent) => {
    if (!coord.latitude && coordinate) {
      const coordinates = {
        latitude: coordinate.latitude,
        longitude: coordinate.longitude,
      };
      setRegion({ ...coordinates, ...deltas });
      setCoord(coordinates);
      props.onCoordChange(coordinates);
    }
  };

  const coordChangeHandler = (coordinates: LatLng) => {
    setCoord(coordinates);
    props.onCoordChange(coordinates);
  };

  const onMapPress = (e: MapPressEvent) =>
    coordChangeHandler(e.nativeEvent.coordinate);

  const onMarkerDragEnd = (e: MarkerDragStartEndEvent) =>
    coordChangeHandler(e.nativeEvent.coordinate);

  return {
    coord,
    region,
    onMapPress,
    onMarkerDragEnd,
    locationChangeHandler,
  };
}
