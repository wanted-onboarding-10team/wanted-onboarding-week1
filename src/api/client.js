import axios from 'axios';

/* Axios 설정 */
const client = axios.create({
  baseURL: 'https://pre-onboarding-selection-task.shop/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

client.interceptors.request.use(config => {
  const accessToken = localStorage.getItem('access_token');
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

export default client;
