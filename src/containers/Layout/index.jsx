import { MenuAside } from '../MenuAside';
import InteractiveAside from '../InteractiveAside';
import { connect } from 'react-redux';
import { StyledLayout } from './styles';
import {
  HandleAddItem,
  BackToShoppingList,
  DeleteItemFromCategories,
  AddToCurrentList,
  AddToHistory,
} from '../../actions';

const Layout = ({
  children,
  shoppingCartReducer,
  categoriesReducer,
  HandleAddItem,
  BackToShoppingList,
  DeleteItemFromCategories,
  AddToCurrentList,
  AddToHistory,
}) => {
  const { isAdding, categories } = categoriesReducer;
  const { shoppingCart } = shoppingCartReducer;

  return (
    <StyledLayout>
      <MenuAside />
      {children}
      <InteractiveAside
        isAdding={isAdding}
        shoppingCart={shoppingCart}
        HandleAddItem={HandleAddItem}
        categories={categories}
        BackToShoppingList={BackToShoppingList}
        DeleteItemFromCategories={DeleteItemFromCategories}
        AddToCurrentList={AddToCurrentList}
        AddToHistory={AddToHistory}
      />
    </StyledLayout>
  );
};

const mapStateToProps = (state) => {
  return {
    categoriesReducer: state.categoriesReducer,
    shoppingCartReducer: state.shoppingCartReducer,
  };
};

const mapDispatchToProps = {
  HandleAddItem,
  BackToShoppingList,
  DeleteItemFromCategories,
  AddToCurrentList,
  AddToHistory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
