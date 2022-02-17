import { CartContainer, NumberCart, CartIcon } from './styles';

export const ShoppingCart = ({ shoppingCart }) => {
  const cantidad = shoppingCart.reduce((acc, curr) => acc + curr.items.length, 0);

  return (
    <>
      <CartContainer>
        <CartIcon className='material-icons'>&#xe8cc;</CartIcon>
        <NumberCart>{cantidad}</NumberCart>
      </CartContainer>
    </>
  );
};
