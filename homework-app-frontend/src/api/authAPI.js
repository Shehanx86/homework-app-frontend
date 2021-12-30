import axiosConfig from "../config/axiosConfig";

export const login = (credentials) => {
    return axiosConfig.post('/login', credentials);
}