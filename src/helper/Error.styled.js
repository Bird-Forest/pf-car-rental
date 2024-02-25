import styled from 'styled-components';
import Logo from '../img/car-rental.png';

export const WrapError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 460px;
  height: 100px;
  border-radius: 14px;
  background-color: rgb(247, 247, 251);
  padding: 14px 18px;
`;
export const ErrorImg = styled.div`
  width: 80px;
  height: 80px;
  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-size: cover;
`;
export const ErrorText = styled.p`
  font-family: 'Manrope';
  font-size: 20px;
  font-weight: 500;
  line-height: 1.11;
  text-align: left;
  color: rgb(18, 20, 23);
`;
