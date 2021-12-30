import {
  LOGIN_REQUEST_FAIL,
  LOGIN_REQUEST_LOADING,
  LOGIN_REQUEST_SUCCESS,
} from "./actionTypes";

const initialAuthState = {
  isLoading: false,
  username: "",
  isLoggedIn: false,
  access_token: "",
  refresh_token: "",
  status: 0,
  error: "",
};

const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST_SUCCESS:
      let authSuccess = action.payload;
      return { authSuccess };

    case LOGIN_REQUEST_FAIL:
      let authUnsuccess = action.payload;
      return { authUnsuccess };

    case LOGIN_REQUEST_LOADING:
      let authLoading = action.payload;
      return { authLoading };

    default:
      return state;
  }
};

export default authReducer;
