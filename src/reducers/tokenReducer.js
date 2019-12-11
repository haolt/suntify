import { DELETE_TOKEN, SET_TOKEN } from '../constants/TOKEN_CONST';

const defaultState = {
  isAuthenticated: false
};

export const tokenReducer = (state = defaultState, action) => {
  const { token } = action;
  switch (action.type) {
  case SET_TOKEN:
    return {
      ...state,
      token: token,
      isAuthenticated: true,
    };
  case DELETE_TOKEN:
    return {
      ...state,
      token: '',
      isAuthenticated: false,
    };
  default:
    return state;
  }
};

export default tokenReducer;