import { StyledInteractiveAside } from './styles';
import { BoxFeedback } from '../../components/BoxFeedback';
import { AddItemButton } from '../../components/AddItemButton';
import { ShoppingList } from '../../components/ShoppingList';
import { AddItemForm } from '../../components/AddItemForm';
import PropTypes from 'prop-types';

const InteractiveAside = ({ isAdding, HandleAddItem, shoppingCart }) => {
  return (
    <StyledInteractiveAside>
      {isAdding ? (
        <AddItemForm shoppingCart={shoppingCart}>
          <AddItemButton isAdding={isAdding} handleAddItem={HandleAddItem} shoppingCart={shoppingCart} />
        </AddItemForm>
      ) : (
        <>
          <BoxFeedback handleAddItem={HandleAddItem} />
          <ShoppingList shoppingCart={shoppingCart} />
          <AddItemButton isAdding={isAdding} handleAddItem={HandleAddItem} shoppingCart={shoppingCart} />
        </>
      )}
    </StyledInteractiveAside>
  );
};

export default InteractiveAside;

InteractiveAside.propTypes = {
  isAdding: PropTypes.bool,
  HandleAddItem: PropTypes.func.isRequired,
  shoppingCart: PropTypes.arrayOf(PropTypes.object).isRequired,
};
