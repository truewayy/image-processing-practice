import { API_URLS } from './../constants/apiUrls';
import http from './instance';

export const getImg = async () => {
  try {
    const { data } = await http.get({
      url: API_URLS.DATA.IMAGES,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
