import React from 'react';
import { SharedValue } from 'react-native-reanimated';

/*
Thread Props
*/

export interface SwapIndexOnJSProps {
  movedBy: number;
  activeIndex: number;
  setSwapIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export interface ResetActiveTranslateYProps {
  activeItemTranslateY: SharedValue<number>;
}

export interface UpdateListOnJSProps {
  list: any;
  from: number;
  to: number;
  immutableMove: (list: any, from: number, to: number) => any[];
  setSwapIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
  setList: React.Dispatch<React.SetStateAction<any[]>>;
}

/*
Draggable Flatlist item props
*/

export interface DraggableFlatlistItemProps<T> {
  list: T[];
  index: number;
  item: T;
  activeItemAnimatedStyle: { transform: { translateY: number }[] };
  activeItemTranslateY: SharedValue<number>;
  itemHeight: number;
  activeIndex?: number;
  swapIndexValues: SharedValue<{ prev: number; curr: number }>;
  swapIndex?: number;
  setSwapIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
  setItemHeight: React.Dispatch<React.SetStateAction<number>>;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
  setList: React.Dispatch<React.SetStateAction<T[]>>;
  renderItem: React.ReactNode;
}
