import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constants";
import { cart } from "@/types/cart";

export const getCart = async (): Promise<cart[]> => {
  const { data } = await axiosInstance.get<cart[]>(ApiRoutes.CART);
  return data;
};
