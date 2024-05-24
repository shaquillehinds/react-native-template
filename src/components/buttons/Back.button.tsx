import ArrowLeft from '@components/svgs/outline/ArrowLeft';
import { relativeX } from '@utils/constants/Layout.const';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Spaces } from '@styles/Spacer/Spacer.types';
import { transformSpacing } from '@styles/Spacer/Spacer.style';

export default function BackButton(props: {
  backgroundColor?: string;
  arrowColor?: string;
  margin?: Spaces;
}) {
  const style = {
    backgroundColor: props.backgroundColor || 'transparent',
  };
  return (
    <View
      style={[
        styles.button,
        style,
        props.margin && transformSpacing({ margin: props.margin }),
      ]}>
      <ArrowLeft
        color={props.arrowColor || 'white'}
        size={30}
        strokeWidth={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    padding: relativeX(1),
    marginLeft: relativeX(4),
    zIndex: 100,
    flexDirection: 'row',
  },
});
