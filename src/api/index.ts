import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL ?? 'https://arent-test-api.onrender.com';

export const axiosInstance = axios.create({
    baseURL: apiUrl,
});

export default axiosInstance;