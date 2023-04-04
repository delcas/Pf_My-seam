import React from 'react';
import styles from './Paginado.module.css';


export const Paginado = ({ totalProducts, productsPerPage, setCurrentPage, currentPage }) => {

  // Agregar el número de páginas de acuerdo a los productos que hay en la DB
  const pageNumber = []
  for (let i = 1; i <= Math.ceil(totalProducts/productsPerPage); i++) {
    pageNumber.push(i)
  }

  return (
    <div className={totalProducts > 0 ? styles.containerPaginate : styles.hidePaginate}>
      <nav className="d-flex justify-content-center" aria-label="...">
        <ul className="pagination flex-wrap mt-4">

          {/* Botón Previous */}
          <li>
            <button disabled={currentPage  === 1} className={styles.anteriorSiguiente} onClick={() => setCurrentPage(currentPage - 1)} >Anterior</button>
          </li> 

          {/* Numeración del paginado */}
          {
            pageNumber &&  
            pageNumber.map((page,index) => {
              return (
                <li 
                  key={index} 
                  className= {currentPage  === page ? `active ${styles.pageActive}` : `${styles.page} page-item`}> 
                  <button 
                    onClick={() => setCurrentPage(page)} 
                    className = {currentPage  === page ? `${styles.pageActive}` : `page-link ${styles.page}`}
                    aria-current="page"
                  >{page}
                  </button>
                </li>
              )
            })  
          }

          {/* Botón Next */}
          <li>
            <button disabled={currentPage  === (pageNumber.length)} className={styles.anteriorSiguiente} onClick={() => setCurrentPage(currentPage + 1)} >Siguiente</button>
          </li>

        </ul>
      </nav>
    </div>
  )
}