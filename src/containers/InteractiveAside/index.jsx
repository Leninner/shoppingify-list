import { StyledInteractiveAside } from './styles';
import { BoxFeedback } from '../../components/BoxFeedback';
import { AddItemButton } from '../../components/AddItemButton';
import ListCategories from '../../components/ListCategories';
import { connect } from 'react-redux';
import { HandleAddItem } from '../../actions';
import { AddItemForm } from '../../components/AddItemForm';

const InteractiveAside = ({ isAdding, HandleAddItem }) => {
  console.log(HandleAddItem);

  return (
    <StyledInteractiveAside>
      {isAdding ? (
        <AddItemForm />
      ) : (
        <>
          <BoxFeedback handleAddItem={HandleAddItem} />
          <ListCategories />
        </>
      )}

      <AddItemButton isAdding={isAdding} handleAddItem={HandleAddItem} />
    </StyledInteractiveAside>
  );
};

const mapStateToProps = (state) => {
  return {
    isAdding: state.isAdding,
  };
};

const mapDispatchToProps = {
  HandleAddItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(InteractiveAside);
