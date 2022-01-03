import {
  AUTHENTICATION_REFRESH,
  LOGIN_REQUEST_FAIL,
  LOGIN_REQUEST_LOADING,
  LOGIN_REQUEST_SUCCESS,
} from "./authActionTypes";

const initialAuthState = {
  isLoading: false,
  data: {},
  error: {
    message: '',
    status: ''
  }
};

const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST_SUCCESS:
      return { 
        ...state,
        isLoading: action.payload };
    case LOGIN_REQUEST_FAIL:
      return { 
        ...state,
        isLoading: false,
        error: action.payload };
    case LOGIN_REQUEST_LOADING:
      return { 
        isLoading: action.payload };
    case AUTHENTICATION_REFRESH:
      return { 
        ...state,
        data: action.payload };
    default:
      return state;
  }
};

export default authReducer;
