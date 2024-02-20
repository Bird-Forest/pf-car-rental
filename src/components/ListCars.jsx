import { useSelector } from 'react-redux';
import React, { useEffect, useMemo } from 'react';
import { fetchCatalog } from '../redux/server';
import { useDispatch } from 'react-redux';
import {
  selectCatalog,
  // selectError,
  selectLoading,
  selectPage,
  selectStatus,
} from '../redux/selectors';
import CarCard from './CarCard';
import { nanoid } from '@reduxjs/toolkit';
import { BtnMore, WrapCars, WrapListCars } from './Car.styled';
import { Loading } from '../helper/Loading';
import { addPage } from '../redux/carsSlice';

export default function ListCars() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const catalog = useSelector(selectCatalog);
  // const error = useSelector(selectError);
  const status = useSelector(selectStatus);
  const page = useSelector(selectPage);
  const totalCards = 36;
  let perPage = 8;
  let totalPage = Math.ceil(totalCards / perPage);

  const getCatalog = useMemo(() => fetchCatalog(1), []);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getCatalog);
    }
    return () => {};
  }, [status, dispatch, getCatalog]);

  const nextPage = () => {
    dispatch(addPage(page));
    if (page <= totalPage) {
      dispatch(fetchCatalog(page + 1));
    }
  };

  const Arr = Array.isArray(catalog) && catalog.length > 0;
  return (
    <WrapCars>
      {isLoading && <Loading />}
      <WrapListCars>
        {Arr &&
          catalog.map(item => {
            return <CarCard key={nanoid()} item={item} />;
          })}
      </WrapListCars>
      <BtnMore onClick={nextPage} disabled={page === totalPage}>
        Load more
      </BtnMore>
      {/* {error && <errorMessage />} */}
    </WrapCars>
  );
}
