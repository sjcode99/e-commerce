
import { create } from "zustand";
import axios from "axios";
import { ProductsType } from "@/types/productType";

interface ProductStore {
    products: ProductsType[]
    fetchProducts: () => void

    shuffledProducts: ProductsType[]
}

const useProductStore = create<ProductStore>((set) => ({
    products: [],
    shuffledProducts: [],
    fetchProducts: async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            const shuffledProducts = response.data.sort(() => Math.random() - 0.5).slice(0, 3);
            set({
                products: response.data,
                shuffledProducts: shuffledProducts
            });
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }
}));

export default useProductStore;