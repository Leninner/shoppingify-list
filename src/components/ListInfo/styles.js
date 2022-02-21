import styled from 'styled-components';

export const ListInfoContainer = styled.div`
  width: 811.96px;
  height: 63.45px;
  background: #ffffff;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;

  div {
    display: flex;
    align-items: center;
  }
`;

export const TitleList = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  margin-left: 20.69px;
`;

export const ListState = styled.div`
  width: 75.99px;
  height: 24px;
  box-sizing: border-box;
  border-radius: 8px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  padding: 4.26px 7.14px;
  margin: 0 32.7px 0 26.2px;

  ${({ isCompleted }) =>
    isCompleted ? `border: 1px solid #56ccf2;  color: #56ccf2;` : `border: 1px solid #EB5757;  color: #EB5757;`}
`;

export const Icon = styled.span`
  color: ${(props) => props.color};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
`;
