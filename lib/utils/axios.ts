import Axios from 'axios';

/**
 * Pre-configured axios instance for API requests
 */
export const axios = Axios.create({
  baseURL: '/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 30000, // 30 seconds
});

export default axios;
