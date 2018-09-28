import { SHOW_ALERT, HIDE_ALERT, SET_NETWORK_ERROR } from './action';

const nameInitialState = {
  alertVisible: false,
  onCancelAlertHandle: null,
  onSubmitAlertHandle: null
};

export const commonReducer = (state = nameInitialState, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        alertVisible: true,
        alertMessage: action.message,
        onCancelAlertHandle: () => action.onCancel(),
        onSubmitAlertHandle: () => action.onSubmit()
      };
    case HIDE_ALERT:
      return {
        ...state,
        alertVisible: false
      };
    case SET_NETWORK_ERROR:
      return {
        ...state,
        alertVisible: true,
        alertMessage: action.message
      };

    default:
      return state;
  }
};
