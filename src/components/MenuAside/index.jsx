import { MenuContainer, DivItems, MenuItem, HoverMenuItem } from './styles';
import { LogoComponent } from '../Logo';
import { ShoppingCart } from '../ShoppingCart';
import { useHoverShow } from '../../hooks/useHoverShow';

export const MenuAside = () => {
  const {
    show: [isShowOne, handleShowOne],
  } = useHoverShow();
  const {
    show: [isShowTwo, handleShowTwo],
  } = useHoverShow();
  const {
    show: [isShowThree, handleShowThree],
  } = useHoverShow();

  return (
    <MenuContainer>
      <LogoComponent />
      <DivItems>
        <MenuItem className='material-icons' top={40.34} onMouseEnter={handleShowOne} onMouseLeave={handleShowOne}>
          &#xe896;
        </MenuItem>

        <HoverMenuItem top={40.34} isShow={isShowOne}>
          Items
        </HoverMenuItem>

        <MenuItem className='material-icons' top={49.59} onMouseEnter={handleShowTwo} onMouseLeave={handleShowTwo}>
          &#xe042;
        </MenuItem>

        <HoverMenuItem top={49.59} isShow={isShowTwo}>
          Refresh
        </HoverMenuItem>

        <MenuItem className='material-icons' top={60.16} onMouseEnter={handleShowThree} onMouseLeave={handleShowThree}>
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
