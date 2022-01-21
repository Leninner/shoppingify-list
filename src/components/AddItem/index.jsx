import { StyledAddItemContainer, BoxInput, Form, ButtonAddItem } from './styles';

export const AddItem = () => {
  return (
    <StyledAddItemContainer>
      <Form>
        <BoxInput type='text' name='item' placeholder='Enter a name' disabled />
        <ButtonAddItem disabled>Save</ButtonAddItem>
      </Form>
    </StyledAddItemContainer>
  );
};
