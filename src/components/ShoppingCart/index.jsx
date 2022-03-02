import { CartContainer, NumberCart, CartIcon } from './styles';
import { useDispatch } from 'react-redux';

export const ShoppingCart = ({ shoppingCart }) => {
  const dispatch = useDispatch();
  const cantidad = shoppingCart.reduce((acc, curr) => acc + curr.items.length, 0);

  const handleOpenCart = () => {
    dispatch({ type: 'SHOW_RESPONSIVE_INTERACTIVE_ASIDE', payload: true });
  };

  return (
    <>
      <CartContainer onClick={handleOpenCart}>
        <CartIcon className='material-icons'>&#xe8cc;</CartIcon>
        <NumberCart>{cantidad}</NumberCart>
      </CartContainer>
    </>
  );
};
