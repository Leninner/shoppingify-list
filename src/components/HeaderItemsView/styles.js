import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 37.5px 50px 0 50px;

  h3 {
    width: 450.29px;
    height: 66px;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 32px;
    color: #34333a;

    span {
      color: #f9a109;
    }
  }
`;

export const SearchContainer = styled.form`
  position: relative;
  width: 28.8%;
  height: 50.92px;

  span {
    position: absolute;
    top: calc(50% - 12px);
    margin-left: 9.86%;
    color: #34333a;
  }

  input {
    width: 100%;
    height: 100%;
    background: #ffffff;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.04);
    border-radius: 12px;
    outline: none;
    border: none;
    padding: 0 0 0 61.73px;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #34333a;

    &::placeholder {
      color: #bdbdbd;
    }
  }
`;
