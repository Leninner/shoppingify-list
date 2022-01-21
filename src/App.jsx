import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './containers/Layout';
import { Items } from './pages/Items';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path='/' element={<Items />} />
          <Route path='/items' element={<Items />} />
          <Route path='/inventary' element={<Items />} />
          <Route path='/refresh' element={<Items />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
