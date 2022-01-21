import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MenuContainer = styled.div`
  position: absolute;
  width: 6.88%;
  height: 100vh;
  background: #ffffff;
`;

export const DivItems = styled.div`
  width: 100%;
`;

export const MenuItem = styled(NavLink)`
  position: absolute;
  left: 35.83%;
  top: ${({ top }) => `${top}%`};
  width: 20.04px; */
  height: 16.25px;
  color: #454545;
  cursor: pointer;
  text-decoration: none;

  &[aria-current] {
    &::before {
      content: '';
      position: absolute;
      left: -170%;
      width: 6px;
      top: -10px;
      height: 45.98px;
      background: #f9a109;
      font-size: 34px;
      color: black;
      border-radius: 0px 4px 4px 0px;
    }
  }
`;

export const HoverMenuItem = styled.span`
  position: absolute;
  width: 64.64px;
  height: 21.08px;
  background: #454545;
  border-radius: 4px;
  font-size: 12px;
  color: #ffffff;
  top: ${({ top }) => `${top}%`};
  left: 75.83%;
  display: ${({ isShow }) => (isShow ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid #454545;
    top: calc(50% - 3px);
    left: -9px;
    transform: translateX(-50%);
    transform: rotate(90deg);
  }
`;

// https://stackoverflow.com/questions/55465673/jest-enzyme-with-styled-components
