import useProducts from "../../hooks/useProducts";
import Product from "../Product"

const ProductsListHome = () => {

    const {products} = useProducts();

    return (
        <>
            {
                products.map((product) => (
                    <Product key={product.id} {...product} />
                ))
            }
        </>
    );
}

export default ProductsListHome;