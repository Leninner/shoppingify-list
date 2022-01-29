import { MenuAside } from '../MenuAside';
import InteractiveAside from '../InteractiveAside';
import { connect } from 'react-redux';
import { HandleAddItem } from '../../actions';
import { StyledLayout } from './styles';

const Layout = ({ children, isAdding, HandleAddItem, shoppingCart }) => {
  return (
    <StyledLayout>
      <MenuAside />
      {children}
      <InteractiveAside HandleAddItem={HandleAddItem} isAdding={isAdding} shoppingCart={shoppingCart} />
    </StyledLayout>
  );
};

const mapStateToProps = (state) => {
  return {
    isAdding: state.isAdding,
    categories: state.categories,
    shoppingCart: state.shoppingCart,
  };
};

const mapDispatchToProps = {
  HandleAddItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
