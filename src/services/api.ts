import axios from 'axios';

const JSON_SERVER_API_URL = import.meta.env.VITE_JSON_SERVER_API_URL;
const api = axios.create({
  baseURL: JSON_SERVER_API_URL,
});

export default api;
