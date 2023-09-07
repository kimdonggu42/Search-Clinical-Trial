import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export const BASE_API = axios.create({
  baseURL: BASE_URL,
});
