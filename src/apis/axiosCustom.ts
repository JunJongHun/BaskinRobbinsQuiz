import axios from 'axios';

export const axiosCustom = axios.create({
  baseURL: '/',
  headers: {
    'Content-Type': 'application/json',
  },
});
