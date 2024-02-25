import React from 'react';
import { ErrorImg, ErrorText, WrapError } from './Message.styled';

export default function MessageError({ message }) {
  return (
    <WrapError>
      <ErrorImg />
      <ErrorText>{message}</ErrorText>
    </WrapError>
  );
}
