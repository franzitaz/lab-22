import create from 'zustand';
import { ProductProps } from '../components/Product/ProductProps';

type typeUseProducts = {
    products: ProductProps[];
    setProducts: (productsList:ProductProps[]) => void;
}

const useProducts = create<typeUseProducts>(set => ({
    products: [],
    setProducts: (productsList) => set({ products: productsList })
}));

export default useProducts;