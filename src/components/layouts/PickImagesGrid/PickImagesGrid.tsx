import React from 'react';
import RowLayout from '../Row.layout';
import PickImagesGridController from './PickImagesGrid.controller';

export interface PickImagesGridProps {
  onSimulator?: boolean;
  amount: number;
  images: string[];
  elementId?: string;
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
  onImagesChange?: (images: string[]) => void;
}

export default function PickImagesGrid(props: PickImagesGridProps) {
  const controller = PickImagesGridController(props);
  return (
    <RowLayout centerX center wrap>
      {controller.imageCells}
    </RowLayout>
  );
}
