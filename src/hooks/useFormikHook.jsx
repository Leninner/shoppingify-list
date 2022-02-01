import { useFormik } from 'formik';

export const useFormikHook = () => {
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

  return formik;
};
