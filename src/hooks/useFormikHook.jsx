import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { HandleAddItemToCategories } from '../actions';

export const useFormikHook = () => {
  const [selected, setSelected] = useState('');
  const [disabled, setDisabled] = useState(false);

  const dispatch = useDispatch();

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
      dispatch(HandleAddItemToCategories(values));

      dispatch({ type: 'SHOW_RESPONSIVE_INTERACTIVE_ASIDE', payload: false });

      dispatch({
        type: 'TOGGLE_ADD_ITEM',
        payload: false,
      });

      formik.resetForm();
      setSelected('');
      setDisabled(false);
    },

    validate,
  });

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      if (selected) {
        formik.setFieldValue('category', selected);
      }
    }

    return () => {
      isMounted = false;
    };
  }, [selected]); //eslint-disable-line

  return { formik, selected, setSelected, disabled, setDisabled };
};
