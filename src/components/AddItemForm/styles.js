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
  flex-direction: column;
  margin: 18px 0;

  &:focus-within > span {
    color: #f9a109;
  }
`;

export const Entrada = styled.input`
  width: 309.89px;
  height: 61.25px;
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
  width: 309.89px;
  height: 100px;
  border: 2px solid #bdbdbd;
  border-radius: 12px;
  outline: none;
  resize: vertical;
  max-height: 150px;
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
  height: 75%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
