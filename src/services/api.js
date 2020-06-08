/**
 * yarn add axios
 */
import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:3333/gobarber',
  baseURL: 'https://api.sgeinformatica.com.br/gobarber',
});

export default api;
