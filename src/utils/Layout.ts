import { Dimensions, PixelRatio, Platform } from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const wHeight = Dimensions.get('window').height;

const diff = height - wHeight;

const scale = 0.11519078473722104;

interface Layout {
  SCREEN_WIDTH: number;
  SCREEN_HEIGHT: number;
  isSmallDevice: boolean;
  isBigDevice: boolean;
  relativeY: (num: number) => number;
  relativeX: (num: number) => number;
  normalize: (size: number) => number;
  isIOS: boolean;
}

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = wHeight;
export const isSmallDevice = width < 375;
export const isBigDevice = width > 1100;
export const relativeX = (num: number) => (height - diff / 2) * (num / 100);
export const relativeY = (num: number) => width * (num / 100);
export const isIOS = Platform.OS === 'ios';
export function normalize(size: number) {
  const newSize = relativeY(size * scale);
  if (Platform.OS === 'ios') {
    return PixelRatio.roundToNearestPixel(newSize);
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
}

const Layout: Layout = {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  isSmallDevice,
  isBigDevice,
  relativeY,
  relativeX,
  normalize,
  isIOS,
};

export default Layout;
