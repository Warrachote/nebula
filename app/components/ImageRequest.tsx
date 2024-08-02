import axios from 'axios';

/**
 * Fetches an image using a session ID and index, with a fallback to a local image if not found.
 * @param {String} sId - The session ID for the image request.
 * @param {number} index - The index used in the image filename.
 * @returns {Promise<String>} - A promise that resolves to the image URL.
 */
export async function fetchImageWithFallback(sId: string, index: number): Promise<string> {
  // Construct the URL using template literals
  const url = `https://dynamic-202-239.informatik.uni-bremen.de:5000/get-image?sessionId=${sId}&filename=${index}.png`;
  const fallbackImageUrl = 'WhiteBG.jpg'; // Path to the local fallback image

  try {
    // Perform the Axios GET request
    const response = await axios.get(url, { responseType: 'blob' });

    if (response.status === 200) {
      // If the response is OK, create a URL for the image blob
      const imageBlob = response.data;
      const imageUrl = URL.createObjectURL(imageBlob);
      return imageUrl;
    } else {
      // If the response is not OK (e.g., 404), use the fallback image
      console.warn('Image not found, using fallback image.');
      return fallbackImageUrl;
    }
  } catch (error) {
    // Handle network or other errors
    console.error('Network error:', error);
    return fallbackImageUrl;
  }
}
