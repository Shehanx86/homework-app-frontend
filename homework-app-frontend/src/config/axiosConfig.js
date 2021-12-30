import axios from 'axios';

const baseURL = 'http://localhost:8080/api';

const instance = axios.create({
    baseURL: baseURL
});

instance.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
  
instance.interceptors.response.use(
    response => response,
    error => {

        if(error.response.status === 403 ){

        const originalRequest = error.config;

        const accessToken = localStorage.getItem('access_token');
        const refreshToken = localStorage.getItem('refresh_token');

        if(!refreshToken || !accessToken){
            window.location.href = '/login';
            return Promise.reject(error);
        }

        const accessTokenParts = JSON.parse(atob(accessToken.split('.')[1]));
        const refreshTokenParts = JSON.parse(atob(refreshToken.split('.')[1]));
        const now = Math.ceil(Date.now() / 1000);

        if ( accessTokenParts.exp > now ) {
            return Promise.reject(error);
        }

            if (refreshTokenParts.exp > now) {
                return instance
                .get('/token/refresh', { headers: { Authorization: 'Bearer ' + refreshToken}})
                .then((response) => {

                    localStorage.setItem('access_token', response.headers.access_token);
                    instance.defaults.headers['Authorization'] = 'Bearer ' + response.headers.access_token;
                    originalRequest.headers['Authorization'] = 'Bearer ' + response.headers.access_token;
    
                    return instance(originalRequest);
                })
                .catch(err => {
                    console.log(err)
                });

            }else{
                window.location.href = '/login';
            }

        } else {
            return Promise.reject(error);
        }
    }
);

export default instance;