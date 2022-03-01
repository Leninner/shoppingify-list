import styled from 'styled-components';

export const ItemInfoContainer = styled.div`
  width: 11.375rem;
  background: #ffffff;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  padding: 15px 16px;
  align-items: center;

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    height: 20px;
    max-width: 118px;
    height: auto;
  }

  .material-icons {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #c1c1c4;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
