import { useState } from 'react';
import { LatLng } from 'react-native-maps';
import { MapModalProps } from './Map.modal';

export default function MapController(props: MapModalProps) {
  const [coord, setCoord] = useState<LatLng>({ latitude: 0, longitude: 0 });

  const coordChangeHandler = (coordinates: LatLng) => setCoord(coordinates);

  const cancelHandler = () => props.setShow(false);

  const saveHandler = () => {
    props.onCoordSave(coord);
    props.setShow(false);
  };

  return {
    saveHandler,
    cancelHandler,
    coordChangeHandler,
  };
}
