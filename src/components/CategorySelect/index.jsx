import { CategoryOptions } from '../CategoryOption';
import { ContainerOptions, Container, Close } from './styles';
import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

// FIXME: This componentes has some errors. Fuck!!!!

const useNearScreen = (isOpen) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current && isOpen) {
      elementRef.current.scrollIntoView();
    }
  }, [elementRef, isOpen]);

  return elementRef;
};

export const CategorySelect = ({ WrapperInput, categories, isOpen, setIsOpen, onClick, onChange, value }) => {
  const elementRef = useNearScreen(isOpen);

  const categoriesFiltered = categories.filter((category) =>
    category.name.toLowerCase().includes(value.toLowerCase().trim())
  );

  const handleClick = (category) => {
    console.log(category);
  };

  return (
    <Container>
      <WrapperInput
        type='text'
        placeholder='Select a category or create a new one'
        name='category'
        autoComplete='off'
        value={value}
        onChange={onChange}
        onClick={onClick}
      />

      {value && <Close className='material-icons'>close</Close>}

      {isOpen && (
        <>
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
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};
