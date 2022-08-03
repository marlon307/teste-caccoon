import axios from 'axios';

const api = axios.create({
  baseURL: process.env.LOCAL_API_HOST,
  // withCredentials: true,
});

export default api;
