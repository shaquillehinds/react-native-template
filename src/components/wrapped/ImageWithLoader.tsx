import React, { useCallback, useState } from 'react';
import {
  Image,
  ImageErrorEventData,
  ImageResizeMode,
  ImageSourcePropType,
  ImageStyle,
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import { Title } from '@components/typography';
import Image2 from '@components/svgs/filled/Image2';
import { theme } from '@utils/themes';
import { SharedElement } from 'react-navigation-shared-element';

export default function ImageWithLoader({
  source,
  style,
  resizeMode,
  borderRadius,
  blurRadius,
  elementId,
  notFoundPosition = 'absolute',
  watchMode,
}: {
  source: ImageSourcePropType;
  elementId?: string;
  style?: StyleProp<ImageStyle>;
  resizeMode?: ImageResizeMode;
  borderRadius?: number;
  blurRadius?: number;
  notFoundPosition?: 'relative' | 'absolute';
  watchMode?: boolean;
}) {
  const hasSource =
    source instanceof Array
      ? source[0]?.uri
      : typeof source === 'number'
      ? true
      : source?.uri;
  const [imageLoaded, setImageLoaded] = useState<null | boolean>(
    hasSource ? false : null,
  );
  const [imageWidth, setImageWidth] = useState(0);
  const loadEndHandler = () => {
    if (watchMode) setImageLoaded(true);
    else imageLoaded !== null && setImageLoaded(true);
  };
  const errorHandler = useCallback(
    (e: NativeSyntheticEvent<ImageErrorEventData>) => {
      if (
        typeof e.nativeEvent.error === 'string' &&
        e.nativeEvent.error.includes('Pool hard cap')
      )
        return setImageLoaded(true);
      setImageLoaded(null);
    },
    [],
  );
  const noImageContStyles: ViewStyle = {
    backgroundColor: theme.background,
    justifyContent: 'center',
    position: notFoundPosition,
  };
  const noImageTextStyles: TextStyle = {
    fontSize: imageWidth / 5,
    position: 'absolute',
    top: '35%',
    textAlign: 'center',
  };
  return (
    <View style={styles.container}>
      {hasSource && elementId ? (
        <SharedElement id={elementId}>
          <Image
            source={source}
            resizeMode={resizeMode}
            borderRadius={borderRadius}
            style={style}
            onLoadEnd={loadEndHandler}
            blurRadius={blurRadius}
            onError={errorHandler}
          />
        </SharedElement>
      ) : hasSource ? (
        <Image
          source={source}
          resizeMode={resizeMode}
          borderRadius={borderRadius}
          style={style}
          onLoadEnd={loadEndHandler}
          blurRadius={blurRadius}
          onError={errorHandler}
        />
      ) : undefined}
      {!imageLoaded && (
        <View
          onLayout={e =>
            !imageWidth && setImageWidth(e.nativeEvent.layout.width)
          }
          style={[
            style,
            styles.overlay,
            imageLoaded === null && noImageContStyles,
          ]}>
          {imageLoaded === false ? (
            <AnimatedLottieView
              source={require('@assets/lottie/ripple-loader.json')}
              autoPlay
              loop
              speed={1}
            />
          ) : (
            <View style={styles.noImageCont}>
              <Image2 size={imageWidth / 1.3} color={'rgba(122,122,122,.1)'} />
              <Title
                customColor={'rgba(122,122,122,1)'}
                numberOfLines={3}
                style={noImageTextStyles}>
                No Image
              </Title>
            </View>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { position: 'relative' },
  overlay: { position: 'absolute', overflow: 'hidden' },
  noImageCont: { alignItems: 'center', position: 'relative' },
});
