import React from 'react';
import ListCars from '../components/ListCars';
import { WrapFilterCatalog, WrapOutlet } from './Pages.styled';
import FilterOfCars from '../components/FilterOfCars';

export default function CatalogPage() {
  return (
    <WrapOutlet>
      <WrapFilterCatalog>
        <FilterOfCars />
        <ListCars />
      </WrapFilterCatalog>
    </WrapOutlet>
  );
}
