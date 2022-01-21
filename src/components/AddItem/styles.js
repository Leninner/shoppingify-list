import styled from 'styled-components';

export const StyledAddItemContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 130.98px;
  right: 0;
  bottom: 0;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  position: relative;
`;

export const BoxInput = styled.input`
  width: 309.89px;
  height: 61.25px;
  border: 2px solid #f9a109;
  border-radius: 12px;
  outline: none;
  padding: 0px 17.63px;

  &::placeholder {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #bdbdbd;
  }

  &:disabled {
    border: 2px solid #c1c1c4;
  }
`;

export const ButtonAddItem = styled.button`
  position: absolute;
  width: 87.35px;
  height: 61.25px;
  background: #f9a109;
  border-radius: 12px;
  border: none;
  right: 0;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;

  &:disabled {
    background: #c1c1c4;
  }
`;
