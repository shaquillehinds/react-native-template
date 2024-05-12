import { Gesture } from 'react-native-gesture-handler';
import { runOnJS, withTiming } from 'react-native-reanimated';
import { DetectorHandlerProps } from './ReDrawer.types';
import runOnJSHandlers from './runOnJS.handlers';

const useDetectorHandler = ({
  drawerWidth,
  trackingX,
  translateX,
  progress,
  contextX,
  setDrawerState,
}: DetectorHandlerProps) => {
  const detectorHandler = Gesture.Pan()
    .onStart(() => {
      contextX.value = trackingX.value;
      runOnJS(runOnJSHandlers.onStartJS)({ setDrawerState });
    })
    .onUpdate(event => {
      if (trackingX.value <= 0) {
        translateX.value = 0;
      } else if (trackingX.value >= drawerWidth) {
        translateX.value = drawerWidth;
      } else {
        translateX.value = trackingX.value;
      }
      trackingX.value = event.translationX + contextX.value;
    })
    .onEnd(() => {
      if (progress.value >= 0.5) {
        trackingX.value = drawerWidth;
        translateX.value = withTiming(drawerWidth, { duration: 200 });
      } else {
        trackingX.value = 0;
        translateX.value = withTiming(0, { duration: 200 });
      }
    })
    .onFinalize(() => {
      runOnJS(runOnJSHandlers.onFinalizeJS)({
        progressValue: progress.value,
        setDrawerState,
      });
    });

  detectorHandler.config.minDist = 1;

  return detectorHandler;
};
export default useDetectorHandler;
