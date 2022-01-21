import GlobalStyles from './styles/GlobalStyles';
import { MenuAside } from './components/MenuAside';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<MenuAside />} />
        <Route path='/items' element={<MenuAside />} />
        <Route path='/inventary' element={<MenuAside />} />
        <Route path='/refresh' element={<MenuAside />} />
      </Routes>
    </BrowserRouter>
  );
};
