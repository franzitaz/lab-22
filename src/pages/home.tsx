import { useState, useEffect, Dispatch, SetStateAction } from "react";
import Cart from "../components/Cart";
import { Container } from "../components/Container";
import Header from "../components/Header";
import ProductsListHome from "../components/ProductsListHome";
import useProducts from "../hooks/useProducts";
import loadProducts from "../services/loadProducts";

export type HomeProps = {
  setScroll: Dispatch<SetStateAction<boolean>>;
};

const Home = ({ setScroll }: HomeProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setProducts } = useProducts();

  useEffect(() => {
    setScroll(isOpen);
  }, [isOpen])

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async() => {
    const listProducts = await loadProducts();

    listProducts.map((product) => product.quantity = 0);

    setProducts(listProducts);
  }

  return (
    <>
      <Header setIsOpen={setIsOpen} />
      <Container>
        <ProductsListHome />
        <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
      </Container>
    </>
  );
};

export default Home;
