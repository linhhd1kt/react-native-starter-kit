// login action
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (email: string, password: string) => {
  return {
    types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
    payload: {
      request: {
        method: 'post',
        url: '/auth/driver/login',
        data: {
          email,
          password
        }
      }
    }
  };
};
