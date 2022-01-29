import { CategoryOptions } from '../CategoryOption';
import { ContainerOptions, Container, Close } from './styles';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const CategorySelect = ({ WrapperInput, shoppingCart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFocus = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <Container>
      <WrapperInput type='text' placeholder='Ingresa una categoría' onFocus={handleFocus} onBlur={handleFocus} />

      {isOpen && (
        <>
          <Close className='material-icons' onClick={handleFocus}>
            close
          </Close>
          <ContainerOptions>
            {shoppingCart.map((elemento) => {
              const { id, name } = elemento;
              return <CategoryOptions key={id} category={name} />;
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
