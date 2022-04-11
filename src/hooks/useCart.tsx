import create from 'zustand';
import { ProductProps } from "../components/Product/ProductProps"

type typeUseCart = {
    cart: Omit<ProductProps, 'stock'>[];
    setCart: (
        id: number,
        name: string,
        price: number,
        picture: string,
        quantity: number) => void;
}

const useCart = create<typeUseCart>((set) => ({
    cart: [],
    setCart: (id, name, price, picture, quantity) => {
        set(({ cart }) => {
            let permission = true;
            cart.forEach(products => {if (products.id === id) permission = false});

            if (permission) {
                return {cart: [...cart, {id, name, picture, price, quantity}]}
            }
            
            return {cart};
        })
    }
}))

export default useCart;
