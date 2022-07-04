import axios from 'axios';

const API_KEY = 'b32eb43a76msh027c61529c7d35ap1f27bdjsn75558f4a0f9f';
const API_HOST = 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com';
export const api = axios.create({
  baseURL: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com',
});

api.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': API_HOST,
    };
    return config;
  },
  (err) => Promise.reject(err)
);
