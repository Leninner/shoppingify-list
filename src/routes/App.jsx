import GlobalStyles from '../styles/GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Items from '../pages/Items';
import { History } from '../pages/History';
import { HistoryListInfoView } from '../containers/HistoryListInfoView';
import { Stadistics } from '../pages/Stadistics';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path='/' element={<Items />} />
          <Route path='/history' element={<History />} />
          <Route path='/history/:month/info-list/:idList/:listName' element={<HistoryListInfoView />} />
          <Route path='/stadistics' element={<Stadistics />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
