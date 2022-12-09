import axios from 'axios';

const api = axios.create({
  baseURL: 'https://coffee-delivery-backend-production.up.railway.app/',
  // baseURL: 'http://localhost:3333',
});

export default api;
