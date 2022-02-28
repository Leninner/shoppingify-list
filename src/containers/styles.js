import styled from 'styled-components';

export const StyledViewMain = styled.div`
  position: relative;
  width: calc(100% - 24.313rem - 5.87rem);
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #fafafe;

  ${({ center }) =>
    center &&
    `
    align-items: center;
    overflow: auto;
    `}
`;

export const StyledContainerMain = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;
