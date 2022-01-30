import { StyledAddItemContainer, BoxInput, Form, ButtonAddItem, ButtonConfirm, Div } from './styles';

export const AddItemButton = ({ isAdding, handleAddItem, shoppingCart, isItemInfo }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleAddItem();
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
          <ButtonConfirm isCancel>Delete</ButtonConfirm>
          <ButtonConfirm>Add to list</ButtonConfirm>
        </Div>
      )}
    </StyledAddItemContainer>
  );
};
