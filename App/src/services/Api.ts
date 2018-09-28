import axios from 'axios';
import { URL_END_POINT } from '../config/config';

export const Api = axios.create({
  baseURL: URL_END_POINT
});

export const configHeader = (token: string) => {
  if (token) {
    Api.defaults.headers.common.Authorization = 'Bearer ' + token;
  } else {
    Api.defaults.headers.common.Authorization = null;
  }
};
