import axios, { AxiosResponse } from "axios";
import { Image } from "../components/App/App";

interface UnsplashApiResponse {
  total_pages: number;
  results: Image[];
}

const accessKey: string = "AmfxiR-8jHuxcHH5ycSxOHRWijywbo2KdiP32awBQdk";
const apiUrl: string = "https://api.unsplash.com/";

export const requestImages = async (): Promise<UnsplashApiResponse> => {
  const { data }: AxiosResponse<UnsplashApiResponse> = await axios.get(
    `${apiUrl}/search/photos?client_id=${accessKey}`
  );
  return data;
};

export const searchImagesByRequest = async (
  query: string = "",
  page: number = 1
): Promise<UnsplashApiResponse> => {
  const { data }: AxiosResponse<UnsplashApiResponse> = await axios.get(
    `${apiUrl}/search/photos?client_id=${accessKey}&query=${query}&page=${page}`
  );
  return data;
};
