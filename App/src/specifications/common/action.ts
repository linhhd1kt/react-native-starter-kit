/**
 * Show Alert
 */
export const SHOW_ALERT = 'SHOW_ALERT';
export const showAlert = (
  message: AlertMessage,
  onCancel?: () => void,
  onSubmit?: () => void
) => ({
  type: SHOW_ALERT,
  message,
  onCancel: () => console.log('xxxxx'),
  onSubmit: () => console.log('yyyyy')
});

/**
 * Hide Alert
 */
export const HIDE_ALERT = 'HIDE_ALERT';
export const hideAlert = () => ({
  type: HIDE_ALERT
});

/**
 * Set network error
 */
export const SET_NETWORK_ERROR = 'SET_NETWORK_ERROR';
export const setNetworkError = () => ({
  type: SET_NETWORK_ERROR
});
