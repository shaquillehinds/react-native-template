interface AddTaskTrigger {
  type: import('@utils/constants/enums').TasksTriggerType.ADD_TASK;
  payload: Task;
}
interface RemoveTaskTrigger {
  type: import('@utils/constants/enums').TasksTriggerType.REMOVE_TASK;
  payload: Task;
}
interface AddNoteTrigger {
  type: import('@utils/constants/enums').TasksTriggerType.ADD_NOTE;
  payload: Task;
}
interface RemoveNoteTrigger {
  type: import('@utils/constants/enums').TasksTriggerType.REMOVE_NOTE;
  payload: Task;
}
interface AddArchiveTrigger {
  type: import('@utils/constants/enums').TasksTriggerType.ADD_ARCHIVE;
  payload: Task;
}
interface RemoveArchiveTrigger {
  type: import('@utils/constants/enums').TasksTriggerType.REMOVE_ARCHIVE;
  payload: Task;
}

type EffectTrigger =
  | AddTaskTrigger
  | RemoveTaskTrigger
  | AddNoteTrigger
  | RemoveNoteTrigger
  | AddArchiveTrigger
  | RemoveArchiveTrigger;
