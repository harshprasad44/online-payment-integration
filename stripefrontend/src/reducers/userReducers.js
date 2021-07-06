import { SAVE_USER_INFO } from "../constants/userConstants";

export const userReducer = (state = { userInfo: {} }, action) => {
  switch (action.type) {
    case SAVE_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };

    default:
      return state;
  }
};
