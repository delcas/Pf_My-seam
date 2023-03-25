import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './SearchBar.module.css';
import { searchProductByName } from '../../../redux/actions';
import { Results } from '../Results/Results'
//Chakra
import { IconButton, Input  } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

export const SearchBar = ({ allProducts }) => {
  // Ejecuto las funciones de las actions
  const dispatch = useDispatch();

  // Resultados de la búsqueda en la SearchBar
  const [results, setResults] = useState([]);

  // Estado del input de búsqueda
  const [search, setSearch] = useState('');

  // Deshabilitar botón "Search" si esta vacío el estado search
  const disabled = !search.length

  // Actualizar el estado de la búsqueda 
  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  };

  // Hacer la búsqueda de productos por nombre
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchProductByName(search));
    setSearch('');
    // setCurrentPage(1);
  };

  // Actualizar el número de resultados encontrados
  const handleResults = (items) => {
    setResults(items);
  };

  // Actualizar el producto seleccionado
  const handleItemSelected = (item) => {  
    setSearch(item)
    dispatch(searchProductByName(item))
    setSearch('');
    // setCurrentPage(1);
  }

  return (
    <div>
      <form className={`${styles.containerSerchBar} d-flex`} role="search" onSubmit={handleSubmit}>
        {/* Input search & Button Search */}
        <Input className={styles.inputSearch} mr={3} width='250px' placeholder='Search...' onChange={(e) => handleChange(e)} value={search} type="search" />
        <IconButton className={styles.buttonSearch} mr={3} rounded="full" icon={<SearchIcon />} isDisabled={disabled} onClick={handleSubmit} />
      </form>

      
      <div className={styles.conatinerResults}>
      {/* Quantity Results */}
      { search.length > 0 && <div className={styles.quantityResults}>{results.length > 5 ? 5 : results.length} results </div>}
        {/* Search results */}
        { allProducts && <Results 
          allProducts={allProducts} 
          onItemSelected={handleItemSelected} 
          search={search} 
          onResultsCalculated={handleResults}
          />
        }
      </div>
    </div>
  )
}
