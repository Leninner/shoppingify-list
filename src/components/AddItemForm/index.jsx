import { StyledAddItemForm, Campo, Entrada, EntradaNote, Section } from './styles';
import { CategorySelect } from '../CategorySelect';

export const AddItemForm = () => {
  return (
    <StyledAddItemForm>
      <h3>Add a new item</h3>
      <Section>
        <Campo>
          <span>Name</span>
          <Entrada type='text' name='item' placeholder='Enter a name' />
        </Campo>
        <Campo>
          <span>Note (optional)</span>
          <EntradaNote name='description' placeholder='Enter a note' />
        </Campo>
        <Campo>
          <span>Image (optional)</span>
          <Entrada type='url' name='url' placeholder='Enter a url' />
        </Campo>
        <Campo>
          <span>Category</span>
          <CategorySelect WrapperInput={Entrada} />
        </Campo>
      </Section>
    </StyledAddItemForm>
  );
};
