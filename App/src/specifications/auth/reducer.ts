import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './actions';

const initialAuthState = {
  isLoggedIn: false,
  isLoading: false
};

export const authReducer = (state = initialAuthState, action: any) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false
      };
    default:
      return state;
  }
};
