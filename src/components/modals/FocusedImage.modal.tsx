import {
  relativeX,
  relativeY,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '@utils/constants/Layout.const';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import BaseModal, { BaseModalProps } from './Base.modal';
import ImageWithLoader from '@components/wrapped/ImageWithLoader';
import useImageSize from '@hooks/useImageSize';
const maxWidth = relativeX(90);
const maxHeight = relativeY(60);

export interface FocusedImageModalProps extends BaseModalProps {
  image?: string;
}

export default function FocusedImageModal(props: FocusedImageModalProps) {
  const {
    imageSize: { width, height },
  } = useImageSize({ image: props.image, maxHeight, maxWidth });
  return (
    <BaseModal
      {...props}
      contentContainerStyle={styles.contentContainer}
      backdropComponent={
        props.image ? (
          <View
            style={styles.imageContainer}
            onTouchStart={() => props.setShow(false)}>
            <View
              onTouchStart={e => {
                e.stopPropagation();
              }}>
              <ImageWithLoader
                style={[styles.image, { width, height }]}
                source={{ uri: props.image }}
              />
            </View>
          </View>
        ) : undefined
      }
    />
  );
}

const styles = StyleSheet.create({
  contentContainer: { backgroundColor: 'rgba(30,30,30,.8)' },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  image: {
    borderRadius: relativeX(5),
    width: relativeX(50),
    height: relativeX(50),
  },
});
