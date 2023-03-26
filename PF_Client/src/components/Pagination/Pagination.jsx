import React, {useState} from 'react';
import styles from './Pagination.module.css';
import { useSelector } from 'react-redux';

export const Pagination = () => {
  // Estado para actualizar la página actual
  const [currentPage, setCurrentPage] = useState(1);

  // Estado de los productos que se muestran por página
  const [productsPerPage, setProductsPerPage] = useState(8);

  // Me traigo los estados del reducer 
  let products = useSelector((state) => state.products);

  // Delimitar el indíce de los productos a paginar
  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  products = products.slice(firstProductIndex, lastProductIndex);

  // Agregar el número de páginas de acuerdo a los productos que hay en la DB
  const pageNumber = []
  for (let i = 1; i <= Math.ceil(products.length/productsPerPage); i++) {
    pageNumber.push(i)
  }

  // Cambiar la página actual
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={products.length > 0 ? styles.containerPaginate : styles.hidePaginate}>
      <nav className="d-flex justify-content-center" aria-label="...">
        <ul className="pagination flex-wrap  mt-4">

          {/* Botón Previous */}
          <li className= {currentPage  === 1 ? "page-item disabled" : "page-item"}>
            <button className="page-link" onClick={() => paginado(currentPage - 1)} >Previous</button>
          </li> 

          {/* Numeración del paginado */}
          {
            pageNumber &&  
            pageNumber.map(el => {
              return (
                <li 
                  key={el} 
                  className= {currentPage  === el ? "page-item active" : "page-item"}> 
                  <button 
                    onClick={() => paginado(el)} 
                    className = "page-link"
                    aria-current="page"
                  >{el}
                  </button>
                </li>
              )
            })  
          }

          {/* Botón Next */}
          <li className= {products.length < 8 || currentPage  === 4 ? "page-item disabled" : "page-item"}>
            <button className="page-link" onClick={() => paginado(currentPage + 1)} >Next</button>
          </li>

        </ul>
      </nav>
    </div>
  )
}