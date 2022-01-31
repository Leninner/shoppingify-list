import { StyledAddItemForm, Campo, Entrada, EntradaNote, Section, Error } from './styles';
import { CategorySelect } from '../CategorySelect';
import { useFormik } from 'formik';
import { useState } from 'react';

export const AddItemForm = ({ categories, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const validate = (values) => {
    const errors = {};

    if (!values.itemName || !values.itemName.trim()) {
      errors.itemName = 'Required';
    } else if (values.itemName.length > 30 || values.itemName.length < 3) {
      errors.itemName = 'Must be between 3 and 30 characters';
    }

    if (values.itemName.match(/\d/g)) {
      errors.itemName = 'No numbers allowed';
    }

    if (!values.category) {
      errors.category = 'Required';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      itemName: '',
      note: '',
      image: '',
      category: '',
    },

    onSubmit: (values) => {
      console.log(values);
      setTimeout(() => {
        formik.resetForm();
      }, 1000);
    },

    validate,
  });

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
            onClick={() => setIsOpen(!isOpen)}
            onChange={formik.handleChange}
            value={formik.values.category}
            WrapperInput={Entrada}
            setIsOpen={setIsOpen}
          />
        </Campo>

        {children}
      </Section>
    </StyledAddItemForm>
  );
};
