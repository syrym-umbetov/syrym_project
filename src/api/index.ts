import axios from 'axios';

const API_KEY = '964cd5e2a6msh496f722349b2e54p1092a3jsna97717d0d003';
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
