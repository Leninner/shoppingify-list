import { MenuAside } from '../../components/MenuAside';

export const Layout = ({ children }) => {
  return (
    <>
      <MenuAside />
      {children}
    </>
  );
};
