import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL ?? 'http://localhost:3001';

export const axiosInstance = axios.create({
    baseURL: apiUrl,
});

export default axiosInstance;