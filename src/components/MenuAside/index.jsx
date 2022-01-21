import { MenuContainer, DivItems, MenuItem } from './styles';
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
        <MenuItem className='material-icons' top={40.34} onMouseEnter={handleShowOne} onMouseLeave={handleShowOne}>
          &#xe896;
        </MenuItem>
        <MenuItem className='material-icons' top={49.59} onMouseEnter={handleShowTwo} onMouseLeave={handleShowTwo}>
          &#xe042;
        </MenuItem>
        <MenuItem className='material-icons' top={60.16} onMouseEnter={handleShowThree} onMouseLeave={handleShowThree}>
          &#xe85c;
        </MenuItem>
      </DivItems>
      <ShoppingCart WrapperComponent={MenuItem} />
    </MenuContainer>
  );
};
