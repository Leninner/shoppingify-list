import { Helmet } from 'react-helmet';
import { StadisticsView } from '../../containers/StadisticsView';

export const Stadistics = () => {
  return (
    <>
      <Helmet>
        <title>Stadistics</title>
      </Helmet>
      <StadisticsView />
    </>
  );
};
