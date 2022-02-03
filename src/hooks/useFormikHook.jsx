import { useFormik } from 'formik';
import { useEffect, useState } from 'react';

export const useFormikHook = () => {
  const [selected, setSelected] = useState('');
  const [disabled, setDisabled] = useState(false);

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
      imageURL: '',
      category: selected,
    },

    onSubmit: (values) => {
      console.log(values);
      setTimeout(() => {
        formik.resetForm();
        setSelected('');
        setDisabled(false);
      }, 1000);
    },
    validate,
  });

  useEffect(() => {
    if (selected) {
      formik.setFieldValue('category', selected);
    }
  }, [selected]); //eslint-disable-line

  return { formik, selected, setSelected, disabled, setDisabled };
};
