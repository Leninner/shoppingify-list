import { StyledAddItemForm, Campo, Entrada, EntradaNote, Section } from './styles';
import { CategorySelect } from '../CategorySelect';

export const AddItemForm = ({ shoppingCart, children }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('enviado');
  };

  return (
    <StyledAddItemForm onSubmit={handleSubmit}>
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
          <CategorySelect WrapperInput={Entrada} shoppingCart={shoppingCart} />
        </Campo>
        {children}
      </Section>
    </StyledAddItemForm>
  );
};
