import styled from 'styled-components';
import Car from '../img/car-rental.png';

export const WrapEmpty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  max-width: 1184px;
  margin: 50px auto;
  padding: 0;
`;
export const TitleEmpty = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 50px;
  font-family: 'Montserrat';
  font-size: 28px;
  font-weight: 500;
  color: rgb(52, 112, 255);
  text-align: center;
  padding: 0;
  margin: 0;
`;
export const WrapImgEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 480px;
  height: 480px;
  background-image: url(${Car});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0;
  margin: 0;
`;
// ******* Logo ********
