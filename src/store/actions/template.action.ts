import { TemplateActionType } from '@store/actionTypes';

interface LoadingAction {
  type: TemplateActionType.TEMPLATE_LOADING;
  payload: boolean;
}
interface ErrorAction {
  type: TemplateActionType.TEMPLATE_ERROR;
  payload: string | null;
}

interface SearchTemplatesAction {
  type: TemplateActionType.SET_TEMPLATES;
  payload: string[];
}

export type TemplateAction =
  | LoadingAction
  | ErrorAction
  | SearchTemplatesAction;
