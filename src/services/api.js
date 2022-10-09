import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '26390614-440d4a1ea806ddcf9832f9246';

export const getImages = async (query, page, per_page) => {
  const response = await axios.get('', {
    params: {
      q: query,
      page: page,
      key: API_KEY,
      per_page: per_page,
    },
  });
  return response.data;
};
