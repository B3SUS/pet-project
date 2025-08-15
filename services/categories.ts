import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constants";
import { category, CategoryWithProducts } from "@/types/category";

export const getChildCategories = async (
  neededParent: number,
): Promise<category[]> => {
  const { data } = await axiosInstance.get<category[]>(
    ApiRoutes.CHILD_CATEGORIES,
    {
      params: { neededParent },
    },
  );
  return data;
};

export const getParentCategories = async (): Promise<category[]> => {
  const { data } = await axiosInstance.get<category[]>(
    ApiRoutes.PARENT_CATEGORIES,
  );
  return data;
};

export const getChildCategoriesWithProducts = async (
  neededParent: number,
): Promise<CategoryWithProducts[]> => {
  const { data } = await axiosInstance.get<CategoryWithProducts[]>(
    ApiRoutes.CHILD_CATEGORIES_WITH_PRODUCTS,
    {
      params: { neededParent },
    },
  );
  return data;
};
