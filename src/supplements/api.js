import axios from "axios";

const accessKey = "AmfxiR-8jHuxcHH5ycSxOHRWijywbo2KdiP32awBQdk";
const apiUrl = "https://api.unsplash.com/";

export const requestImages = async () => {
  const { data } = await axios.get(
    `${apiUrl}/search/photos?client_id=${accessKey}`
  );
  return data;
};

export const searchImagesByRequest = async (query = "", page = 1) => {
  const { data } = await axios.get(
    `${apiUrl}/search/photos?client_id=${accessKey}&query=${query}&page=${page}`
  );
  return data;
};
