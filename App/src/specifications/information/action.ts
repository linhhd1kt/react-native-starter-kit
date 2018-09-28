/**
 * show error
 */
export const SHOW_ERROR = 'SHOW_ERROR';
export const showError = (message: string) => {
  return {
    type: SHOW_ERROR,
    message
  };
};
