import { CategoryOptions } from '../CategoryOption';
import { ContainerOptions, Container, Close } from './styles';
import { useState } from 'react';
import PropTypes from 'prop-types';

// FIXME: This componentes has some errors. Fuck!!!!

export const CategorySelect = ({ WrapperInput, categories }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleFocus = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  console.log(selectedCategory);

  return (
    <Container>
      <WrapperInput
        type='text'
        placeholder='Selecciona una categoría'
        onFocus={handleFocus}
        value={selectedCategory}
        onChange={() => {}}
      />

      {isOpen && (
        <>
          <Close className='material-icons' onClick={handleFocus}>
            close
          </Close>
          <ContainerOptions>
            {categories.map((elemento) => {
              const { id, name } = elemento;
              console.log(name);
              return <CategoryOptions key={id} category={name} onClick={() => handleClick(name)} />;
            })}
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
