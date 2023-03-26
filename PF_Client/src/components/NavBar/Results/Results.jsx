import React, {useState, useMemo, useEffect} from 'react';
import { MarkedItem } from '../MarkedItem/MarkedItem';
import styles from './Results.module.css';

export const Results = ({ allProducts, onItemSelected, search, onResultsCalculated }) => {
  
  // Resultados de la búsqueda en la SearchBar
  const [results, setResults] = useState([]);

  // Actualizar la cantidad de elementos que se muestran
  useEffect(() => {
    onResultsCalculated(results);
  },[results, onResultsCalculated])

  // Hacer la búsqueda y mostrar el resultado
  const findMatch = (allProducts, search) => {
    let res = allProducts.filter(el => {
      return el.name.toLowerCase().indexOf(search) >= 0 && search.length > 0
    })
    setResults(res);
    res = res.slice(0, 5)
    return res;
  }

  // Actualizar los elementos mostrados
  const filteredItem = useMemo(() => 
    findMatch(allProducts, search), 
    [allProducts, search]); 

  
  return (
    <div className={styles.resultsContainer}>
      {
        search !== '' ?
        filteredItem.map(el => 
          <MarkedItem 
            key={el.id} 
            item={el} 
            search={search}
            onClick={onItemSelected}
          />)
        : ''
      }
    </div>
  )
}
