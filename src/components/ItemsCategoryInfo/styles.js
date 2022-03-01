import styled from 'styled-components';

export const StyledItemsCategoryInfo = styled.div`
  width: 100%;
  padding: 3.125rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

export const TitleCategory = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  height: 23px;
`;

export const CategoryContainer = styled.div`
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 2fr));
  grid-gap: 40px 19.61px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    grid-gap: 20px 19.61px;
  }
`;
