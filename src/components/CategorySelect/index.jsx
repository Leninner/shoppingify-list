import { CategoryOptions } from '../CategoryOption';
import { ContainerOptions, Container, Close } from './styles';
import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

// FIXME: This componentes has some errors. Fuck!!!!

export const CategorySelect = ({ WrapperInput, categories, onChange, value }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected = value, setSelected] = useState(value);

  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current && isOpen) {
      elementRef.current.scrollIntoView();
    }
  }, [elementRef, isOpen]);

  const categoriesFiltered = categories.filter((category) =>
    category.name.toLowerCase().includes(value.toLowerCase().trim())
  );

  const handleClick = (category) => {
    setSelected(category);
  };

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <Container>
      <WrapperInput
        type='text'
        placeholder='Select a category or create a new one'
        value={selected}
        onClick={() => setIsOpen(!isOpen)}
        onChange={onChange ? onChange : handleChange}
        name='category'
        autoComplete='off'
      />

      {isOpen && (
        <>
          <Close className='material-icons'>close</Close>

          <ContainerOptions ref={elementRef}>
            {categoriesFiltered.map((elemento) => {
              const { id, name } = elemento;
              return <CategoryOptions key={id} category={name} onClick={() => handleClick(name)} />;
            })}
            {!categoriesFiltered.length && (
              <CategoryOptions category={`+ Añadir ${value}`} onClick={() => handleClick(value)} />
            )}
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
