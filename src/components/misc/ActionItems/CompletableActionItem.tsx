import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import ActionItem, { ActionItemProps } from './ActionItem.base';
import { relativeX } from '@utils/constants/Layout.const';
import TickSquare from '@components/svgs/filled/TickSquare';
import { theme } from '@utils/themes';

interface CompletedCircleProps<ItemInfo> {
  completed?: boolean;
  onCompletePress: (info: ItemInfo, event: GestureResponderEvent) => void;
  itemInfo: ItemInfo;
}
function CompletedCircle<ItemInfo>(props: CompletedCircleProps<ItemInfo>) {
  const onCompletedCirclePress: (
    event: GestureResponderEvent,
  ) => void = event => props.onCompletePress(props.itemInfo, event);
  return (
    <TouchableOpacity
      style={styles.completedCircle}
      onPress={onCompletedCirclePress}>
      {is(props.completed) && (
        <View style={styles.completedCircleTick}>
          <TickSquare color={theme.secondary.medium} size={40} />
        </View>
      )}
    </TouchableOpacity>
  );
}

interface CompletableActionItemProps<ItemInfo>
  extends ActionItemProps<ItemInfo>,
    CompletedCircleProps<ItemInfo> {}

export default function CompletableActionItem<ItemInfo>(
  props: CompletableActionItemProps<ItemInfo>,
) {
  return (
    <ActionItem
      {...props}
      LeftComponent={
        <CompletedCircle
          completed={props.completed}
          itemInfo={props.itemInfo}
          onCompletePress={props.onCompletePress}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  completedCircle: {
    overflow: 'hidden',
    width: relativeX(7),
    height: relativeX(7),
    borderWidth: 1,
    borderColor: theme.border,
    borderRadius: relativeX(14),
    marginRight: relativeX(3),
  },
  completedCircleTick: { position: 'absolute', left: -7, top: -7 },
});
