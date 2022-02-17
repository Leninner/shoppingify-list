import styled from 'styled-components';

export const ConfirmListPopupWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ConfirmListContainer = styled.div`
  position: relative;
  width: 508.52px;
  height: 219.39px;
  background: #ffffff;
  border-radius: 24px;

  h3 {
    position: absolute;
    width: 410.82px;
    height: 60px;
    top: 33.25px;
    left: 38.51px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color: #34333a;
  }

  span {
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    color: #828282;
  }

  div {
    position: absolute;
    bottom: 29.26px;
    right: 30.15px;
  }
`;

export const FeddbackButton = styled.button`
  width: 87.35px;
  height: 61.25px;
  border-radius: 12px;
  outline: none;
  border: none;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;

  ${({ isCancel }) => (!isCancel ? ` background: #eb5757; color: white` : `background: white; color: #34333A`)}
`;
