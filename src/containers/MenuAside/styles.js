import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MenuContainer = styled.div`
  position: absolute;
  width: 6.88%;
  height: 100vh;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0 15px 0;
`;

export const DivItems = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const MenuItem = styled(NavLink)`
  width: 100%;
  text-align: center;
  height: 16.25px;
  color: #454545;
  cursor: pointer;
  text-decoration: none;
  margin: 25px 0;
  position: relative;

  &[aria-current] {
    &::before {
      content: '';
      position: absolute;
      left: 0;
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
  left: 85%;
  top: 0;
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
