import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.1.103.205:3001',
});

export default api;
