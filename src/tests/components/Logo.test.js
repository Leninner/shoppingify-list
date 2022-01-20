import { LogoComponent } from '../../components/Logo';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

describe('Debe estar presente en el DOM', () => {
  const logo = shallow(<LogoComponent />);

  test('Debe estar presente un SVG', () => {
    expect(logo).toMatchSnapshot();
  });
});
