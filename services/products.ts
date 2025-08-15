import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constants";
import { product } from "@/types/category";

export const search = async (query: string): Promise<product[]> => {
  const { data } = await axiosInstance.get<product[]>(
    ApiRoutes.SEARCH_PRODUCTS,
    {
      params: { query },
    },
  );
  return data;
};

export const getAll = async (): Promise<product[]> => {
  const { data } = await axiosInstance.get<product[]>(ApiRoutes.PRODUCTS);
  return data;
};

export const getSingleProduct = async (productId: number): Promise<product> => {
  const { data } = await axiosInstance.get<product>(ApiRoutes.SINGLE_PRODUCT, {
    params: { productId },
  });
  return data;
};
