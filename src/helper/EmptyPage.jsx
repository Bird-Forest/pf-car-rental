import React from 'react';
import { TitleEmpty, WrapEmpty, WrapImgEmpty } from './Empty.styled';

export default function EmptyPage() {
  return (
    <WrapEmpty>
      <TitleEmpty>There are no selected cars</TitleEmpty>
      <WrapImgEmpty />
    </WrapEmpty>
  );
}
