import {
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAIL,
  LOGIN_REQUEST_LOADING,
  AUTHENTICATION_REFRESH,
} from "./authActionTypes";
import {
  handleLoginSuccessResponse,
  handleLoginUnsuccessResponse,
  handleLoadingRequest,
  handleAuthenticationRefresh,
} from "../../handlers/authHandler";
import { login } from "../../api/authAPI";

export const loginAction = (credentials) => {
  return async (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST_LOADING,
      payload: handleLoadingRequest(),
    });
    try {
      let response = await login(credentials);
      dispatch({
        type: LOGIN_REQUEST_SUCCESS,
        payload: handleLoginSuccessResponse(response),
      });
    } catch (error) {
      dispatch({
        type: LOGIN_REQUEST_FAIL,
        payload: handleLoginUnsuccessResponse(error),
      });
    }
  };
};

export const authenticationRefreshAction = () => {
  return (dispatch) => {
    dispatch({
      type: AUTHENTICATION_REFRESH,
      payload: handleAuthenticationRefresh(),
    });
  };
};
