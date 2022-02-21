import GlobalStyles from '../styles/GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Items from '../pages/Items';
import { Home } from '../pages/Home';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/items' element={<Items />} />
          <Route path='/history' element={<Home />} />
          <Route path='/inventary' element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
