import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFavorites } from '../redux/server';
import { WrapListCars } from './Car.styled';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../redux/selectors';
import CarCard from './CarCard';
import { nanoid } from '@reduxjs/toolkit';

export default function ListFavorites() {
  const selectedCars = useSelector(selectFavorites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  const Arr = Array.isArray(selectedCars) && selectedCars.length > 0;
  return (
    <WrapListCars>
      {Arr &&
        selectedCars.map(item => {
          return <CarCard key={nanoid()} item={item} />;
        })}
    </WrapListCars>
  );
}
