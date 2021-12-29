import axios from "axios"
import jwt_decode from "jwt-decode";

export const login = (credentials) => {
    const params = new URLSearchParams();
    params.append('username', credentials.username);
    params.append('password', credentials.password);
    
    return axios.post('http://localhost:8080/api/login', params);
}

export const handleLoginSuccessResponse = (response) => {
    let { access_token, refresh_token } = response.headers;

    localStorage.setItem('access_token', JSON.stringify(access_token));
    localStorage.setItem('refresh_token', JSON.stringify(refresh_token));

    return {
        isLoading: false,
        isLoggedIn: true,
        username: jwt_decode(access_token).sub,
        access_token: access_token,
        refresh_token: refresh_token,
        status: response.status
    }
}

export const handleLoginUnsuccessResponse = (error) => {
    return {
        isLoading: false,
        isLoggedIn: false,
        username: "",
        access_token: "",
        refresh_token: "",
        status: error.response.status
    }
}

export const handleLoadingRequest = () => {
    return {
        isLoading: true,
        isLoggedIn: false,
        username: "",
        access_token: "",
        refresh_token: "",
        status: 0
    }
}

export const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
}
