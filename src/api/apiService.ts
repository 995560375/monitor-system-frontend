import axios, { AxiosResponse } from 'axios';
import {BackendResponse, Task} from './types'; // adjust the path accordingly

// Define the base URL for your API
const API_URL = 'http://localhost:5001';

// Create an axios instance
const apiInstance = axios.create({
    baseURL: API_URL,
});

const apiService = {
    getAllTasks: async (): Promise<Task[]> => {
        const response: AxiosResponse<Task[]> = await apiInstance.get('/api/tasks');
        // console.log(response)
        return response.data;
    },
    // Add other endpoints here...
};

export default apiService;
