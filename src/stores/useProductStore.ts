import { create } from "zustand";
import { Api } from "../../services/api-client";
import { notFound } from "next/navigation";
import { CategoryWithProducts } from "@/types/category";
import { category, product } from ".prisma/client";
import { createJSONStorage, persist } from "zustand/middleware";

interface ProductStore {
  products: product[];
  filteredProducts: product[];
  isLoading: boolean;
  error: Error | null;
  parentCategories: category[];
  childCategories: category[];
  __parentCats: category[];
  __fetchParentCats: () => Promise<void>;

  fetchProducts: () => Promise<product[]>;
  applyFilters: (filterCategoryIds: Set<number>) => void;
  fetchParentCategories: () => Promise<category[]>;
  initializeStore: (categoryName: string) => Promise<void>;
  fetchChildCategoriesWithProducts: (
    categoryId: number,
  ) => Promise<CategoryWithProducts[]>;

  initialized: boolean;
  currentCategory: string | null;
}

export const useProductStore = create<ProductStore>()(
  persist(
    (set, get) => ({
      products: [],
      filteredProducts: [],
      isLoading: false,
      error: null,
      parentCategories: [],
      childCategories: [],
      initialized: false,
      currentCategory: null,
      __parentCats: [],

      initializeStore: async (categoryName: string) => {
        const { initialized, currentCategory, products, parentCategories } =
          get();
        if (
          initialized &&
          currentCategory?.toLowerCase() === categoryName.toLowerCase() &&
          products.length > 0 &&
          parentCategories.length > 0
        )
          return;
        set({ isLoading: true, currentCategory: categoryName });
        try {
          const state = get();
          let updates: Partial<ProductStore> = {};

          if (state.parentCategories.length === 0) {
            updates.parentCategories = await get().fetchParentCategories();
          }

          if (state.products.length === 0) {
            updates.products = await get().fetchProducts();
          }

          const parentCategories =
            updates.parentCategories || state.parentCategories;
          const category = parentCategories.find(
            (cat) => cat.name.toLowerCase() === categoryName.toLowerCase(),
          );

          if (category) {
            const childCatsWithProducts =
              await get().fetchChildCategoriesWithProducts(category.id);
            const childProducts = childCatsWithProducts.flatMap(
              (cat) => cat.product || [],
            );
            const childCats = childCatsWithProducts.map((cat) => ({
              id: cat.id,
              name: cat.name,
              parent_category_id: cat.parent_category_id,
            }));

            updates.products = childProducts;
            updates.childCategories = childCats;
          } else if (parentCategories.length > 0) {
            set({ isLoading: false });
            notFound();
            return;
          }

          set({
            ...updates,
            initialized: true,
            isLoading: false,
            currentCategory: categoryName,
            filteredProducts: updates.products,
          });
        } catch (error) {
          set({ error: error as Error, isLoading: false });
        }
      },

      fetchProducts: async () => {
        return await Api.products.getAll();
      },
      fetchParentCategories: async () => {
        return await Api.categories.getParentCategories();
      },
      __fetchParentCats: async () => {
        const __parentCats = await Api.categories.getParentCategories();
        set({ __parentCats: __parentCats });
      },
      fetchChildCategoriesWithProducts: async (categoryId: number) => {
        return await Api.categories.getChildCategoriesWithProducts(categoryId);
      },

      applyFilters: (filterCategoryIds: Set<number>) => {
        const { products } = get();

        const filteredProducts =
          filterCategoryIds.size === 0
            ? products
            : products.filter((product) =>
                filterCategoryIds.has(product.category_id),
              );
        set({ filteredProducts: filteredProducts });
      },
    }),
    {
      name: "product-store",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        products: state.products,
        filteredProducts: state.filteredProducts,
        parentCategories: state.parentCategories,
        childCategories: state.childCategories,
        __parentCats: state.__parentCats,
        initialized: state.initialized,
        currentCategory: state.currentCategory,
      }),
    },
  ),
);
