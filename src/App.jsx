import { useDispatch, useSelector } from 'react-redux';
import React, { Suspense, useEffect, useMemo } from 'react';
import { selectStatus } from './redux/selectors';
import { Container } from './pages/Pages.styled';
import { fetchCarsForFilter, fetchCatalog } from './redux/server';
import AppBar from './pages/AppBar';
import CustomRoutes from './pages/CustomRoutes';
import { Loading } from './helper/Loading';

export default function App() {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const getCatalog = useMemo(() => fetchCatalog(1), []);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getCatalog);
      dispatch(fetchCarsForFilter());
    }
    return () => {};
  }, [status, dispatch, getCatalog]);

  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loading />}>
        <CustomRoutes />
      </Suspense>
    </Container>
  );
}
