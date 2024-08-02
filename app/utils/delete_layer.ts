// /app/utils/delete_layer.ts
import axios, { AxiosError } from 'axios';

/**
 * Runs the layering API call with the provided session ID.
 *
 * @param sId - The session ID for the request.
 * @returns A promise that resolves to the API response or an error message.
 */
export const delete_layer = async (sId: string): Promise<any> => {
    const formData = new FormData();
    formData.append("sessionId", sId);
    try {
        const response = await axios.post('https://dynamic-202-239.informatik.uni-bremen.de:5000/del-layer', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        // Optionally, handle the response data here
        console.log('delete-layer API response:', response.data);
        return response.data;
    } catch (error) {
        // Check if the error is an Axios error and handle it accordingly
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            console.error('Axios error:', axiosError.message);
            if (axiosError.response) {
                console.error('Response data:', axiosError.response.data);
                console.error('Response status:', axiosError.response.status);
                console.error('Response headers:', axiosError.response.headers);
            } else if (axiosError.request) {
                console.error('No response received:', axiosError.request);
            }
        } else {
            console.error('Non-Axios error:', error);
        }
        // Return a structured error object
        return {
            success: false,
            message: 'Failed to run Marigold API',
            error: error instanceof Error ? error.message : 'Unknown error',
        };
    }
};
