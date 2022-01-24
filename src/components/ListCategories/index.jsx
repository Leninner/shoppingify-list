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
import { connect } from 'react-redux';

const ListCategories = ({ categories }) => {
  const [isEmpty, setIsEmpty] = useState(false);

  const handleEmpty = () => {
    setIsEmpty(true);
  };

  return (
    <StyledListItems>
      {isEmpty ? (
        <>
          <FeedBack>No items</FeedBack>
          <Img src={CartEmptyIcon} alt='' onClick={handleEmpty} />
        </>
      ) : (
        <ShoppingListContainer>
          <ShoppingListTittle>
            <h2>Shopping List</h2>
            <span className='material-icons'>edit</span>
          </ShoppingListTittle>

          <CategoriesContainer>
            {categories.map((item) => (
              <Category key={item.id} {...item} />
            ))}
          </CategoriesContainer>
        </ShoppingListContainer>
      )}
    </StyledListItems>
  );
};

const mapStateToProps = (state) => () => {
  return {
    categories: state.categories,
  };
};

export default connect(mapStateToProps, null)(ListCategories);
