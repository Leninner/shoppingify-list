import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ReturnButton = styled(Link)`
  display: flex;
  align-items: center;
  color: #f9a109;
  margin-bottom: 20px;
  text-decoration: none;
  font-weight: 700;

  span {
    margin-right: 6.54px;
    text-decoration: none;
  }
`;

export const Header = styled.header`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 40px 50px 0 50px;
`;

export const MainInfo = styled.div`
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 32px;
    color: #34333a;
    margin-top: 15px;
    margin-bottom: 20px;
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #c1c1c4;
    display: flex;
    align-items: center;

    span {
      margin-right: 13px;
    }
  }
`;
