import {
  ResetActiveTranslateYProps,
  SwapIndexOnJSProps,
  UpdateListOnJSProps,
} from './DraggableFlatlist.types';

const swapIndexOnJS = (attached: SwapIndexOnJSProps) => {
  attached.setSwapIndex(attached.movedBy + attached.activeIndex);
};
const resetActiveTranslateY = (attached: ResetActiveTranslateYProps) => {
  setTimeout(() => (attached.activeItemTranslateY.value = 0));
};

const updateListOnJS = (attached: UpdateListOnJSProps) => {
  setTimeout(() => {
    attached.setSwapIndex(undefined);
  });
  attached.setActiveIndex(undefined);
  const newList = attached.immutableMove(
    attached.list,
    attached.from,
    attached.to,
  );
  attached.setList(newList);
};

const threads = { swapIndexOnJS, resetActiveTranslateY, updateListOnJS };

export default threads;
