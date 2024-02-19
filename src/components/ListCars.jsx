import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { fetchCatalog } from '../redux/server';
import { useDispatch } from 'react-redux';
import { selectVisibleCars } from '../redux/selectors';
import CarCard from './CarCard';
import { nanoid } from '@reduxjs/toolkit';
import { BtnMore, WrapCars, WrapListCars } from './Car.styled';

export default function ListCars() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCatalog(page));
  }, [dispatch, page]);

  const newCars = useSelector(selectVisibleCars);

  const Arr = Array.isArray(newCars) && newCars.length > 0;
  return (
    <WrapCars>
      <WrapListCars>
        {Arr &&
          newCars.map(item => {
            return <CarCard key={nanoid()} item={item} />;
          })}
      </WrapListCars>
      <BtnMore onClick={() => setPage(page + 1)} disabled={page === 3}>
        Load more
      </BtnMore>
    </WrapCars>
  );
}
