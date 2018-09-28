import { SHOW_ERROR } from './action';

const initialState = {};

export const favoritesReducer = (state = initialState, action: any) => {
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
