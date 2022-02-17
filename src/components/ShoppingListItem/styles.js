import styled from 'styled-components';

export const BoxCategory = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 23px;

  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
    ${({ isObtained }) => isObtained && 'text-decoration: line-through;'}
  }

  button {
    border: 2px solid #f9a109;
    box-sizing: border-box;
    border-radius: 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    color: #f9a10a;
    width: 68px;
    height: 32px;
    background: transparent;
  }
`;
