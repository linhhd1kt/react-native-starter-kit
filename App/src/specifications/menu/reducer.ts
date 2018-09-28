import { SHOW_ERROR } from './action';

const initialAuthState = {};

export const menuReducer = (state = initialAuthState, action: any) => {
  switch (action.type) {
    case SHOW_ERROR:
      return {
        ...state,
        error: action
      };

    default:
      return state;
  }
};
