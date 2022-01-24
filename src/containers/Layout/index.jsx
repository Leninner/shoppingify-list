import { MenuAside } from '../MenuAside';

export const Layout = ({ children }) => {
  return (
    <>
      <MenuAside />
      {children}
    </>
  );
};
