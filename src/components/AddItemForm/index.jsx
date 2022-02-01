import { StyledAddItemForm, Campo, Entrada, EntradaNote, Section, Error } from './styles';
import { CategorySelect } from '../CategorySelect';
import { useState } from 'react';
import { useFormikHook } from '../../hooks/useFormikHook';

export const AddItemForm = ({ categories, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { formik, selected, setSelected } = useFormikHook();

  return (
    <StyledAddItemForm onSubmit={formik.handleSubmit}>
      <h3>Add a new item</h3>
      <Section>
        <Campo htmlFor='itemName'>
          <span>Name *</span>
          <Entrada
            type='text'
            name='itemName'
            placeholder='Enter a name'
            onChange={formik.handleChange}
            value={formik.values.itemName}
            onBlur={formik.handleBlur}
          />
          {formik.errors.itemName && <Error>{formik.errors.itemName}</Error>}
        </Campo>
        <Campo>
          <span>Note (optional)</span>
          <EntradaNote
            name='note'
            placeholder='Enter a note'
            onChange={formik.handleChange}
            value={formik.values.note}
          />
        </Campo>
        <Campo>
          <span>Image (optional)</span>
          <Entrada
            type='url'
            name='url'
            placeholder='Enter a url'
            onChange={formik.handleChange}
            value={formik.values.image}
          />
        </Campo>
        <Campo>
          <span>Category *</span>
          <CategorySelect
            categories={categories}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            onChange={formik.handleChange}
            value={formik.values.category}
            WrapperInput={Entrada}
            selected={selected}
            setSelected={setSelected}
          />
        </Campo>

        {children}
      </Section>
    </StyledAddItemForm>
  );
};
