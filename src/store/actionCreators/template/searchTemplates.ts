import { Dispatch } from 'redux';
import { TemplateActionType } from '@store/actionTypes';
import { TemplateAction } from '@store/actions';

const searchTemplates = (term: string) => {
  return async (dispatch: Dispatch<TemplateAction>) => {
    dispatch({ type: TemplateActionType.TEMPLATE_LOADING, payload: true });
    try {
      const payload: string[] = await new Promise((res, rej) => {
        setTimeout(() => res(['template1', 'template2']), 1000);
      });
      dispatch({ type: TemplateActionType.SET_TEMPLATES, payload });
    } catch (error: any) {
      dispatch({
        type: TemplateActionType.TEMPLATE_ERROR,
        payload: error.message,
      });
    }
  };
};

export default searchTemplates;
