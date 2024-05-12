import { DrawerState } from './ReDrawer.types';

interface UpdateDrawerState {
  setDrawerState: React.Dispatch<React.SetStateAction<DrawerState>>;
}

interface FinalUpdate extends UpdateDrawerState {
  progressValue: number;
}

const runOnJSHandlers = {
  onFinalizeJS: (attached: FinalUpdate) => {
    if (attached.progressValue <= 0.5) attached.setDrawerState('closed');
    else attached.setDrawerState('open');
  },
  onStartJS: (attached: UpdateDrawerState) => {
    attached.setDrawerState('transition');
  },
  onTouchEndJS: (attached: UpdateDrawerState) => {
    attached.setDrawerState('closed');
  },
};

export default runOnJSHandlers;
