import styled from 'styled-components';

export const WrapListCars = styled.ul`
  display: flex;
  width: 1184px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 29px;
  margin: 20px auto;
`;
export const BtnHeart = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 19px;
  height: 19px;
  background-color: transparent;
  border: none;
  color: rgb(52, 112, 255);
  cursor: pointer;
  margin: 0;
  padding: 0;
  .icon-heart {
    width: 19px;
    height: 19px;
    stroke: rgba(255, 255, 255, 0.8);
    stroke-width: 1px;
  }
  .icon-heart-fill {
    width: 20px;
    height: 20px;
    stroke: rgb(52, 112, 255);
  }
`;
export const WrapCarCard = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 274px;
  height: 426px;
  padding: 0;
  margin: 0;
`;
export const ImgCar = styled.img`
  display: block;
  width: 274px;
  height: 268px;
  border-radius: 14px;
  object-fit: cover;
  padding: 0;
  margin: 0 0 14px 0;
`;
export const WrapTitleCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 274px;
  height: 24px;
  padding: 0;
  margin: 0 0 8px 0;
`;
export const TitleCard = styled.h4`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-align: left;
  color: rgb(18, 20, 23);
  margin: 0;
  padding: 0;
  span {
    color: rgb(52, 112, 255);
  }
`;
export const WrapTextCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
  width: 274px;
  height: 40px;
  padding: 0;
  margin: 0 0 28px 0;
`;
export const TextCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 274px;
  height: 18px;
  margin: 2px 0;
  .text {
    font-family: 'Manrope';
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    text-align: left;
    color: rgba(18, 20, 23, 0.5);
    padding: 0 4px;
  }
  .border {
    height: 16px;
    border-right: 2px solid rgba(18, 20, 23, 0.1);
  }
  .last {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export const BtnCard = styled.button`
  width: 274px;
  height: 44px;
  border-radius: 12px;
  font-family: 'Manrope';
  font-weight: 600;
  font-size: 14px;
  line-height: 1.4;
  text-align: center;
  background-color: rgb(52, 112, 255);
  border: none;
  outline: rgb(52, 112, 255);
  color: rgb(255, 255, 255);
  cursor: pointer;
  &:hover,
  :focus {
    background: rgb(11, 68, 205);
  }
`;
export const BtnMore = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 136px;
  height: 48px;
  border-radius: 12px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(52, 112, 255);
  color: rgb(52, 112, 255);
  font-family: 'Manrope';
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  padding: 0;
  margin: 0 auto 20px auto;
  &:disabled {
    border: 1px solid rgb(18, 20, 23);
    color: rgb(18, 20, 23);
  }
`;
