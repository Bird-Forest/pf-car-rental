import styled from 'styled-components';
import Car from '../img/car-rental.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;
export const WrapAppBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8vh;
  width: 100%;
  margin: 0;
`;
export const WrapNavigator = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1184px;
  padding: 0 68px;
  .navigate {
    display: block;
    font-family: 'Montserrat';
    font-size: 24px;
    font-weight: 700;
    color: rgb(52, 112, 255);
    text-align: center;
    padding: 0;
    margin: 0;
    text-decoration: none;
    transition: all 0.3s;
    &.active {
      color: rgb(11, 68, 205);
    }
  }
`;
export const WrapOutlet = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 92vh;
  margin: 0;
`;
export const WrapFilterCatalog = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const WrapNotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  max-width: 1184px;
  margin: 50px auto;
  padding: 0;
`;
export const TitleNotFound = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 50px;
  font-family: 'Montserrat';
  font-size: 32px;
  font-weight: 700;
  color: rgb(52, 112, 255);
  text-align: center;
  padding: 0;
  margin: 0;
`;
export const WrapImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 600px;
  background-image: url(${Car});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0;
  margin: 0;
`;
