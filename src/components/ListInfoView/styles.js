import styled from 'styled-components';

export const Div = styled.div`
  width: 100%;
  height: auto;
  z-index: 999;
  padding: 0 0 0 50px;
  margin-top: 51px;
`;

export const TitleCategory = styled.h1`
  font-family: Quicksand;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
`;

export const ItemInfoContainer = styled.div`
  width: 182px;
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
    height: 20px;
    max-width: 118px;
    height: auto;
  }
`;

export const CategoryContainer = styled.div`
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(182px, 1fr));
  grid-gap: 40px 19.61px;
`;

export const Quantity = styled.span`
  color: #f9a10a;
`;
