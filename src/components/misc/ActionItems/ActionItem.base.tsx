import RowLayout from '@components/layouts/Row.layout';
import ArrowRight2 from '@components/svgs/outline/ArrowRight2';
import { Body, Title } from '@components/typography';
import shadowStyles from '@styles/Shadow.style';
import { transformSpacing } from '@styles/Spacer/Spacer.style';
import { Spacing } from '@styles/Spacer/Spacer.types';
import {
  radiusSizes,
  relativeX,
  relativeY,
} from '@utils/constants/Layout.const';
import { theme } from '@utils/themes';
import React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

export interface ActionItemProps<ItemInfo> extends Spacing {
  itemInfo: ItemInfo;
  title: string;
  onPress: (info: ItemInfo, event: GestureResponderEvent) => void;
  LeftComponent?: React.ReactElement;
  RightComponent?: React.ReactElement;
  subTitle?: string;
  containerStyle?: StyleProp<ViewStyle>;
  showArrow?: boolean;
}

export default function ActionItem<ItemInfo>(props: ActionItemProps<ItemInfo>) {
  const onActionItemPress: (event: GestureResponderEvent) => void = event =>
    props.onPress(props.itemInfo, event);
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onActionItemPress}
      style={[
        styles.container,
        transformSpacing({ margin: props.margin, padding: props.padding }),
        props.containerStyle,
      ]}>
      <RowLayout center>
        {props.LeftComponent}
        <View style={styles.textContainer}>
          <Title numberOfLines={1} fontSize="titleL">
            {props.title}
          </Title>
          {is(props.subTitle) && (
            <Body margin={[0.8, 0, 0, 0]} fontSize="bodyL">
              {props.subTitle}
            </Body>
          )}
        </View>
      </RowLayout>
      {props.RightComponent
        ? props.RightComponent
        : is(props.showArrow) && <ArrowRight2 />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    width: relativeX(65),
  },
  container: {
    ...shadowStyles(),
    width: relativeX(93),
    height: relativeY(13),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.input,
    borderWidth: 1,
    borderColor: theme.border,
    borderRadius: radiusSizes.soft,
    paddingHorizontal: relativeX(5),
  },
});
