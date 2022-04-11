import create from 'zustand';
import { ProductProps } from '../components/Product/ProductProps';
import loadProducts from '../services/loadProducts';

type typeUseProducts = {
    products: ProductProps[];
    setProducts: (productsList:ProductProps[]) => void;
}

const useProducts = create<typeUseProducts>(set => ({
    products: [],
    setProducts: async(productsList) => {
        
        if (productsList.length === 0) {

            const listProducts = await loadProducts()

            listProducts.map((product) => product.quantity = 0)

            set({products: listProducts});
        } else {
            set({ products: productsList }) 
        }
    }
}));

export default useProducts;