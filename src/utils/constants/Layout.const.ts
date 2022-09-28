import { Dimensions, PixelRatio, Platform, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const wHeight = Dimensions.get('window').height;

const diff = height - wHeight;

const scale = 0.11519078473722104;

const fontScale = 1;

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = wHeight;
export const isSmallDevice = width < 375;
export const isBigDevice = width > 1100;
export const relativeY = (num: number) => (height - diff / 2) * (num / 100);
export const relativeX = (num: number) => width * (num / 100);
export const isIOS = Platform.OS === 'ios';
export const statusBarHeight = Constants.statusBarHeight || relativeY(5);
export function normalize(size: number) {
  const newSize = relativeY(size * scale);
  if (Platform.OS === 'ios') {
    return PixelRatio.roundToNearestPixel(newSize);
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
}

export const fontSizes: { [key in FontSize]: number } = {
  headingL: normalize(26 * fontScale),
  headingM: normalize(24 * fontScale),
  headingS: normalize(22 * fontScale),
  titleL: normalize(20 * fontScale),
  titleM: normalize(18 * fontScale),
  titleS: normalize(16 * fontScale),
  bodyL: normalize(14 * fontScale),
  bodyM: normalize(12 * fontScale),
  bodyS: normalize(10 * fontScale),
};
export const borderSizes: { [key in BorderSize]: number } = {
  razor: relativeX(0.1),
  thin: relativeX(0.25),
  medium: relativeX(0.5),
  large: relativeX(0.75),
};

export const radiusSizes: { [key in RadiusSize]: number } = {
  edgy: relativeX(0.5),
  sharp: relativeX(1.5),
  medium: relativeX(2.5),
  soft: relativeX(4),
  curvy: relativeX(6),
  round: relativeX(8),
};

export const buttonSizes: {
  [key in ButtonSize]: {
    paddingHorizontal: number;
    paddingVertical: number;
    fontSize: FontSize;
    borderRadius: RadiusSize;
    width?: number | string;
  };
} = {
  small: {
    paddingHorizontal: relativeX(11),
    paddingVertical: relativeY(0.6),
    fontSize: 'bodyS',
    borderRadius: 'medium',
  },
  medium: {
    paddingHorizontal: relativeX(15),
    paddingVertical: relativeY(1.0),
    fontSize: 'bodyL',
    borderRadius: 'soft',
  },
  large: {
    paddingHorizontal: relativeX(18),
    paddingVertical: relativeY(1.5),
    fontSize: 'titleL',
    borderRadius: 'curvy',
  },
  wide: {
    paddingHorizontal: relativeX(18),
    paddingVertical: relativeY(1.5),
    fontSize: 'titleL',
    borderRadius: 'curvy',
    width: relativeX(85),
  },
  auto: {
    paddingHorizontal: relativeX(18),
    paddingVertical: relativeY(1.5),
    fontSize: 'titleL',
    borderRadius: 'curvy',
    width: '100%',
  },
};
