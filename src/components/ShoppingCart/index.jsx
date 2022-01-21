import { CartContainer, NumberCart, CartIcon } from './styles';

export const ShoppingCart = () => {
  return (
    <>
      <CartContainer>
        <CartIcon className='material-icons'>&#xe8cc;</CartIcon>
        <NumberCart>3</NumberCart>
      </CartContainer>
    </>
  );
};
