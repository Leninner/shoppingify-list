import CartEmptyIcon from '../../assets/cartEmpty.svg';
import {
  StyledListItems,
  Img,
  FeedBack,
  ShoppingListTittle,
  ShoppingListContainer,
  CategoriesContainer,
} from './styles';
import { ShoppingListCategory } from '../ShoppingListCategory';

export const ShoppingList = ({ shoppingCart }) => {
  const shoppingCartFiltered = shoppingCart.filter((value) => value.items.length > 0);
  const isEmpty = shoppingCartFiltered.length === 0;

  return (
    <StyledListItems>
      {isEmpty ? (
        <>
          <FeedBack>No items</FeedBack>
          <Img src={CartEmptyIcon} alt='' />
        </>
      ) : (
        <ShoppingListContainer>
          <ShoppingListTittle>
            <h2>Shopping List</h2>
            <span className='material-icons'>edit</span>
          </ShoppingListTittle>

          <CategoriesContainer>
            {shoppingCartFiltered.map((item) => (
              <ShoppingListCategory key={item.id} {...item} />
            ))}
          </CategoriesContainer>
        </ShoppingListContainer>
      )}
    </StyledListItems>
  );
};
