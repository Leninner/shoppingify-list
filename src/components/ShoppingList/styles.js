import styled from 'styled-components';

export const StyledListItems = styled.div`
  position: relative;
  top: 30%;
  height: calc(100vh - 30% - 130.98px);
  width: 100%;
  right: 0;
`;

export const FeedBack = styled.span`
  position: absolute;
  top: 30%;
  left: calc(50% - 50px);
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  color: #34333a;
`;

export const Img = styled.img`
  position: absolute;
  left: 25%;
  bottom: -15px;
  width: 50%;
  z-index: 1;
`;

export const ShoppingListContainer = styled.div`
  width: 79.37%;
  left: calc(50% - 39.69%);
  position: absolute;
  height: 100%;
`;

export const ShoppingListTittle = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    color: #34333a;
  }
`;

export const CategoriesContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;

  &:last-child {
    padding-bottom: 15%;
  }
`;
