import {
  StyledAddItemContainer,
  BoxInput,
  Form,
  ButtonAddItem,
  ButtonConfirm,
  Div,
  ButtonCompletingList,
} from './styles';
import { useSelector, useDispatch } from 'react-redux';

export const AddItemButton = ({
  isAdding,
  handleAddItem,
  isItemInfo,
  idItem,
  DeleteItemFromCategories,
  categoryName,
  idCategory,
  AddToCurrentList,
  itemName,
  AddToHistory,
}) => {
  const { shoppingCartReducer } = useSelector((state) => state);

  // console.log({
  //   shoppingCartReducer,
  //   historialReducer,
  //   categoriesReducer,
  // });

  const { shoppingCart, isCompleting } = shoppingCartReducer;

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    handleAddItem();
  };

  const handleDeleteItemFromCategories = () => {
    DeleteItemFromCategories({ idItem, categoryName, idCategory, itemName });
  };

  const handleAddToCurrentList = () => {
    AddToCurrentList({ idItem, categoryName, idCategory });
  };

  const isCurrentListEmpty = shoppingCart.every((category) => category.items.length === 0);

  const isAddedToCurrentList = shoppingCart.some((category) =>
    category.items.some((item) => {
      return item.id === idItem && item.itemName === itemName ? true : false;
    })
  );

  const handleCancelDeleteList = () => {
    dispatch({
      type: 'CANCEL_DELETE_LIST',
    });
  };

  const handleCompleteList = () => {
    console.log(AddToHistory);
    AddToHistory();
  };

  return (
    <StyledAddItemContainer>
      {!isCompleting ? (
        <>
          {!isItemInfo ? (
            <>
              {isAdding ? (
                <Div>
                  <ButtonConfirm isCancel onClick={handleClick} type='button'>
                    Cancel
                  </ButtonConfirm>
                  <ButtonConfirm type='submit'>Save</ButtonConfirm>
                </Div>
              ) : (
                <Form>
                  <BoxInput type='text' name='item' placeholder='Enter a name' disabled={isCurrentListEmpty} />
                  <ButtonAddItem disabled={isCurrentListEmpty}>Save</ButtonAddItem>
                </Form>
              )}
            </>
          ) : (
            <Div>
              <ButtonConfirm isCancel onClick={handleDeleteItemFromCategories}>
                Delete
              </ButtonConfirm>
              {isAddedToCurrentList ? null : (
                <ButtonConfirm onClick={handleAddToCurrentList}>Add to list</ButtonConfirm>
              )}
            </Div>
          )}
        </>
      ) : (
        <Div>
          <ButtonCompletingList isCancelList onClick={handleCancelDeleteList}>
            Cancel
          </ButtonCompletingList>
          <ButtonCompletingList onClick={handleCompleteList}>Complete</ButtonCompletingList>
        </Div>
      )}
    </StyledAddItemContainer>
  );
};
