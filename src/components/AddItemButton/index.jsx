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
  categories,
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

  const isCurrentListEmpty = shoppingCart.every((category) => category.items.length === 0);

  const isAddedToCurrentList = shoppingCart.some((category) => category.items.some((item) => item.id === idItem));

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
          {isAddedToCurrentList ? null : <ButtonConfirm onClick={handleAddToCurrentList}>Add to list</ButtonConfirm>}
        </Div>
      )}
    </StyledAddItemContainer>
  );
};
