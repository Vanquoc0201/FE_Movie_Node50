// src/services/axiosClient.ts
import { ACCESS_TOKEN, DOMAIN } from '@/constant/app.constant';
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: DOMAIN, // thay bằng base URL thật của bạn
  headers: {
    'Content-Type': 'application/json',
  },
});

// Tự động thêm token vào headers nếu có
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('AccessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


export default axiosClient;
