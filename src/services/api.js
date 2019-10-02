/**
 * yarn add axios
 */
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.237:3333',
});

export default api;
