import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchProductsBySkinType = async (skinType) => {
  try {
    const response = await axios.get(`${API_URL}?skinType=${skinType}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching skin type products:', error);
    throw error;
  }
};
