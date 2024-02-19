import React from 'react';
import { WrapOutlet } from './Pages.styled';
import Home from 'components/Home';

export default function HomePage() {
  return (
    <WrapOutlet>
      <Home />
    </WrapOutlet>
  );
}
