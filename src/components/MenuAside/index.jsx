import { MenuContainer, DivItems, MenuItem, HoverMenuItem } from './styles';
import { LogoComponent } from '../Logo';
import { ShoppingCart } from '../ShoppingCart';
import { useHoverShow } from '../../hooks/useHoverShow';
import { Link } from 'react-router-dom';

export const MenuAside = () => {
  const [isShowOne, handleShowOne] = useHoverShow();
  const [isShowTwo, handleShowTwo] = useHoverShow();
  const [isShowThree, handleShowThree] = useHoverShow();

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
          to='/items'>
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
          to='/refresh'>
          &#xe042;
          <HoverMenuItem top={49.59} isShow={isShowTwo}>
            Refresh
          </HoverMenuItem>
        </MenuItem>

        <MenuItem
          className='material-icons'
          top={60.16}
          onMouseEnter={handleShowThree}
          onMouseLeave={handleShowThree}
          to='/inventary'>
          &#xe85c;
          <HoverMenuItem top={60.16} isShow={isShowThree}>
            Inventary
          </HoverMenuItem>
        </MenuItem>
      </DivItems>
      <ShoppingCart WrapperComponent={MenuItem} />
    </MenuContainer>
  );
};
