import axios from 'axios';

const API_KEY = `40628111-d18d88f0f03b506895fdeef53`;
const BASE_URL = 'https://pixabay.com/api/';
const PICS_ON_PAGE = 12;

export const getSearch = async (searchText, page) => {
  const params = new URLSearchParams({
    q: searchText,
    page: page,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: PICS_ON_PAGE,
  });
  const response = await axios.get(`${BASE_URL}?${params}`);

  return response.data;
};
