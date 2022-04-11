import { Plus as PlusIcon } from "@styled-icons/boxicons-regular/Plus";
import { Subtract as SubtractIcon } from "@styled-icons/remix-fill/Subtract";
import { Wrapper, IconWrapper, Quantity } from "./styles";

type IncrementorProps = {
  id: number;
  quantity: number;
  handleIncrement: (id: number, quantity: number) => void;
  handleDecrement: (id: number, quantity: number) => void;
};

const Incrementor = ({ id, quantity, handleIncrement, handleDecrement }: IncrementorProps) => {
  
  return (
    <Wrapper>
      <IconWrapper>
        <SubtractIcon onClick={() => handleDecrement(id, quantity)} aria-label="Subtract item" />
      </IconWrapper>

      <Quantity>{quantity}</Quantity>

      <IconWrapper>
        <PlusIcon onClick={() => handleIncrement(id, quantity)} aria-label="Add item" />
      </IconWrapper>
    </Wrapper>
  );
}
export default Incrementor;
