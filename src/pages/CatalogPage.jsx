import ListCars from '../components/ListCars';

import FilterCars from '../components/FilterCars';
import { WrapFilterCatalog, WrapOutlet } from './Pages.styled';

export default function CatalogPage() {
  return (
    <WrapOutlet>
      <WrapFilterCatalog>
        <FilterCars />
        <ListCars />
      </WrapFilterCatalog>
    </WrapOutlet>
  );
}
