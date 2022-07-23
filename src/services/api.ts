import axios from 'axios';

const api = axios.create({
  baseURL: 'https://coffee-delivery-backend.herokuapp.com/',
});

export default api;
