import { MenuAside } from '../MenuAside';
import InteractiveAside from '../InteractiveAside';
import { connect } from 'react-redux';
import { StyledLayout } from './styles';
import { HandleAddItem } from '../../actions';

const Layout = ({ children, shoppingCartReducer, categoriesReducer, HandleAddItem }) => {
  const { isAdding } = categoriesReducer;
  const { shoppingCart } = shoppingCartReducer;

  return (
    <StyledLayout>
      <MenuAside />
      {children}
      <InteractiveAside isAdding={isAdding} shoppingCart={shoppingCart} HandleAddItem={HandleAddItem} />
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
