import { useState, useEffect, Dispatch, SetStateAction } from "react";
import Cart from "../components/Cart";
import { Container } from "../components/Container";
import Header from "../components/Header";
import ProductsListHome from "../components/ProductsListHome";
import useProducts from "../hooks/useProducts";

export type HomeProps = {
  setScroll: Dispatch<SetStateAction<boolean>>;
};

const Home = ({setScroll}:HomeProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const {setProducts} = useProducts();

  useEffect(() => {
    setScroll(isOpen);
  }, [isOpen])
  
  useEffect(() => {
      setProducts([]);
  }, []);

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
