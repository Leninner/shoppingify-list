import styled from 'styled-components';

export const StyledInteractiveAside = styled.div`
  background-color: #fff0de;
  width: 27.0138%;
  height: 100vh;
  position: relative;

  @media (max-width: 768px) {
    ${(props) => (props.showingModal ? 'display: block; width: calc(100% - 6.52%)' : 'display: none')};
  }
`;
