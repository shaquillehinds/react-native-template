import shadowStyles from '@styles/Shadow.style';
import {
  relativeY,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '@utils/constants/Layout.const';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { ReDrawerStylesProps } from './ReDrawer.types';

export default function useReDrawerStyles(props: ReDrawerStylesProps) {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        fullContainer: {
          flex: 1,
          flexDirection: 'row',
          backgroundColor: props.backgroundColor || '#FAFAFA',
        },
        drawerContainer: {
          height: SCREEN_HEIGHT,
          width: props.drawerWidth,
          backgroundColor: props.backgroundColor || '#FAFAFA',
          position: 'absolute',
        },
        appContainer: {
          width: SCREEN_WIDTH,
          position: 'relative',
          overflow: 'hidden',
          flex: 1,
          borderRadius: relativeY(5),
        },
        gestureDetectorArea: {
          width: props.edgeWidth,
          height: SCREEN_HEIGHT,
          position: 'absolute',
          left: 0,
          zIndex: 999999,
        },
        overlay: {
          position: 'absolute',
          width: SCREEN_WIDTH,
          height: SCREEN_HEIGHT,
          backgroundColor: 'rgba(0,0,0,.3)',
        },
      }),
    [props.backgroundColor],
  );
  return styles;
}
