import { CategoryOptions } from '../CategoryOption';
import { ContainerOptions, Container, Close } from './styles';
import PropTypes from 'prop-types';
import { useNearScreen } from '../../hooks/useNearScreen';
import { useState } from 'react';

export const CategorySelect = ({ WrapperInput, categories, isOpen, setIsOpen, onChange, value }) => {
  const elementRef = useNearScreen(isOpen);
  const [disabled, setDisabled] = useState(false);

  const categoriesFiltered = categories.filter((category) =>
    category.name.toLowerCase().includes(value.toLowerCase().trim())
  );

  const handleClick = (category) => {
    console.log(category);
    setDisabled(true);
    setIsOpen(false);
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
        onClick={() => setIsOpen(true)}
        disabled={disabled}
      />

      {value && (
        <Close className='material-icons' onClick={() => setDisabled(false)}>
          close
        </Close>
      )}

      {isOpen && (
        <ContainerOptions ref={elementRef}>
          {categoriesFiltered.map((elemento) => {
            const { id, name } = elemento;
            return <CategoryOptions key={id} category={name} onClick={() => handleClick(name)} />;
          })}

          {!categoriesFiltered.length && (
            <CategoryOptions category={`+ Añadir ${value}`} onClick={() => handleClick(value)} />
          )}
        </ContainerOptions>
      )}
    </Container>
  );
};

CategorySelect.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};
