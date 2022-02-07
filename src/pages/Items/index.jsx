import { Helmet } from 'react-helmet';
import { ItemsView } from '../../containers/ItemsView';
import { connect } from 'react-redux';
import { SeeInfo } from '../../actions';

const Items = ({ categoriesReducer, SeeInfo }) => {
  const { categories } = categoriesReducer;

  return (
    <>
      <Helmet>
        <title>Items</title>
      </Helmet>
      <ItemsView categories={categories} SeeInfo={SeeInfo} />
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
