// 拦截器
import axios from "axios";

const instance = axios.create({

    baseURL: 'http://tp5code.com',
    timeout: 1000,
    // 请求头
    headers: {}
})

axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么  有些接口需要带 token
    let token = localStorage.getItem('token')
    if (token) {
        // 设置头部带有token
        config.headers = {
            'token': token
        }
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
})

// 拦截器  -- 相应拦截
axios.interceptors.response.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
})


export default instance