import { TemplateAction } from '@store/actions/template.action';
import { TemplateActionType } from '@store/actionTypes';

const initialState: TemplateState = {
  loading: false,
  error: null,
  templates: [],
};

const templateReducer = (
  state = initialState,
  action: TemplateAction,
): TemplateState => {
  switch (action.type) {
    case TemplateActionType.TEMPLATE_LOADING:
      return { ...state, loading: action.payload };
    case TemplateActionType.TEMPLATE_ERROR:
      return { ...state, error: action.payload, loading: false };
    case TemplateActionType.SET_TEMPLATES:
      return { ...state, templates: action.payload, loading: false };
    default:
      return state;
  }
};

export default templateReducer;
