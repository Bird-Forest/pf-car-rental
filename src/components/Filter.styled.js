import styled from 'styled-components';

export const FilterBar = styled.div`
  top: 150px;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 859px;
  height: 74px;
  padding: 0;
  margin: 0 auto;
`;
export const TitleFilter = styled.h4`
  font-family: 'Manrope';
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  color: rgb(138, 138, 137);
`;
export const FilterForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  padding: 0;
  margin: 0;
`;
export const WrapSelect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  background: rgb(247, 247, 251);
  padding: 12px 18px 16px 18px;
  .text {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 40px;
    height: 20px;
    font-family: 'Manrope';
    font-size: 16px;
    font-weight: 500;
    line-height: 1.11;
    text-align: left;
    padding: 0;
    margin: 0;
  }
`;
export const SelectBrand = styled.select`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 224px;
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
  cursor: pointer;
`;
export const OptionForm = styled.option`
  position: absolute;
  display: flex;
  font-size: 14px;
  outline: transparent;
  border: 1px solid rgba(18, 20, 23, 0.05);
  border-radius: 14px;
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  background-color: rgb(255, 255, 255);
  padding: 18px;
  color: rgba(18, 20, 23, 0.2);
  margin: 50px 0 0 0;
`;
export const SelectPrice = styled.select`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 80px;
  height: 20px;
  outline: rgb(247, 247, 251);
  border: none;
  background-color: rgb(247, 247, 251);
  color: rgb(18, 20, 23);
  font-family: 'Manrope';
  font-size: 16px;
  font-weight: 500;
  line-height: 1.11;
  text-align: center;
  cursor: pointer;
`;
export const BtnClear = styled.button`
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
