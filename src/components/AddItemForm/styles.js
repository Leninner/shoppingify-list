import styled from 'styled-components';

const mainStyles = `
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`;

export const StyledAddItemForm = styled.form`
  width: 100%;
  height: 100%;
  background-color: white;
  padding-top: 20px;

  h3 {
    margin-left: 20px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color: #000000;
  }
`;

export const Campo = styled.label`
  ${mainStyles}
  color: #34333a;
  display: flex;
  width: 79.66%;
  flex-direction: column;
  margin: 18px 0;
  position: relative;

  &:focus-within > span {
    color: #f9a109;
  }
`;

export const Entrada = styled.input`
  height: 3.828rem;
  width: 100%;
  border: 2px solid #bdbdbd;
  border-radius: 12px;
  outline: none;
  padding: 0px 16px;
  margin-top: 6.08px;
  color: #000000;
  ${mainStyles}

  &::placeholder {
    font-style: normal;
    ${mainStyles}
    color: #bdbdbd;
  }

  &:focus {
    border: 2px solid #f9a109;
  }
`;

export const EntradaNote = styled.textarea`
  width: 100%;
  height: 6.889rem;
  border: 2px solid #bdbdbd;
  border-radius: 12px;
  outline: none;
  resize: vertical;
  max-height: 9.375rem;
  padding: 10px 16px;
  margin-top: 10px;

  &::placeholder {
    ${mainStyles}
    color: #bdbdbd;
  }

  &:focus {
    border: 2px solid #f9a109;
  }
`;

export const Section = styled.section`
  width: 100%;
  height: 73%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Error = styled.span`
  ${mainStyles}
  color: red;
  margin-top: 10px;
  text-align: center;
  position: absolute;
  bottom: -20px;
  left: 0;
`;
