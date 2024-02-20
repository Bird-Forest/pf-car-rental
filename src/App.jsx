import { useSelector } from 'react-redux';
import SharedLayout from './pages/SharedLayout';
import React from 'react';
import { selectError } from '../src/redux/selectors';
import { Container } from 'pages/Pages.styled';

export default function App() {
  const error = useSelector(selectError);
  console.log(error);
  return (
    <Container>
      <SharedLayout />
    </Container>
  );
}
