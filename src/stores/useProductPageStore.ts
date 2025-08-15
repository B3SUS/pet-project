import { product } from ".prisma/client";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { error } from "next/dist/build/output/log";
import { Api } from "../../services/api-client";
interface ProductPageStore {
  product: product | undefined;
  isLoading: boolean;
  initialized: boolean;
  error: Error | null;

  initializeStore: (productId: number) => Promise<void>;
  fetchProduct: (productId: number) => Promise<product>;
}

export const useProductPageStore = create<ProductPageStore>()(
  persist(
    (set, get) => ({
      product: undefined,
      isLoading: true,
      initialized: false,
      error: null,

      initializeStore: async (productId: number) => {
        const { initialized, product } = get();
        if (initialized && product && product?.id === productId) {
          return;
        }
        set({ isLoading: true });
        try {
          const state = get();
          let updates: Partial<ProductPageStore> = {};
          if (state.product === undefined) {
            updates.product = await get().fetchProduct(productId);
          }
          set({
            ...updates,
            initialized: true,
            isLoading: false,
          });
        } catch (error) {
          set({ error: error as Error, isLoading: false });
        }
      },

      fetchProduct: async (productId: number) => {
        return await Api.products.getSingleProduct(productId);
      },
    }),
    {
      name: "product-page-store",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        product: state.product,
        initialized: state.initialized,
      }),
    },
  ),
);
