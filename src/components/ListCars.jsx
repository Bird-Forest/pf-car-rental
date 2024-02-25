import { useSelector } from 'react-redux';
import React from 'react';
import { fetchCatalog } from '../redux/server';
import { useDispatch } from 'react-redux';
import {
  selectLoading,
  selectPage,
  selectVisibleCars,
} from '../redux/selectors';
import CarCard from './CarCard';
import { nanoid } from '@reduxjs/toolkit';
import { BtnMore, WrapListCars } from './Car.styled';
import { Loading } from '../helper/Loading';
import { addPage } from '../redux/carsSlice';
import MessageError from 'helper/MessageError';

export default function ListCars() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  const page = useSelector(selectPage);
  const totalCards = 36;
  let perPage = 8;
  let totalPage = Math.ceil(totalCards / perPage);
  const filterCars = useSelector(selectVisibleCars);
  // console.log(filterCars);
  const isBtnMore = filterCars.length === 0 || filterCars.length === totalCards;

  const nextPage = () => {
    dispatch(addPage(page));
    if (page <= totalPage) {
      dispatch(fetchCatalog(page + 1));
    }
  };

  const Arr = Array.isArray(filterCars) && filterCars.length > 0;
  return (
    <>
      {isLoading && <Loading />}
      <WrapListCars>
        {Arr ? (
          filterCars.map(item => {
            return <CarCard key={nanoid()} item={item} />;
          })
        ) : (
          <MessageError message={'Nothing was found for your request'} />
        )}
      </WrapListCars>
      <BtnMore
        onClick={nextPage}
        style={{ display: isBtnMore ? 'none' : 'block' }}
      >
        Load more
      </BtnMore>
    </>
  );
}
