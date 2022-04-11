import { currencyFormat } from "../../helpers/currencyFormat";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import Incrementor from "../Incrementor";
import { ProductProps } from "./ProductProps";
import { Wrapper, Info, Column, Text, WrapperIncrementor } from "./styles";

const Product = ({ id, name, price, picture, quantity }: Omit<ProductProps,'stock'>) => {

  const { cart, setCart } = useCart();
  const { products, setProducts } = useProducts();

  const handleIncrement = () => {

    const product = products.find((product) => product.id === id);

    if (product) {
      if (product.stock >= product.quantity + 1) {

        if (cart.length > 0) {
          const product = cart.find((product) => product.id === id)

          if (product) {
            product.quantity = product.quantity + 1;
          } else {
            setCart(id, name, price, picture, 1);
          }
        } else {
          setCart(id, name, price, picture, 1);
        }

        updateProductList('increment');

      }
    }
  }

  const handleDecrement = (quantity: number) => {
    const productQuantity = products.find((product) => product.id === id)!.quantity;

    if (productQuantity - 1 >= 0) {

      const product = cart.find((product) => product.id === id)

      if (product) {
        product.quantity = product.quantity - 1;
      }

      setCart(id, name, price, picture, quantity - 1);
      updateProductList('decrement');

    }
  }

  const updateProductList = (actionType: string) => {

    let product = products.find((product) => product.id === id);

    if (product) {
      if (actionType === 'increment') {
        product.quantity = product.quantity + 1;
        setProducts(products);
      } else {
        product.quantity = product.quantity - 1;
        setProducts(products);
      }
    }
  }

  return (
    <Wrapper>
      <img src={picture} alt={`Imagem de referência ${name}`} />

      <Info>
        <Column>
          <Text>{name}</Text>
          <Text>{currencyFormat(price)}</Text>
        </Column>

        <WrapperIncrementor>
          <Incrementor
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            id={id}
            quantity={quantity} />
        </WrapperIncrementor>
      </Info>
    </Wrapper>
  );
}
export default Product;
