import styled from 'styled-components';

export const StyledAddItemContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 130.98px;
  background-color: white;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  position: relative;
  width: 83.99%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxInput = styled.input`
  width: 100%;
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

export const ButtonConfirm = styled.button`
  width: 87.35px;
  height: 61.25px;
  border-radius: 12px;
  border: none;
  background: transparent;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;

  ${({ isCancel }) =>
    isCancel
      ? 'border: 1px solid #c0c0c0; color: #34333A; margin-right: 10px;'
      : 'background: #F9A109;  color: #FFFFFF; margin-left: 10px;'}
`;
