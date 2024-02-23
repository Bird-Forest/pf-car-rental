import styled from 'styled-components';

export const FilterBar = styled.div`
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 859px;
  height: 74px;
  padding: 0;
  margin: 0 auto;
`;
export const FilterForm = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  padding: 0;
  margin: 0;
`;
export const WrapFilter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  padding: 0;
  margin: 0;
`;
export const TitleFilter = styled.h4`
  font-family: 'Manrope';
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  color: rgb(138, 138, 137);
`;
export const WrapSelectBrand = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  border-radius: 14px;
  background: rgb(247, 247, 251);
  padding: 14px 18px;
`;
export const BtnArrow = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background: rgb(247, 247, 251);
  .icon-arrow {
    width: 20px;
    height: 20px;
    fill: rgb(18, 20, 23);
  }
`;
export const SelectBrand = styled.input`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 188px;
  height: 20px;
  outline: rgb(247, 247, 251);
  border: none;
  background-color: rgb(247, 247, 251);
  padding: 0;
  font-family: 'Manrope';
  font-size: 16px;
  font-weight: 500;
  line-height: 1.11;
  text-align: left;
  color: rgb(18, 20, 23);
`;
export const WrapListBrad = styled.ul`
  position: absolute;
  top: 50px;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 224px;
  height: 200px;
  box-sizing: border-box;
  border: 1px solid rgba(18, 20, 23, 0.05);
  border-radius: 14px;
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  background-color: rgb(255, 255, 255);
  padding: 14px 18px 14px 18px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    right: 8px;
    width: 16px;
    margin: 16px 8px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-track {
    width: 16px;
    background-color: rgb(255, 255, 255);
    margin: 14px 8px 14px 0;
  }
  &::-webkit-scrollbar-thumb {
    width: 16px;
    height: 66px;
    border-top-right-radius: 10px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 10px;
    border-right: 8px solid rgb(255, 255, 255);
    background-color: rgba(18, 20, 23, 0.05);
  }
`;
export const OptionForm = styled.li`
  color: rgba(18, 20, 23, 0.2);
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: left;

  // display: flex;
  // font-size: 14px;
  // outline: transparent;
  // border: 1px solid rgba(18, 20, 23, 0.05);
  // border-radius: 14px;
  // box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  // background-color: rgb(255, 255, 255);
  // padding: 18px;
  // color: rgba(18, 20, 23, 0.2);
  // margin: 0;
`;
export const WrapSelectPrice = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  border-radius: 14px;
  background: rgb(247, 247, 251);
  padding: 12px 18px;
`;
export const WrapPrice = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  padding: 0;
  .text-span {
    width: 8px;
    font-family: 'Manrope';
    font-size: 16px;
    font-weight: 500;
    line-height: 1.11;
    text-align: left;
    color: rgb(18, 20, 23);
    padding: 0;
    margin: 0;
  }
`;
export const SelectPrice = styled.input`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 85px;
  height: 20px;
  outline: rgb(247, 247, 251);
  border: none;
  background-color: rgb(247, 247, 251);
  color: rgb(18, 20, 23);
  font-family: 'Manrope';
  font-size: 16px;
  font-weight: 500;
  line-height: 1.11;
  text-align: left;
`;
export const WrapListPrice = styled.ul`
  position: absolute;
  top: 50px;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 150px;
  height: 200px;
  box-sizing: border-box;
  border: 1px solid rgba(18, 20, 23, 0.05);
  border-radius: 14px;
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  background-color: rgb(255, 255, 255);
  padding: 14px 18px 14px 18px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    right: 8px;
    width: 16px;
    margin: 16px 8px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-track {
    width: 16px;
    background-color: rgb(255, 255, 255);
    margin: 14px 8px 14px 0;
  }
  &::-webkit-scrollbar-thumb {
    width: 16px;
    height: 66px;
    border-top-right-radius: 10px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 10px;
    border-right: 8px solid rgb(255, 255, 255);
    background-color: rgba(18, 20, 23, 0.05);
  }
`;
export const BtnFilter = styled.button`
  width: 136px;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 36px;
  color: rgb(255, 255, 255);
  font-family: ' Manrope';
  font-size: 16px;
  font-weight: 500;
  line-height: 1.42;
  border-radius: 12px;
  background-color: rgb(52, 112, 255);
  cursor: pointer;
  &:hover,
  :focus {
    background: rgb(11, 68, 205);
  }
`;
