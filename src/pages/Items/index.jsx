import { Helmet } from 'react-helmet';
import { ItemsView } from '../../containers/ItemsView';
import { connect } from 'react-redux';
import { SeeInfo } from '../../actions';
import { Modal } from '../../containers/Modal';
import { useSelector } from 'react-redux';

const Items = ({ categoriesReducer, SeeInfo }) => {
  const { categories } = categoriesReducer;
  const { isToCancel } = useSelector((state) => state.shoppingCartReducer);

  console.log(isToCancel);

  return (
    <>
      <Helmet>
        <title>Items</title>
      </Helmet>
      <ItemsView categories={categories} SeeInfo={SeeInfo} />
      {isToCancel && <Modal />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    categoriesReducer: state.categoriesReducer,
  };
};

const mapDispatchToProps = {
  SeeInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
