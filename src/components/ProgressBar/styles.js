import styled from 'styled-components';

export const ResumeItem = styled.div`
  margin-top: 1.813rem;
`;

export const ResumeItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.914rem;
`;

export const ProgressBarContainer = styled.div`
  background-color: #e0e0e0;
  border-radius: 0.5rem;
  width: ${(props) => props.width}rem;
`;

export const Progress = styled.div`
  height: 6px;
  border-radius: 1rem;
  width: ${(props) => props.width}rem;
  background-color: ${(props) => props.color};
`;
