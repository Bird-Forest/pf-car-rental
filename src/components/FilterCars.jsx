import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCatalog, selectFilter } from '../redux/selectors';
import {
  BtnClear,
  FilterBar,
  FilterForm,
  OptionForm,
  SelectBrand,
  SelectPrice,
  TitleFilter,
  WrapSelect,
} from './Filter.styled';
import { setBrand, setPrice } from '../redux/filterSlice';

function getCategoriesString(items, itemName) {
  if (!items) return [];
  return items.reduce((acc, item) => {
    if (!acc.includes(item[itemName])) acc.push(item[itemName]);
    return acc.sort((a, b) => a.localeCompare(b));
  }, []);
}

function getCategoriesNumber(items, itemName) {
  if (!items) return [];
  return items.reduce((acc, item) => {
    if (!acc.includes(item[itemName])) acc.push(item[itemName]);
    return acc.sort((a, b) => a - b);
  }, []);
}

export default function FilterCars() {
  const catalog = useSelector(selectCatalog);
  const brand = getCategoriesString(catalog, 'make');
  const price = getCategoriesNumber(catalog, 'rentalPrice');

  const dispatch = useDispatch();

  const handleOnChangeFilter = event => {
    let value = event.target.value;
    if (event.target.name === 'brand') {
      dispatch(setBrand(value));
    }
    if (event.target.name === 'price') {
      dispatch(setPrice(value));
    }
  };

  const filter = useSelector(selectFilter);

  const clearFilter = filter => {
    filter = {
      brand: ' ',
      price: ' ',
    };
    dispatch(setBrand(null));
    dispatch(setPrice(null));
  };

  return (
    <FilterBar>
      <FilterForm>
        <TitleFilter htmlFor="brand">Car brand</TitleFilter>
        <WrapSelect>
          <SelectBrand
            id="brand"
            name="brand"
            value={filter.brand || ' '}
            onChange={handleOnChangeFilter}
          >
            <OptionForm value="">Enter the text</OptionForm>
            {brand.map(option => (
              <OptionForm key={option} value={option}>
                {option}
              </OptionForm>
            ))}
          </SelectBrand>
        </WrapSelect>
      </FilterForm>
      <FilterForm>
        <TitleFilter htmlFor="price">Price/ 1 hour</TitleFilter>
        <WrapSelect>
          <p className="text">To</p>
          <SelectPrice
            id="price"
            name="price"
            value={filter.price || ' '}
            onChange={handleOnChangeFilter}
          >
            <OptionForm value="">$</OptionForm>
            {price.map(option => (
              <OptionForm key={option} value={option}>
                {option}$
              </OptionForm>
            ))}
          </SelectPrice>
        </WrapSelect>
      </FilterForm>
      <BtnClear onClick={clearFilter}>Reset</BtnClear>
    </FilterBar>
  );
}
