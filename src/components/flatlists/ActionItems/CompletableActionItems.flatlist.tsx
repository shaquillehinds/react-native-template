import { relativeX, relativeY } from '@utils/constants/Layout.const';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import CompletableActionItem from '@components/misc/ActionItems/CompletableActionItem';
import { ActionItemsFlatlistProps } from './ActionsItems.flatlist';

interface CompletableActionItemsFlatlistProps<ItemInfo>
  extends ActionItemsFlatlistProps<ItemInfo> {
  items: ItemInfo[];
  keyExtractor: (item: ItemInfo, index: number) => string;
  titleExtractor: (item: ItemInfo, index: number) => string;
  subTitleExtractor?: (item: ItemInfo, index: number) => string;
  isCompleted: (item: ItemInfo, index: number) => boolean;
  onActionItemPress: (item: ItemInfo) => void;
  onCompleteItemPress: (item: ItemInfo) => void;
  refreshing?: boolean;
  onRefresh?: () => void;
  onEndReached?: (info: { distanceFromEnd: number }) => void;
  onEndReachedThreshold?: number;
  showArrow?: boolean;
}

// const separator = {
//   backgroundColor: theme.lightBackground,
// };
const Separator = () => <View style={[styles.seperator]} />;

export default function CompletableActionItemsFlatlist<ItemInfo>(
  props: CompletableActionItemsFlatlistProps<ItemInfo>,
) {
  return (
    <FlatList
      renderItem={({ item, index }) => {
        return (
          <CompletableActionItem
            title={props.titleExtractor(item, index)}
            subTitle={
              props.subTitleExtractor
                ? props.subTitleExtractor(item, index)
                : undefined
            }
            itemInfo={item}
            onPress={props.onActionItemPress}
            onCompletePress={props.onCompleteItemPress}
            completed={props.isCompleted(item, index)}
            showArrow={props.showArrow}
          />
        );
      }}
      keyExtractor={props.keyExtractor}
      data={props.items}
      showsVerticalScrollIndicator={false}
      refreshing={props.refreshing}
      onRefresh={props.onRefresh}
      onEndReached={props.onEndReached}
      onEndReachedThreshold={props.onEndReachedThreshold}
      directionalLockEnabled
      scrollEnabled={props.scrollEnabled}
      style={[
        styles.flatlistStyle,
        is(props.showOverflow) && styles.showOverflow,
      ]}
      ItemSeparatorComponent={Separator}
    />
  );
}

const styles = StyleSheet.create({
  seperator: {
    height: relativeY(0.1),
    marginVertical: relativeY(0.6),
  },
  flatlistStyle: {
    marginBottom: relativeY(1),
    left: 0,
    width: relativeX(100),
  },
  showOverflow: { overflow: 'visible' },
});
