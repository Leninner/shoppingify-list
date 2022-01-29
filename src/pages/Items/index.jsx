import { Helmet } from 'react-helmet';
import { ItemsView } from '../../containers/ItemsView';
import { connect } from 'react-redux';

const Items = ({ categories }) => {
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
    categories: state.categories,
  };
};

export default connect(mapStateToProps, null)(Items);
