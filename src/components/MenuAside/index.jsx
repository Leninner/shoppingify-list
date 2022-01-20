import { MenuContainer, DivItems, MenuItem } from './styles';
import { LogoComponent } from '../Logo';
import { ShoppingCart } from '../ShoppingCart';

export const MenuAside = () => {
  return (
    <MenuContainer>
      <LogoComponent />
      <DivItems>
        <MenuItem className='material-icons' top={40.34}>
          &#xe896;
        </MenuItem>
        <MenuItem className='material-icons' top={49.59}>
          &#xe042;
        </MenuItem>
        <MenuItem className='material-icons' top={60.16}>
          &#xe85c;
        </MenuItem>
      </DivItems>
      <ShoppingCart WrapperComponent={MenuItem} />
    </MenuContainer>
  );
};
