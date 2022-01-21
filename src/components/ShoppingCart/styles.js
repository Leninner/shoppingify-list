import styled from 'styled-components';

export const CartContainer = styled.div`
  width: 42px;
  height: 42px;
  position: absolute;
  bottom: 3.84%;
  left: 27.62%;
  border-radius: 50%;
  background-color: #f9a109;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CartIcon = styled.span`
  color: white;
  width: 20px;
  height: 20px;
`;

export const NumberCart = styled.span`
  background-color: #eb5757;
  color: white;
  border-radius: 4px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 20px;
  font-size: 12px;
  font-weight: bold;
  top: -5px;
  right: -10px;
`;
