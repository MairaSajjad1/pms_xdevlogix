// import { Product } from "@/views/products-list";
import { create } from "zustand";

interface Product {
  a: string;
}

interface IProduct {
  product: {} | null;
  setProduct: (arg: Product) => void;
}

const useProduct = create<IProduct>((set) => ({
  product: null,
  setProduct: (product) => set({ product }),
  clearProduct: () => set({ product: null }),
}));

export default useProduct;
