import ListFavorites from '../components/ListFavorites';
import React from 'react';
import { WrapOutlet } from './Pages.styled';

export default function FavoritesPage() {
  return (
    <WrapOutlet>
      <ListFavorites />
    </WrapOutlet>
  );
}
