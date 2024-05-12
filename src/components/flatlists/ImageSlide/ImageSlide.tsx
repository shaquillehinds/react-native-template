import ImageWithLoader from '@components/wrapped/ImageWithLoader';
import {
  relativeX,
  relativeY,
  SCREEN_WIDTH,
} from '@utils/constants/Layout.const';
import React, { useRef, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
  ViewToken,
} from 'react-native';

interface ImageSlideProps {
  elementId?: string;
  images: string[];
  flatlistContainerStyles?: ViewStyle;
  onImagePress?: (image: string, index: number) => void;
}

export default function ImageSlide(props: ImageSlideProps) {
  const viewabilityConfig = useRef({
    waitForInteraction: true,
    itemVisiblePercentThreshold: 75,
  }).current;

  const [activeIndex, setActiveIndex] = useState(0);

  const onViewableItemsChanged = useRef<
    (info: { viewableItems: ViewToken[]; changed: ViewToken[] }) => void
  >(({ viewableItems }) => {
    // log('warn', viewableItems, changed);
    if (viewableItems[0]) {
      viewableItems[0].index !== null && setActiveIndex(viewableItems[0].index);
    }
  }).current;
  return (
    <View style={[styles.container, props.flatlistContainerStyles]}>
      <FlatList
        renderItem={({ item, index }) => {
          const imagePressHandler = () =>
            props.onImagePress && props.onImagePress(item, index);
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={imagePressHandler}
              key={item}>
              <ImageWithLoader
                elementId={index === 0 ? props.elementId : undefined}
                source={{ uri: item }}
                style={styles.container}
              />
            </TouchableOpacity>
          );
        }}
        keyExtractor={data => data}
        data={props.images}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        horizontal
        pagingEnabled
      />
      <ActiveSlideIndicator
        amount={props.images.length}
        activeIndex={activeIndex}
      />
    </View>
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
    width: SCREEN_WIDTH,
    height: relativeY(50),
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
