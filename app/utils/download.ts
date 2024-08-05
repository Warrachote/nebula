// /app/utils/layer.ts
import axios, { AxiosError } from 'axios';

/**
 * Runs the layering API call with the provided parameters to download images.
 *
 * @param sId - The session ID for the request.
 * @param layer_count - The index of the layer for the request.
 * @returns A promise that resolves to a boolean indicating success or an error message.
 */
export const download_all = async (sId: string, layer_count: number): Promise<boolean> => {
    const saveAll = true;
    try {
        const response = await axios.get('https://dynamic-202-239.informatik.uni-bremen.de:5000/download-images', {
            params: {
                sessionId: sId,
                saveAll: saveAll,
                index: layer_count,
            },
            responseType: 'blob', // This is important for downloading files
        });

        // Create a link element to trigger the download
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'downloaded-images.zip'); // Default file name for download
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(url);

        return true; // Return true to indicate success
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
        // Return false to indicate failure
        return false;
    }
};
