import React, { useState } from 'react';
import { FlatList, FlatListProps, ListRenderItem } from 'react-native';
import { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import DraggableFlatlistItem from './DraggableFlatlist.renderItem';

interface DraggableFlatlistProps<T> extends FlatListProps<T> {
  data: T[];
  renderItem: ListRenderItem<T>;
}

export default function DraggableFlatlist<T>(props: DraggableFlatlistProps<T>) {
  const activeItemTranslateY = useSharedValue(0);
  const swapIndexValues = useSharedValue({ prev: 0, curr: 0 });

  const [activeIndex, setActiveIndex] = useState<number>();
  const [swapIndex, setSwapIndex] = useState<number>();
  const [itemHeight, setItemHeight] = useState<number>(0);

  const [list, setList] = useState(props.data);

  const activeItemAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: activeItemTranslateY.value }],
  }));

  return (
    <FlatList
      {...props}
      data={list}
      renderItem={({ index, item, separators }) => (
        <DraggableFlatlistItem<T>
          swapIndexValues={swapIndexValues}
          activeItemAnimatedStyle={activeItemAnimatedStyle}
          activeItemTranslateY={activeItemTranslateY}
          activeIndex={activeIndex}
          index={index}
          item={item}
          renderItem={props.renderItem({ index, item, separators })}
          itemHeight={itemHeight}
          setActiveIndex={setActiveIndex}
          setItemHeight={setItemHeight}
          setSwapIndex={setSwapIndex}
          swapIndex={swapIndex}
          list={activeIndex === index ? list : []}
          setList={setList}
        />
      )}
    />
  );
}
