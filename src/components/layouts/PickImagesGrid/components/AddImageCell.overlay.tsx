import Plus from '@components/svgs/outline/Plus';
import { radiusSizes, relativeY } from '@utils/constants/Layout.const';
import { theme } from '@utils/themes';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

interface AddImageProps {
  onPress: () => void;
}

export default function AddImageCellOverlay(props: AddImageProps) {
  const addImageContainerStyle = {
    borderColor: theme.primary.dark,
  };

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.addImageContainer, addImageContainerStyle]}>
      <Plus size={relativeY(16)} color={theme.primary.dark} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  addImageContainer: {
    position: 'absolute',
    justifyContent: 'center',
    overflow: 'hidden',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: radiusSizes.soft,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
