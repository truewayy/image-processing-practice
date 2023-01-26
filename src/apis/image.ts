import http from './instance';

export const getImg = async () => {
  try {
    const { data } = await http.get({
      url: '/images',
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
