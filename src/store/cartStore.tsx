import { ProductsType } from "@/types/productType";
import { create } from "zustand";

interface CartStore {
  cart: ProductsType[];
  addToCart: (product: ProductsType) => void;
  updateQuantity: (id: number, quantity: number) => void;
}
const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addToCart: (product: ProductsType) =>
    set((state: any) => {
      const existingProduct = state.cart.find(
        (item: ProductsType) => item.id === product.id
      );
      if (existingProduct) {
        return {
          cart: state.cart.map((item: ProductsType) =>
            item.id === product.id
              ? { ...item, quantity: (item?.quantity || 0) + 1 }
              : item
          ),
        };
      }
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),

  removeFromCart: (id: number) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),

  updateQuantity: (id: number, quantity: number) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      ),
    })),
}));

export default useCartStore;
