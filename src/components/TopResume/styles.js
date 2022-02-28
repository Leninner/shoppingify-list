import styled from 'styled-components';

export const TopResumeContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 0 5%;
  margin-top: 3.296rem;

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color: #000000;
  }

  @media (max-width: 1920px) {
    justify-content: space-around;
  }

  @media (max-width: 1440px) {
    justify-content: space-between;
  }
`;
