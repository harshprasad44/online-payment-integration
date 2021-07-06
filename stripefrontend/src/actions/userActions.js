import { SAVE_USER_INFO } from "../constants/userConstants";

export const saveUserInfo = (data) => (dispatch) => {
  dispatch({
    type: SAVE_USER_INFO,
    payload: data,
  });
};
