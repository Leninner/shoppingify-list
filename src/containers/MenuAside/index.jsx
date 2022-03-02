import { MenuContainer, DivItems, MenuItem, HoverMenuItem } from './styles';
import { LogoComponent } from '../../components/Logo';
import { ShoppingCart } from '../../components/ShoppingCart';
import { useHoverShow } from '../../hooks/useHoverShow';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export const MenuAside = () => {
  const [isShowOne, handleShowOne] = useHoverShow();
  const [isShowTwo, handleShowTwo] = useHoverShow();
  const [isShowThree, handleShowThree] = useHoverShow();
  const { shoppingCart } = useSelector((state) => state.shoppingCartReducer);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: 'SHOW_RESPONSIVE_INTERACTIVE_ASIDE', payload: false });
  };

  return (
    <MenuContainer>
      <Link to='/'>
        <LogoComponent />
      </Link>

      <DivItems>
        <MenuItem
          className='material-icons'
          top={40.34}
          onMouseEnter={handleShowOne}
          onMouseLeave={handleShowOne}
          onClick={handleClick}
          to='/'>
          &#xe896;
          <HoverMenuItem top={40.34} isShow={isShowOne}>
            Items
          </HoverMenuItem>
        </MenuItem>

        <MenuItem
          className='material-icons'
          top={49.59}
          onMouseEnter={handleShowTwo}
          onMouseLeave={handleShowTwo}
          onClick={handleClick}
          to='/history'>
          &#xe042;
          <HoverMenuItem top={49.59} isShow={isShowTwo}>
            History
          </HoverMenuItem>
        </MenuItem>

        <MenuItem
          className='material-icons'
          top={60.16}
          onMouseEnter={handleShowThree}
          onMouseLeave={handleShowThree}
          onClick={handleClick}
          to='/stadistics'>
          &#xe85c;
          <HoverMenuItem top={60.16} isShow={isShowThree}>
            Stadistics
          </HoverMenuItem>
        </MenuItem>
      </DivItems>
      <ShoppingCart shoppingCart={shoppingCart} />
    </MenuContainer>
  );
};
