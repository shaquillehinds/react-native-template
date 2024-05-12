import {
  relativeX,
  relativeY,
  SCREEN_WIDTH,
} from '@utils/constants/Layout.const';
import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
  ViewToken,
} from 'react-native';
import ImageWithLoader from '@components/wrapped/ImageWithLoader';
import { useImageSizes } from '@hooks/useImageSize';
import BaseModal, { BaseModalProps } from '../Base.modal';
import { FlatList } from 'react-native-gesture-handler';
const maxWidth = relativeX(95);
const maxHeight = relativeY(90);

export interface FocusedImageSlideModalProps extends BaseModalProps {
  elementId?: string;
  images: string[];
  flatlistContainerStyles?: ViewStyle;
  onImagePress?: (image: string) => void;
  index: number;
}

export default function FocusedImageSlideModal(
  props: FocusedImageSlideModalProps,
) {
  const { imageSizes } = useImageSizes({
    images: props.images,
    maxHeight,
    maxWidth,
  });
  const flatlistRef = useRef<FlatList>(null);
  const viewabilityConfig = useRef({
    waitForInteraction: true,
    itemVisiblePercentThreshold: 75,
  }).current;

  const [activeIndex, setActiveIndex] = useState(props.index);

  useEffect(() => {
    setActiveIndex(props.index);
    const flatlist = flatlistRef.current;
    if (flatlist) {
      setTimeout(() => {
        flatlist.scrollToIndex({ index: props.index, animated: false });
      }, 20);
    }
  }, [props.index]);

  const onViewableItemsChanged = useRef<
    (info: { viewableItems: ViewToken[]; changed: ViewToken[] }) => void
  >(({ viewableItems }) => {
    if (viewableItems[0]) {
      viewableItems[0].index !== null && setActiveIndex(viewableItems[0].index);
    }
  }).current;
  return (
    <BaseModal
      {...props}
      contentContainerStyle={styles.contentContainer}
      backdropComponent={
        <View style={[styles.container, props.flatlistContainerStyles]}>
          <FlatList
            renderItem={({ item, index }) => {
              const imagePressHandler = () =>
                props.onImagePress && props.onImagePress(item);
              return (
                <TouchableOpacity
                  style={styles.imageContainer}
                  activeOpacity={1}
                  onPress={imagePressHandler}
                  key={item}>
                  <ImageWithLoader
                    elementId={index === 0 ? props.elementId : undefined}
                    source={{ uri: item }}
                    style={[imageSizes[index], styles.image]}
                  />
                </TouchableOpacity>
              );
            }}
            keyExtractor={data => data}
            ref={flatlistRef}
            data={props.images}
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={viewabilityConfig}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatlistContentContainer}
            horizontal
            pagingEnabled
            getItemLayout={(_, index) => ({
              index,
              length: props.images.length,
              offset: index * SCREEN_WIDTH,
            })}
          />
          <ActiveSlideIndicator
            amount={props.images.length}
            activeIndex={activeIndex}
          />
        </View>
      }
    />
  );
}

interface ActiveSlideIndicatorProps {
  amount: number;
  activeIndex: number;
}

function ActiveSlideIndicator(props: ActiveSlideIndicatorProps) {
  const indicatorWidth = relativeX(13);

  const indicators: React.ReactNode[] = [];

  for (let i = 0; i < props.amount; i++) {
    const style: ViewStyle = {
      height: 3.5,
      width: indicatorWidth,
      borderRadius: 20,
      marginRight: props.amount === 1 ? 0 : relativeX(2),
      backgroundColor:
        i === props.activeIndex ? 'white' : 'rgba(255,255,255,.6)',
    };
    indicators.push(<View key={i} style={style} />);
  }

  return <View style={styles.slideIndicatorContainer}>{indicators}</View>;
}

const styles = StyleSheet.create({
  container: {
    marginTop: relativeY(8),
    alignSelf: 'center',
  },
  contentContainer: {
    backgroundColor: 'rgba(30,30,30,.8)',
  },
  flatlistContentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: { width: SCREEN_WIDTH, alignItems: 'center' },
  image: {
    borderRadius: relativeX(5),
  },
  slideIndicatorContainer: {
    width: SCREEN_WIDTH,
    position: 'absolute',
    bottom: relativeY(7),
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
