import { DELETE_TOKEN, SET_TOKEN } from '../constants/TOKEN_CONST';

export const setToken = token => (
  {
    type: SET_TOKEN,
    token
  }
);
export const deleteToken = () => (
  {
    type: DELETE_TOKEN
  }
)