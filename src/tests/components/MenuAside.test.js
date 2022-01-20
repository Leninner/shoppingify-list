import { MenuAside } from '../../components/MenuAside';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { MenuItem } from '../../components/MenuAside/styles';

describe('Debe encontrar los elementos correctos en el DOM', () => {
  test('Debe encontrar el componente en el documento', () => {
    const menuAside = shallow(<MenuAside />);
    expect(menuAside).toMatchSnapshot();
  });

  test('Debe encontrar 3 elementos span en el DOM', () => {
    const menuAside = shallow(<MenuAside />);
    expect(menuAside.find(MenuItem).length).toBe(3);
  });
});
