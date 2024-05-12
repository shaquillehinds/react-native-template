import { DebugLogger } from '@utils/Logger';
import { uploadImageCloudFunction } from '@env';
import axios, { AxiosError } from 'axios';
import { Image } from 'react-native-compressor';

const log = DebugLogger('getImageUri.ts');
const uploadEndpoint = uploadImageCloudFunction;

interface GetImageUriProps {
  localUri: string | string[];
  upload_preset: 'profile_picture' | 'product_picture';
  compress?: boolean;
}

export default async function getImageUri({
  localUri,
  compress,
}: GetImageUriProps) {
  log('warn', uploadEndpoint);
  if (typeof localUri === 'string') {
    const remoteUri = await uploadToBucket({ localUri, compress });
    if (typeof remoteUri === 'string') return { uri: remoteUri };
    else return { error: remoteUri.error };
  } else {
    if (localUri.length === 0) return { error: 'Empty array of images' };
    const uris: string[] = [];
    let error: any;
    for (let uri of localUri) {
      const remoteUri = await uploadToBucket({
        localUri: uri,
        compress,
      });
      if (typeof remoteUri === 'string') uris.push(remoteUri);
      else error = '';
    }
    if (uris.length > 0) return { uri: uris };
    else {
      return { error };
    }
  }
}

export async function uploadToBucket({
  localUri,
  compress,
  quality,
}: UploadToBucketProps) {
  let image = localUri;
  try {
    if (compress) {
      image = await Image.compress(localUri, {
        quality: quality || 0.7,
        returnableOutputType: 'base64',
      });
    }
    const uid =
      Date.now().toString(16) +
      Math.floor(Math.random() * 100000000000).toString(16);
    const response = await axios.post(uploadEndpoint, {
      fileName: uid,
      image,
    });
    // log('warn', response.data);
    if (typeof response.data === 'string') {
      return response.data.split('?')[0];
    }
    throw new Error(response.request);
  } catch (error) {
    let e = error as AxiosError;
    log('warn', e.request);
    log('warn', error);
    return { error };
  }
}

interface UploadProps {
  localUri: string;
  compress?: boolean;
  quality?: number;
}

interface UploadToBucketProps extends UploadProps {}
