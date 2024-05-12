import cameraPermission from '@utils/permissions/cameraPermission';
import { useEffect } from 'react';

export default function useCameraPermission() {
  useEffect(() => {
    cameraPermission();
  }, []);
}
