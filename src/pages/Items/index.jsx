import { Helmet } from 'react-helmet';
import { ItemsView } from '../../containers/ItemsView';

export const Items = () => {
  return (
    <>
      <Helmet>
        <title>Items</title>
      </Helmet>
      <ItemsView />
    </>
  );
};
