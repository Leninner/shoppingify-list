import { MenuContainer, DivItems, MenuItem, HoverMenuItem } from './styles';
import { LogoComponent } from '../Logo';
import { ShoppingCart } from '../ShoppingCart';
import { useHoverShow } from '../../hooks/useHoverShow';

export const MenuAside = () => {
  const [isShowOne, handleShowOne] = useHoverShow();
  const [isShowTwo, handleShowTwo] = useHoverShow();
  const [isShowThree, handleShowThree] = useHoverShow();

  return (
    <MenuContainer>
      <LogoComponent />
      <DivItems>
        <MenuItem
          className='material-icons'
          top={40.34}
          onMouseEnter={handleShowOne}
          onMouseLeave={handleShowOne}
          to='/items'>
          &#xe896;
        </MenuItem>

        <HoverMenuItem top={40.34} isShow={isShowOne}>
          Items
        </HoverMenuItem>

        <MenuItem
          className='material-icons'
          top={49.59}
          onMouseEnter={handleShowTwo}
          onMouseLeave={handleShowTwo}
          to='/refresh'>
          &#xe042;
        </MenuItem>

        <HoverMenuItem top={49.59} isShow={isShowTwo}>
          Refresh
        </HoverMenuItem>

        <MenuItem
          className='material-icons'
          top={60.16}
          onMouseEnter={handleShowThree}
          onMouseLeave={handleShowThree}
          to='/inventary'>
          &#xe85c;
        </MenuItem>

        <HoverMenuItem top={60.16} isShow={isShowThree}>
          Inventary
        </HoverMenuItem>
      </DivItems>
      <ShoppingCart WrapperComponent={MenuItem} />
    </MenuContainer>
  );
};
