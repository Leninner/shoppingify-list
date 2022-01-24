import { StyledAddItemContainer, BoxInput, Form, ButtonAddItem, ButtonConfirm } from './styles';

export const AddItemButton = ({ isAdding, handleAddItem, categories }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleAddItem();
  };

  const isEmpty = categories.every((category) => category.items.length === 0);

  return (
    <StyledAddItemContainer>
      <Form>
        {isAdding ? (
          <>
            <ButtonConfirm isCancel onClick={handleClick}>
              Cancel
            </ButtonConfirm>
            <ButtonConfirm>Save</ButtonConfirm>
          </>
        ) : (
          <>
            <BoxInput type='text' name='item' placeholder='Enter a name' disabled={isEmpty} />
            <ButtonAddItem disabled={isEmpty}>Save</ButtonAddItem>
          </>
        )}
      </Form>
    </StyledAddItemContainer>
  );
};
