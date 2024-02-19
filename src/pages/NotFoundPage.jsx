import React from 'react';
import {
  TitleNotFound,
  WrapImg,
  WrapNotFound,
  WrapOutlet,
} from './Pages.styled';

export default function NotFoundPage() {
  return (
    <WrapOutlet>
      <WrapNotFound>
        <TitleNotFound>Not Found Page</TitleNotFound>
        <WrapImg />
      </WrapNotFound>
    </WrapOutlet>
  );
}
