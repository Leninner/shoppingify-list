import {
  StyledAddItemContainer,
  BoxInput,
  Form,
  ButtonAddItem,
  ButtonConfirm,
  Div,
  ButtonCompletingList,
} from './styles';
import { useSelector } from 'react-redux';

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
}) => {
  const { shoppingCart, isCompleting } = useSelector((state) => state.shoppingCartReducer);

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

  console.log(shoppingCart, isCompleting);

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
          <ButtonCompletingList isCancelList>Cancel</ButtonCompletingList>
          <ButtonCompletingList>Complete</ButtonCompletingList>
        </Div>
      )}
    </StyledAddItemContainer>
  );
};
