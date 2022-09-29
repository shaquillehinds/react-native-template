import React from 'react';
import { PropsWithChildren, useEffect } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import threads from './DraggableFlatlist.threads';
import { DraggableFlatlistItemProps } from './DraggableFlatlist.types';
import immutableMove from '@utils/immutableMove';

export default function DraggableFlatlistItem<T>(
  props: PropsWithChildren<DraggableFlatlistItemProps<T>>,
) {
  const itemSharedValue = useSharedValue(0);

  useEffect(() => {
    if (props.swapIndex === undefined) {
      itemSharedValue.value = 0;
    } else {
      const movedBack =
        Math.abs(props.swapIndexValues.value.curr) <
        Math.abs(props.swapIndexValues.value.prev);
      if (movedBack) {
        let prevIndex =
          props.swapIndexValues.value.prev > 0
            ? props.swapIndex + 1
            : props.swapIndex - 1;
        if (prevIndex === props.index)
          itemSharedValue.value = withTiming(0, {
            duration: 250,
            easing: Easing.out(Easing.ease),
          });
      } else if (props.swapIndex === props.index) {
        itemSharedValue.value = withTiming(
          props.swapIndexValues.value.curr < 0
            ? props.itemHeight
            : -props.itemHeight,
          { duration: 250, easing: Easing.out(Easing.ease) },
        );
      }
    }
  }, [props.swapIndex]);

  const gesture = Gesture.Pan()
    .onUpdate(e => {
      if (props.activeIndex === undefined) return;

      props.activeItemTranslateY.value = e.translationY;

      const movedByAbs = Math.floor(
        Math.abs(e.translationY / props.itemHeight),
      );
      const movedBy = e.translationY < 0 ? -movedByAbs : movedByAbs;

      if (props.activeIndex + movedBy > props.list.length - 1) return;
      if (props.activeIndex + movedBy < 0) return;

      if (movedBy !== props.swapIndexValues.value.curr) {
        props.swapIndexValues.value = {
          curr: movedBy,
          prev: props.swapIndexValues.value.curr,
        };

        runOnJS(threads.swapIndexOnJS)({
          movedBy,
          activeIndex: props.activeIndex,
          setSwapIndex: props.setSwapIndex,
        });
      }
    })
    .onEnd(() => {
      if (props.activeIndex === undefined) return;

      if (props.swapIndexValues.value.curr !== 0) {
        runOnJS(threads.updateListOnJS)({
          setSwapIndex: props.setSwapIndex,
          setActiveIndex: props.setActiveIndex,
          list: props.list,
          setList: props.setList,
          immutableMove,
          from: props.activeIndex,
          to: props.swapIndexValues.value.curr + props.activeIndex,
        });
      }
      runOnJS(threads.resetActiveTranslateY)({
        activeItemTranslateY: props.activeItemTranslateY,
      });

      props.swapIndexValues.value = { prev: 0, curr: 0 };
    });

  const itemAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: itemSharedValue.value }],
  }));

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={[
          props.activeIndex === undefined
            ? { transform: [{ translateY: 0 }] }
            : props.index === props.activeIndex
            ? props.activeItemAnimatedStyle
            : itemAnimatedStyle,
        ]}
        onTouchStart={() => props.setActiveIndex(props.index)}
        onLayout={e => {
          props.index === 0 && props.setItemHeight(e.nativeEvent.layout.height);
        }}>
        {props.renderItem}
      </Animated.View>
    </GestureDetector>
  );
}
