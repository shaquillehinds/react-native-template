import React from 'react';
import {
  ImageResizeMode,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  TouchableOpacity,
} from 'react-native';
import ImageWithLoader from './ImageWithLoader';
export default function PressableImage({
  source,
  style,
  resizeMode,
  onPress,
  borderRadius,
  activeOpacity,
  disablePress,
  blurRadius,
  onLongPress,
  notFoundPosition,
  elementId,
}: {
  source: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
  resizeMode?: ImageResizeMode;
  borderRadius?: number;
  onPress?: (any?: any) => any;
  activeOpacity?: number;
  disablePress?: boolean;
  blurRadius?: number;
  onLongPress?: (any?: any) => any;
  elementId?: string;
  notFoundPosition?: 'relative' | 'absolute';
}) {
  return (
    <TouchableOpacity
      disabled={disablePress}
      activeOpacity={activeOpacity}
      onPress={onPress}
      delayLongPress={250}
      onLongPress={onLongPress}>
      <ImageWithLoader
        elementId={elementId}
        source={source}
        resizeMode={resizeMode}
        style={style}
        borderRadius={borderRadius}
        blurRadius={blurRadius}
        notFoundPosition={notFoundPosition}
      />
    </TouchableOpacity>
  );
}
