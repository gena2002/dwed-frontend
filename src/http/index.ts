import axios from "axios";

const $api = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_API_HOST || '',
})

$api.interceptors.request.use((config) => {
    // config.headers.Authorization = `Token ${localStorage.getItem('token')}`;
    // config.headers['Content-Type'] = 'multipart/form-data';
    return config;
})

// export const $auth = axios.create({
//     withCredentials: true,
//     baseURL: process.env.REACT_APP_API_HOST,
// })
//
//
// $auth.interceptors.request.use((config) => {
//     config.headers['Content-Type'] = 'multipart/form-data';
//     return config;
// })


export default $api;