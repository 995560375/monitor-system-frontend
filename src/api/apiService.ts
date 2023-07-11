import axios, { AxiosResponse } from 'axios';
import { BackendResponse } from './types'; // adjust the path accordingly

// Define the base URL for your API
const API_URL = 'http://localhost:8080';

// Create an axios instance
const apiInstance = axios.create({
    baseURL: API_URL,
});

const apiService = {
    getFailures: async (page: number, size: number): Promise<AxiosResponse<BackendResponse>> => {
        return apiInstance.get('/failures', {
            params: {
                page,
                size,
            },
        });
    },
    // Add other endpoints here...
};

export default apiService;
