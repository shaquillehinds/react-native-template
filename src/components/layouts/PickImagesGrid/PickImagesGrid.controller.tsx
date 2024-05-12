import ImageWithLoader from '@components/wrapped/ImageWithLoader';
import { radiusSizes, relativeX } from '@utils/constants/Layout.const';
import { theme } from '@utils/themes';
import {
  ImageInfo,
  ImagePickerMultipleResult,
  ImagePickerResult,
  launchImageLibraryAsync,
  MediaTypeOptions,
} from 'expo-image-picker';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import AddImageCellOverlay from './components/AddImageCell.overlay';
import { PickImagesGridProps } from './PickImagesGrid';
import { DebugLogger } from '@utils/Logger';
import CloseSquare from '@components/svgs/filled/CloseSquare';
import useCameraPermission from '@hooks/useCameraPermission';

const log = DebugLogger('PickImagesGrid.controller.tsx');

export default function PickImagesGridController(props: PickImagesGridProps) {
  useCameraPermission();
  const imageCells: React.ReactNode[] = [];
  const imageCellContainerStyle = {
    backgroundColor: theme.lightBackground,
  };

  const pickImage = async () => {
    try {
      let result = (await launchImageLibraryAsync({
        mediaTypes: MediaTypeOptions.Images,
        quality: 1,
        selectionLimit: props.amount - props.images.length,
        allowsMultipleSelection: !props.onSimulator,
      })) as ImagePickerResult & ImagePickerMultipleResult;
      if (result.cancelled) return;
      else {
        const selectedImages = result.selected || [
          result as unknown as ImageInfo,
        ];
        props.setImages(prev => {
          const updatedImages = [...prev, ...selectedImages.map(i => i.uri)];
          props.onImagesChange && props.onImagesChange(updatedImages);
          return updatedImages;
        });
      }
    } catch (error) {
      log('error', error);
    }
  };

  const removeImage = (index: number) => () => {
    props.setImages(prev => {
      const updatedImages = prev.filter((item, i) => i !== index);
      props.onImagesChange && props.onImagesChange(updatedImages);
      return updatedImages;
    });
  };

  for (let i = 0; i < props.amount; i++) {
    imageCells.push(
      <View
        key={i}
        style={[styles.imageCellContainer, imageCellContainerStyle]}>
        {i === props.images.length ? (
          <AddImageCellOverlay onPress={pickImage} />
        ) : props.images[i] ? (
          <>
            <ImageWithLoader
              style={styles.image}
              source={{ uri: props.images[i] }}
              elementId={
                i === 0 && props.elementId ? props.elementId : undefined
              }
              watchMode
            />
            <TouchableOpacity
              style={styles.removeImage}
              onPress={removeImage(i)}>
              <CloseSquare color={theme.warning} size={relativeX(6.5)} />
            </TouchableOpacity>
          </>
        ) : undefined}
      </View>,
    );
  }

  return {
    imageCells,
  };
}

const styles = StyleSheet.create({
  removeImage: {
    position: 'absolute',
    right: -5,
    top: -5,
    zIndex: 10,
    borderRadius: radiusSizes.sharp,
    backgroundColor: 'white',
    padding: 0,
  },
  image: {
    borderRadius: radiusSizes.soft,
    borderWidth: 1,
    borderColor: theme.primary.dark,
    height: relativeX(22),
    width: relativeX(22),
  },
  imageCellContainer: {
    borderRadius: radiusSizes.soft,
    height: relativeX(22),
    width: relativeX(22),
    margin: relativeX(2),
  },
});
