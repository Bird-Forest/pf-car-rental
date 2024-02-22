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
import { getFilterCars, setBrand, setPrice } from '../redux/filterSlice';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export default function FilterOfCars() {
  const [isBrend, setIsBrend] = useState(true);
  const [isPrice, setIsPrice] = useState(true);
  const filter = useSelector(selectFilter);
  const brand = useSelector(selectBrand);
  const price = useSelector(selectPrice);

  const dispatch = useDispatch();

  const getFilter = () => {
    // console.log(filter);
    dispatch(getFilterCars(filter));
  };
  const resetFilter = () => {
    dispatch(setBrand(null));
    dispatch(setPrice(null));
  };
  // console.log(brand);
  // console.log(price);
  // console.log(filter);

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
              // placeholder="Enter the text"
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
                value={filter.price || '$'}
                // placeholder="$"
                readOnly={price}
              />
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
      <BtnFilter type="button" onClick={getFilter}>
        Search
      </BtnFilter>
      <BtnFilter type="button" onClick={resetFilter}>
        Reset
      </BtnFilter>
    </FilterBar>
  );
}

// import React from 'react';
// import { Formik, Form, Field, FieldArray } from 'formik';
// import { selectCatalog } from '../redux/selectors';
// import { useSelector } from 'react-redux';
// import { FilterBar, WrapSelect } from './Filter.styled';

// function getCategoriesString(items, itemName) {
//   if (!items) return [];
//   return items.reduce((acc, item) => {
//     if (!acc.includes(item[itemName])) acc.push(item[itemName]);
//     return acc.sort((a, b) => a.localeCompare(b));
//   }, []);
// }

// export default function SelectReact() {
//   const catalog = useSelector(selectCatalog);
//   const selectBrand = getCategoriesString(catalog, 'make');
//   console.log(selectBrand);
//   const handleSelected = event => {
//     let value = event;
//     console.log(value);
//     // const brand = values.brand;
//     // console.log(brand);
//   };
//   return (
//     <Formik onSubmit={handleSelected}>
//       <Form>
//         <Field name="brand" value={'Hello'} />
//         <button type="button">chooce</button>
//         <FieldArray
//           name="brand"
//           render={arrayHelpers => (
//             <FilterBar>
//               {selectBrand.map((item, index) => (
//                 <WrapSelect key={index}>
//                   <span
//                     id={index}
//                     className="text"
//                     name={selectBrand[index]}
//                     onClick={e => console.log(selectBrand[index])}
//                     // onClick={() => arrayHelpers.insert(index)}
//                   >
//                     {selectBrand[index]}
//                   </span>
//                 </WrapSelect>
//               ))}
//             </FilterBar>
//           )}
//         />
//         <batton>Submit</batton>
//       </Form>
//     </Formik>
//   );
// }
