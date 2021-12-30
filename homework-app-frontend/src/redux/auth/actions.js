import { LOGIN_REQUEST_SUCCESS, LOGIN_REQUEST_FAIL, LOGIN_REQUEST_LOADING, AUTHENTICATION_REFRESH} from "./actionTypes";
import { handleLoginSuccessResponse, handleLoginUnsuccessResponse, handleLoadingRequest, handleAuthenticationRefresh } from "../../service/authService";
import { login } from "../../api/authAPI";

export const loginAction = (credentials) => {
    return async (dispatch) => {
        dispatch({
            type: LOGIN_REQUEST_LOADING,
            payload: handleLoadingRequest()
        })
        try {
            let response = await login(credentials);
            console.log("login suc")
            dispatch({
                type: LOGIN_REQUEST_SUCCESS,
                payload: handleLoginSuccessResponse(response)
            })
        } catch(error) {
            console.log("login fai")
            dispatch({
                type: LOGIN_REQUEST_FAIL,
                payload: handleLoginUnsuccessResponse(error)
            })
        }
    }
}

export const authenticationRefreshAction = () => {
    return (dispatch) => {
        dispatch({
            type: AUTHENTICATION_REFRESH,
            payload: handleAuthenticationRefresh()
        })
    }
}
