import useCart from "../../hooks/useCart";
import Product from "../Product"

const ProductsListCart = () => {

    const { cart } = useCart();

    return (
        <>
            {
                cart.map((product) => (
                    product.quantity > 0 && <Product key={product.id} {...product} />
                ))
            }
        </>
    );
}

export default ProductsListCart;