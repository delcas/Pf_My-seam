import React from 'react';
import { FilterBy } from './FilterBy/FilterBy';
import styles from './Filters.module.css';
import { OrderBy } from './OrderBy/OrderBy';

export const Filters = ({ currentPokemon, setCurrentPage, setOrden }) => {

  return (
    <div>
      <div className={currentPokemon.length > 0 ? styles.containerFilters : styles.hideFilters}>
        <OrderBy setCurrentPage={setCurrentPage} setOrden={setOrden} />
        <FilterBy setCurrentPage={setCurrentPage} setOrden={setOrden} />
      </div>
    </div>
  )
}
