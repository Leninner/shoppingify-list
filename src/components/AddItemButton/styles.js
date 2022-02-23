import styled from 'styled-components';

export const StyledAddItemContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 8.186rem;
  background-color: white;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SimilarStyles = `
position: relative;
width: 19.368rem;
display: flex;
align-items: center;
justify-content: center;
`;

export const Div = styled.div`
  ${SimilarStyles}
`;

export const Form = styled.form`
  ${SimilarStyles}
`;

export const BoxInput = styled.input`
  width: 100%;
  height: 3.828rem;
  border: 2px solid #f9a109;
  border-radius: 12px;
  outline: none;
  padding: 0 1.102rem;

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
  width: 5.459rem;
  height: 3.828rem;
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
  min-width: 87.35px;
  padding: 0 2vh;
  height: 61.25px;
  border-radius: 12px;
  border: none;
  background: transparent;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  transition: all 0.2s ease 0s;

  ${({ isCancel }) =>
    isCancel
      ? 'color: #34333A; margin-right: 10px; background: rgb(227, 227, 227); &:hover { background: rgb(221, 221, 221); }'
      : 'background: #F9A109;  color: #FFFFFF; margin-right: 10px;'}
`;

export const ButtonCompletingList = styled.button`
  min-width: 87.35px;
  padding: 0 2vh;
  height: 61.25px;
  border-radius: 12px;
  border: none;
  background: transparent;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  transition: all 0.2s ease 0s;

  ${({ isCancelList }) =>
    isCancelList
      ? 'color: #34333A; margin-right: 10px; background: rgb(227, 227, 227); &:hover { background: rgb(221, 221, 221); }'
      : 'background: #56CCF2; border-radius: 12px; color: #FFFFFF;'}
`;
