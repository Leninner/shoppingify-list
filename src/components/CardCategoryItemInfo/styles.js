import styled from 'styled-components';

export const StyledCardCategoryItemInfo = styled.div`
  width: 100%;
  height: 100%;
  padding: 27px 30px;
  overflow: auto;
  padding-bottom: 150px;
  background-color: #fff;
`;

export const Return = styled.div`
  display: flex;
  align-items: center;
  color: #f9a109;
  margin-bottom: 20px;

  span {
    margin-right: 6.54px;
    text-decoration: none;
  }

  &:hover {
    color: #f9a109;
    text-decoration: underline;
  }
`;

export const ImgItem = styled.img`
  width: 100%;
  height: 13.731rem;
  border-radius: 25px;
  object-fit: cover;
`;

export const ContainerInfo = styled.div`
  margin-top: 20px;

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #c1c1c4;
  }

  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color: #000000;
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
  }
`;
