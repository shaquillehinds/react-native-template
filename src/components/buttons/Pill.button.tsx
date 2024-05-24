import React from 'react';
import { Body } from '@components/typography';
import { radiusSizes } from '@utils/constants/Layout.const';
import { theme } from '@utils/themes';
import { StyleSheet, TouchableOpacity } from 'react-native';

interface PillButtonProps<ItemInfo> {
  info: ItemInfo;
  onPress: (info: ItemInfo) => void;
  textExtractor: (info: ItemInfo) => string;
  selected?: boolean;
}

export default function PillButton<ItemInfo>(props: PillButtonProps<ItemInfo>) {
  const onPress = () => props.onPress(props.info);
  const configuredStyle = {
    backgroundColor: props.selected ? theme.secondary.medium : theme.input,
  };
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <Body
        style={[configuredStyle, styles.pill]}
        padding={[0.7, 3]}
        color={props.selected ? 'white' : 'primary'}
        fontSize="bodyL">
        {props.textExtractor(props.info)}
      </Body>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  pill: {
    borderWidth: 1,
    borderRadius: radiusSizes.soft,
    overflow: 'hidden',
  },
});
