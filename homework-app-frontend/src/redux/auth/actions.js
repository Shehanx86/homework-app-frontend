import { LOGIN_REQUEST_SUCCESS, LOGIN_REQUEST_FAIL, LOGIN_REQUEST_LOADING} from "./actionTypes";
import { login, logout, handleLoginSuccessResponse, handleLoginUnsuccessResponse, handleLoadingRequest } from "../../service/authService";

export const loginAction = (credentials) => {
    return async (dispatch) => {
        dispatch({
            type: LOGIN_REQUEST_LOADING,
            payload: handleLoadingRequest()
        })
        try {
            let response = await login(credentials);
            dispatch({
                type: LOGIN_REQUEST_SUCCESS,
                payload: handleLoginSuccessResponse(response)
            })
        } catch(error) {
            logout();
            dispatch({
                type: LOGIN_REQUEST_FAIL,
                payload: handleLoginUnsuccessResponse(error)
            })
        }
    }
}

