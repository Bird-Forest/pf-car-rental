import styled from 'styled-components';
import audi from '../img/audi2.jpg';
import infinity from '../img/infinity1.jpg';
import jaguar from '../img/jaguar1.jpg';
import lincoln from '../img/lincoln1.jpg';
import pegot from '../img/pegot1.jpg';
import volvo from '../img/volvo1.jpg';

export const WrapHome = styled.div`
  display: flex;
  width: 1184px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;
export const WrapContagent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 240px;
  padding: 8px;
  margin: 0;
`;
export const InfoContrag = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .info-title {
    font-family: 'Manrope';
    font-weight: 500;
    font-size: 18px;
    line-height: 1.3;
    text-align: left;
    color: rgb(52, 112, 255);
    margin: 0 0 8px 0;
  }
  .info-text {
    color: rgb(18, 20, 23);
    font-family: 'Manrope';
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    text-align: left;
  }
`;
export const ImigAudi = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 370px;
  height: 200px;
  border-radius: 14px;
  background-image: url(${audi});
  background-repeat: no-repeat;
  background-size: cover;
`;
export const ImigInfinity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 370px;
  height: 200px;
  border-radius: 14px;
  background-image: url(${infinity});
  background-repeat: no-repeat;
  background-size: cover;
`;
export const ImigJaguar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 370px;
  height: 200px;
  border-radius: 14px;
  background-image: url(${jaguar});
  background-repeat: no-repeat;
  background-size: cover;
`;
export const ImigLincoln = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 370px;
  height: 200px;
  border-radius: 14px;
  background-image: url(${lincoln});
  background-repeat: no-repeat;
  background-size: cover;
`;
export const ImigPegot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 370px;
  height: 200px;
  border-radius: 14px;
  background-image: url(${pegot});
  background-repeat: no-repeat;
  background-size: cover;
`;
export const ImigVolvo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 370px;
  height: 200px;
  border-radius: 14px;
  background-image: url(${volvo});
  background-repeat: no-repeat;
  background-size: cover;
`;
