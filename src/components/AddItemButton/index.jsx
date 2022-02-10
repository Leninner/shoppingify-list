import { StyledAddItemContainer, BoxInput, Form, ButtonAddItem, ButtonConfirm, Div } from './styles';

export const AddItemButton = ({
  isAdding,
  handleAddItem,
  shoppingCart,
  isItemInfo,
  idItem,
  DeleteItemFromCategories,
  categoryName,
  idCategory,
  AddToCurrentList,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleAddItem();
  };

  const handleDeleteItemFromCategories = () => {
    DeleteItemFromCategories({ idItem, categoryName, idCategory });
  };

  const handleAddToCurrentList = () => {
    AddToCurrentList({ idItem, categoryName, idCategory });
  };

  const isEmpty = shoppingCart.every((category) => category.items.length === 0);

  return (
    <StyledAddItemContainer>
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
              <BoxInput type='text' name='item' placeholder='Enter a name' disabled={isEmpty} />
              <ButtonAddItem disabled={isEmpty}>Save</ButtonAddItem>
            </Form>
          )}
        </>
      ) : (
        <Div>
          <ButtonConfirm isCancel onClick={handleDeleteItemFromCategories}>
            Delete
          </ButtonConfirm>
          <ButtonConfirm onClick={handleAddToCurrentList}>Add to list</ButtonConfirm>
        </Div>
      )}
    </StyledAddItemContainer>
  );
};
