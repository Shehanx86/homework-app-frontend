import {
  AUTHENTICATION_REFRESH,
  LOGIN_REQUEST_FAIL,
  LOGIN_REQUEST_LOADING,
  LOGIN_REQUEST_SUCCESS,
} from "./actionTypes";

const initialAuthState = {};

const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST_SUCCESS:
      return { success: action.payload };
    case LOGIN_REQUEST_FAIL:
      return { unsuccess: action.payload };
    case LOGIN_REQUEST_LOADING:
      return { loading: action.payload };
    case AUTHENTICATION_REFRESH:
      return { refresh: action.payload };
    default:
      return state;
  }
};

export default authReducer;
