import { StyledInteractiveAside } from './styles';
import { BoxFeedback } from '../../components/BoxFeedback';
import { AddItemButton } from '../../components/AddItemButton';
import { ShoppingList } from '../../components/ShoppingList';
import { connect } from 'react-redux';
import { HandleAddItem } from '../../actions';
import { AddItemForm } from '../../components/AddItemForm';

const InteractiveAside = ({ isAdding, HandleAddItem, categories }) => {
  return (
    <StyledInteractiveAside>
      {isAdding ? (
        <AddItemForm />
      ) : (
        <>
          <BoxFeedback handleAddItem={HandleAddItem} />
          <ShoppingList categories={categories} />
        </>
      )}

      <AddItemButton isAdding={isAdding} handleAddItem={HandleAddItem} categories={categories} />
    </StyledInteractiveAside>
  );
};

const mapStateToProps = (state) => {
  return {
    isAdding: state.isAdding,
    categories: state.categories,
  };
};

const mapDispatchToProps = {
  HandleAddItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(InteractiveAside);
