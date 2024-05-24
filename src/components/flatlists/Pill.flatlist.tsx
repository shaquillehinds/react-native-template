import PillButton from '@components/buttons/Pill.button';
import { relativeX } from '@utils/constants/Layout.const';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

export interface PillFlatlistProps<ItemInfo> {
  items: ItemInfo[];
  keyExtractor: (item: ItemInfo, index: number) => string;
  textExtractor: (item: ItemInfo) => string;
  selectedExtractor: (item: ItemInfo) => boolean;
  onPillPress: (item: ItemInfo) => void;
  refreshing?: boolean;
  onRefresh?: () => void;
  onEndReached?: (info: { distanceFromEnd: number }) => void;
  onEndReachedThreshold?: number;
  scrollEnabled?: boolean;
  showOverflow?: boolean;
}

const Separator = () => <View style={[styles.seperator]} />;
export default function PillFlatlist<ItemInfo>(
  props: PillFlatlistProps<ItemInfo>,
) {
  return (
    <FlatList
      keyExtractor={props.keyExtractor}
      data={props.items}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      refreshing={props.refreshing}
      onRefresh={props.onRefresh}
      onEndReached={props.onEndReached}
      style={[
        styles.flatlistStyle,
        is(props.showOverflow) && styles.showOverflow,
      ]}
      horizontal
      directionalLockEnabled
      onEndReachedThreshold={props.onEndReachedThreshold}
      contentContainerStyle={{ paddingRight: relativeX(10) }}
      renderItem={({ item }) => {
        return (
          <PillButton
            info={item}
            onPress={props.onPillPress}
            textExtractor={props.textExtractor}
            selected={props.selectedExtractor(item)}
          />
        );
      }}
      ItemSeparatorComponent={Separator}
    />
  );
}

const styles = StyleSheet.create({
  seperator: {
    marginHorizontal: relativeX(1),
  },
  flatlistStyle: {
    width: relativeX(100),
  },
  showOverflow: { overflow: 'visible' },
});
