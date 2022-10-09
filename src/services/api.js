import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    page: 1,
    key: '26390614-440d4a1ea806ddcf9832f9246',
    per_page: 12,
  },
});

export const getImages = async (query, page, per_page, key) => {
  const { data } = await instance.get('', {
    params: {
      q: query,
      page: page,
      key: key,
      per_page: per_page,
    },
  });
  return data;
};
