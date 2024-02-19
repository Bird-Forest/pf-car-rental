import { useSelector } from 'react-redux';
import SharedLayout from './pages/SharedLayout';
import React from 'react';
import { selectError } from '../src/redux/selectors';
import NotFoundPage from './pages/NotFoundPage';
import { Container } from 'pages/Pages.styled';

export default function App() {
  const error = useSelector(selectError);
  return (
    <Container>
      <SharedLayout />
      {error && <NotFoundPage />}
    </Container>
  );
}
