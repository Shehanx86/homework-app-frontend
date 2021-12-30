import jwt_decode from "jwt-decode";

export const handleLoginSuccessResponse = (response) => {
    let { access_token, refresh_token } = response.headers;

    localStorage.setItem('access_token', access_token);
    localStorage.setItem('refresh_token', refresh_token);

    return {
        username: jwt_decode(access_token).sub,
        role: jwt_decode(access_token).roles[0],
        status: response.status
    }
}

export const handleLoginUnsuccessResponse = (error) => {
    logout();
    return {
        status: error.response.status
    }
}

export const handleLoadingRequest = () => {
    return {
        isLoading: true,
    }
}

export const handleAuthenticationRefresh = () => {
    let access_token = localStorage.getItem('access_token')
    if (!access_token) {
        window.location.href = '/login';
    } else {
        return {
            username: jwt_decode(access_token).sub,
            role: jwt_decode(access_token).roles[0],
        }
    }
}

export const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
}

export const retreiveAccessTokenFromLocalStorage = () => {
    const token = localStorage.getItem('access_token')
    if(!token) {
        console.log("not logged in")
    }
    return token;
}

export const retreiveRefreshTokenFromLocalStorage = () => {
    const token = localStorage.getItem('refresh_token')
    if(!token) {
        
    }
    return token;
}