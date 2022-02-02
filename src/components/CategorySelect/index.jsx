import { CategoryOptions } from '../CategoryOption';
import { ContainerOptions, Container, Close } from './styles';
import PropTypes from 'prop-types';
import { useNearScreen } from '../../hooks/useNearScreen';

export const CategorySelect = ({
  WrapperInput,
  categories,
  isOpen,
  setIsOpen,
  selected,
  setSelected,
  disabled,
  setDisabled,
}) => {
  const elementRef = useNearScreen(isOpen);

  const categoriesFiltered = categories.filter((category) =>
    category.name.toLowerCase().includes(selected.toLowerCase().trim())
  );

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  const handleClick = (category) => {
    setSelected(category);
    setDisabled(true);
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
    setDisabled(false);
    setSelected('');
  };

  return (
    <Container>
      <WrapperInput
        type='text'
        placeholder='Select a category or create a new one'
        name='category'
        autoComplete='off'
        value={selected}
        onChange={handleChange}
        onClick={() => setIsOpen(true)}
        disabled={disabled}
      />

      {selected && (
        <Close className='material-icons' onClick={handleCancel}>
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
            <CategoryOptions category={`+ Añadir ${selected}`} onClick={() => handleClick(selected)} />
          )}
        </ContainerOptions>
      )}
    </Container>
  );
};

CategorySelect.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};
