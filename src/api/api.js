// src/api/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:5119/api', // Android Emülatör için. Gerçek cihazda IP adresi kullan
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => {
    console.log(`[API Request] ${config.method?.toUpperCase()} - ${config.url}`);
    return config;
  },
  (error) => {
    console.error('[API Request Error]', error);
    return Promise.reject(error);
  }
);

// 📥 Yanıt interceptor'ı (response aşamasında log)
api.interceptors.response.use(
  (response) => {
    console.log(`[API Response]`, response.status, response.data);
    return response;
  },
  (error) => {
    if (error.response) {
      console.error(`[API Error] ${error.response.status} - ${error.response.config.url}`);
    } else {
      console.error('[API Error] No response received:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
