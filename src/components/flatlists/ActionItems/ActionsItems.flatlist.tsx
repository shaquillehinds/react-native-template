import { relativeX, relativeY } from '@utils/constants/Layout.const';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ActionItem from '@components/misc/ActionItems/ActionItem.base';
import { View } from 'react-native';

export interface ActionItemsFlatlistProps<ItemInfo> {
  items: ItemInfo[];
  LeftComponent?: (item: ItemInfo) => React.ReactElement;
  keyExtractor: (item: ItemInfo, index: number) => string;
  titleExtractor: (item: ItemInfo, index: number) => string;
  subTitleExtractor?: (item: ItemInfo, index: number) => string;
  onActionItemPress: (item: ItemInfo) => void;
  refreshing?: boolean;
  onRefresh?: () => void;
  onEndReached?: (info: { distanceFromEnd: number }) => void;
  onEndReachedThreshold?: number;
  scrollEnabled?: boolean;
  showOverflow?: boolean;
  showArrow?: boolean;
}

const Separator = () => <View style={[styles.seperator]} />;
export default function ActionItemsFlatlist<ItemInfo>(
  props: ActionItemsFlatlistProps<ItemInfo>,
) {
  return (
    <FlatList
      renderItem={({ item, index }) => {
        return (
          <ActionItem
            LeftComponent={
              props.LeftComponent ? props.LeftComponent(item) : undefined
            }
            showArrow={props.showArrow}
            title={props.titleExtractor(item, index)}
            subTitle={
              props.subTitleExtractor
                ? props.subTitleExtractor(item, index)
                : undefined
            }
            itemInfo={item}
            onPress={props.onActionItemPress}
          />
        );
      }}
      keyExtractor={props.keyExtractor}
      data={props.items}
      showsVerticalScrollIndicator={false}
      refreshing={props.refreshing}
      onRefresh={props.onRefresh}
      onEndReached={props.onEndReached}
      style={[
        styles.flatlistStyle,
        is(props.showOverflow) && styles.showOverflow,
      ]}
      directionalLockEnabled
      onEndReachedThreshold={props.onEndReachedThreshold}
      ItemSeparatorComponent={Separator}
    />
  );
}

const styles = StyleSheet.create({
  seperator: {
    marginVertical: relativeY(0.8),
  },
  flatlistStyle: {
    marginBottom: relativeY(10),
    left: 0,
    width: relativeX(100),
  },
  showOverflow: { overflow: 'visible' },
});
