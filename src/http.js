// src/http.js

import axios from 'axios';

const http = axios.create({
    baseURL: 'http://ymqapi.ynwaspectre.cn/api/', // 替换为你的 API 基础 URL
    timeout: 10000, // 请求超时时间
    headers: {
        'Content-Type': 'application/json',
        // 你可以在这里添加其他的头部信息，比如 Authorization
    },
});

// 请求拦截器
http.interceptors.request.use(
    config => {
        // 在发送请求之前做些什么
        return config;
    },
    error => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 响应拦截器
http.interceptors.response.use(
    response => {
        // 对响应数据做些什么
        return response;
    },
    error => {
        // 对响应错误做些什么
        return Promise.reject(error);
    }
);

export default http;