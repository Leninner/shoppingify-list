import { Helmet } from 'react-helmet';
import { HistoryView } from '../../containers/HistoryView';

export const History = () => {
  return (
    <>
      <Helmet>
        <title>History</title>
      </Helmet>
      <HistoryView />
    </>
  );
};
