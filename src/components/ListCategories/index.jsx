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
import { useState } from 'react';

export const ListCategories = () => {
  const [isEmpty, setIsEmpty] = useState(false);

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
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <Category key={item} />
            ))}
          </CategoriesContainer>
        </ShoppingListContainer>
      )}
    </StyledListItems>
  );
};
