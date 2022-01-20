import styled from 'styled-components';

export const MenuContainer = styled.div`
  position: absolute;
  width: 6.88%;
  height: 100vh;
  background: #ffffff;
`;

export const DivItems = styled.div`
  width: 100%;
`;

export const MenuItem = styled.span`
  position: absolute;
  left: 35.83%;
  top: ${({ top }) => `${top}%`};
  width: 20.04px;
  height: 16.25px;
  color: #454545;
`;

// https://stackoverflow.com/questions/55465673/jest-enzyme-with-styled-components
