import { StyledAddItemForm, Campo, Entrada, EntradaNote, Section, Error } from './styles';
import { CategorySelect } from '../CategorySelect';
import { useFormik } from 'formik';

export const AddItemForm = ({ categories, children }) => {
  const validate = (values) => {
    const errors = {};

    if (!values.itemName || values.itemName.trim() === '') {
      errors.itemName = 'Reguired';
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
            onBlur={formik.handleBlur}
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
            onBlur={formik.handleBlur}
          />
        </Campo>
        <Campo>
          <span>Category *</span>
          <CategorySelect WrapperInput={Entrada} categories={categories} />
        </Campo>

        {children}
      </Section>
    </StyledAddItemForm>
  );
};
