import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './SearchBar.module.css';

export const SearchBar = ({ currentTheme }) => {
  // Ejecuto las funciones de las actions
  const dispatch = useDispatch();

  // Estado del input de búsqueda
  const [search, setSearch] = useState('');

  // Deshabilitar botón "Search" si esta vacío el estado search
  const disabled = !search.length

  // Actualizar el estado de la búsqueda 
  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  // Hacer la búsqueda de productos por nombre
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchPokemonByName(search));
    setSearch('');
    setCurrentPage(1);
  };

  return (
    <div>
      {/* SearchBar */}
      <form className={`${styles.containerSerchBar} d-flex`} role="search" onSubmit={handleSubmit}>
        <input 
          className={currentTheme === 'dark' ? styles.inputSearchLight : styles.inputSearchDark} 
          onChange={(e) => handleChange(e)} 
          value={search} 
          type="search" 
          placeholder="Search..." 
          aria-label="Search" 
        />
        <button 
          className={currentTheme === 'light' ? `${styles.buttonSearch} btn btn-dark` : `${styles.buttonSearch} btn btn-light`} 
          disabled={disabled} 
          type="submit"
        >Search
        </button>
      </form>
    </div>
  )
}
