import { StyledAddItemContainer, BoxInput, Form, ButtonAddItem, ButtonConfirm } from './styles';

export const AddItemButton = ({ isAdding, handleAddItem }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleAddItem();
  };

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
            <BoxInput type='text' name='item' placeholder='Enter a name' disabled />
            <ButtonAddItem disabled>Save</ButtonAddItem>
          </>
        )}
      </Form>
    </StyledAddItemContainer>
  );
};
