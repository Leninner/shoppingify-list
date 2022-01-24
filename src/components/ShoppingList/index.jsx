import CartEmptyIcon from '../../assets/cartEmpty.svg';
import {
  StyledListItems,
  Img,
  FeedBack,
  ShoppingListTittle,
  ShoppingListContainer,
  CategoriesContainer,
} from './styles';
import { Category } from '../Category';

export const ShoppingList = ({ categories }) => {
  const categoriesFiltered = categories.filter((value) => value.items.length > 0);
  const isEmpty = categoriesFiltered.length === 0;

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
            {categoriesFiltered.map((item) => (
              <Category key={item.id} {...item} />
            ))}
          </CategoriesContainer>
        </ShoppingListContainer>
      )}
    </StyledListItems>
  );
};
