import { Helmet } from 'react-helmet';
import { ItemsView } from '../../containers/ItemsView';
import { connect } from 'react-redux';

const Items = ({ categoriesReducer }) => {
  const { categories } = categoriesReducer;

  return (
    <>
      <Helmet>
        <title>Items</title>
      </Helmet>
      <ItemsView categories={categories} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    categoriesReducer: state.categoriesReducer,
  };
};

export default connect(mapStateToProps, null)(Items);
