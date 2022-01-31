import { CategoryOptions } from '../CategoryOption';
import { ContainerOptions, Container, Close } from './styles';
import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

// FIXME: This componentes has some errors. Fuck!!!!

export const CategorySelect = ({ WrapperInput, categories, onChange, value }) => {
  const [isOpen, setIsOpen] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current && isOpen) {
      elementRef.current.scrollIntoView();
    }
  }, [elementRef, isOpen]);

  const categoriesFiltered = categories.filter((category) => category.name.toLowerCase().includes(value.toLowerCase()));

  return (
    <Container>
      <WrapperInput
        type='text'
        placeholder='Selecciona una categoría'
        onFocus={() => setIsOpen(true)}
        value={value}
        onChange={onChange}
        name='category'
        autoComplete='off'
        onBlur={() => setIsOpen(false)}
      />

      {isOpen && (
        <>
          <Close className='material-icons' onClick={() => setIsOpen(false)}>
            close
          </Close>

          <ContainerOptions ref={elementRef}>
            {categoriesFiltered.map((elemento) => {
              const { id, name } = elemento;
              return <CategoryOptions key={id} category={name} />;
            })}
            {!categoriesFiltered.length && <CategoryOptions category='No hay resultados' />}
          </ContainerOptions>
        </>
      )}
    </Container>
  );
};

CategorySelect.propTypes = {
  WrapperInput: PropTypes.elementType.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};
