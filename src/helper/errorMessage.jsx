import React from 'react';
import { ErrorImg, ErrorText, WrapError } from './Error.styled';

export default function ErrorMessage({ message }) {
  return (
    <WrapError>
      <ErrorImg />
      <ErrorText>{message}</ErrorText>
    </WrapError>
  );
}
