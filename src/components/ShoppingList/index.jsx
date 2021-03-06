import CartEmptyIcon from '../../assets/cartEmpty.svg';
import {
  StyledListItems,
  Img,
  FeedBack,
  ShoppingListTittle,
  ShoppingListContainer,
  CategoriesContainer,
  ToggleEditOrComplete,
} from './styles';
import { ShoppingListCategory } from '../ShoppingListCategory';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

export const ShoppingList = ({ shoppingCart }) => {
  const shoppingCartFiltered = shoppingCart.filter((value) => value.items.length > 0);
  const isEmpty = shoppingCartFiltered.length === 0;

  const { shoppingListName, isCompleting } = useSelector((state) => state.shoppingCartReducer);
  const [edit, setEdit] = useState(false);
  const [listName = 'ListName', setListName] = useState(shoppingListName);
  const dispatch = useDispatch();

  const handleToggleEdit = () => {
    dispatch({
      type: 'TOGGLE_EDIT',
    });
  };

  const handleUpdateName = (e) => {
    setListName(e.target.value);
  };

  const handleSaveName = (e) => {
    e.preventDefault();
    dispatch({
      type: 'UPDATE_SHOPPING_LIST_NAME',
      payload: listName,
    });

    setEdit(false);
  };

  return (
    <StyledListItems>
      {isEmpty ? (
        <>
          <FeedBack>No items</FeedBack>
          <Img src={CartEmptyIcon} alt='' />
        </>
      ) : (
        <ShoppingListContainer>
          <ToggleEditOrComplete>
            <ShoppingListTittle onClick={handleToggleEdit}>
              {edit ? (
                <input type='text' value={listName} onChange={handleUpdateName} />
              ) : (
                <input type='text' value={shoppingListName} disabled />
              )}
            </ShoppingListTittle>
            {!edit ? (
              <span className='material-icons' onClick={() => setEdit(true)}>
                edit
              </span>
            ) : (
              <button className='material-icons-outlined' onClick={handleSaveName}>
                done
              </button>
            )}
          </ToggleEditOrComplete>

          <CategoriesContainer>
            {shoppingCartFiltered.map((item) => (
              <ShoppingListCategory key={item.id} {...item} isCompleting={isCompleting} />
            ))}
          </CategoriesContainer>
        </ShoppingListContainer>
      )}
    </StyledListItems>
  );
};
