import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBrand, selectFilter, selectPrice } from '../redux/selectors';
import {
  BtnArrow,
  BtnFilter,
  FilterBar,
  FilterForm,
  OptionForm,
  SelectBrand,
  SelectPrice,
  TitleFilter,
  WrapFilter,
  WrapListBrad,
  WrapListPrice,
  WrapPrice,
  WrapSelectBrand,
  WrapSelectPrice,
} from './Filter.styled';
import { setBrand, setPrice } from '../redux/filterSlice';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export default function FilterOfCars() {
  const [isBrend, setIsBrend] = useState(true);
  const [isPrice, setIsPrice] = useState(true);
  const filter = useSelector(selectFilter);
  const brand = useSelector(selectBrand);
  const price = useSelector(selectPrice);

  const dispatch = useDispatch();

  const resetFilter = () => {
    dispatch(setBrand(null));
    dispatch(setPrice(null));
  };

  return (
    <FilterBar>
      <FilterForm>
        <WrapFilter>
          <TitleFilter htmlFor="brand">Car brand</TitleFilter>
          <WrapSelectBrand>
            <SelectBrand
              id="brand"
              name="brand"
              value={filter.brand || 'Enter the text'}
              readOnly={brand}
            />
            <BtnArrow onClick={() => setIsBrend(!isBrend)}>
              {isBrend ? (
                <IoIosArrowDown className="icon-arrow" />
              ) : (
                <IoIosArrowUp className="icon-arrow" />
              )}
            </BtnArrow>
            <WrapListBrad
              style={{
                display: isBrend ? 'none' : 'block',
              }}
            >
              {brand.map((elm, id) => (
                <OptionForm
                  key={id}
                  value={brand[id]}
                  className="item-font"
                  onClick={() => dispatch(setBrand(brand[id]))}
                >
                  {brand[id]}
                </OptionForm>
              ))}
            </WrapListBrad>
          </WrapSelectBrand>
        </WrapFilter>
        <WrapFilter>
          <TitleFilter htmlFor="price">Price/ 1 hour</TitleFilter>
          <WrapSelectPrice>
            <WrapPrice>
              <span className="text">To</span>
              <SelectPrice
                id="price"
                name="price"
                value={filter.price || ''}
                readOnly={price}
              />
              <span className="text">$</span>
            </WrapPrice>
            <BtnArrow onClick={() => setIsPrice(!isPrice)}>
              {isPrice ? (
                <IoIosArrowDown className="icon-arrow" />
              ) : (
                <IoIosArrowUp className="icon-arrow" />
              )}
            </BtnArrow>
            <WrapListPrice
              style={{
                display: isPrice ? 'none' : 'block',
              }}
            >
              {price.map((item, id) => (
                <OptionForm
                  key={id}
                  value={price[id]}
                  className="item-font"
                  onClick={() => dispatch(setPrice(price[id]))}
                >
                  {price[id]}$
                </OptionForm>
              ))}
            </WrapListPrice>
          </WrapSelectPrice>
        </WrapFilter>
      </FilterForm>
      <BtnFilter type="button" onClick={resetFilter}>
        <span className="text">Reset</span>
      </BtnFilter>
    </FilterBar>
  );
}
