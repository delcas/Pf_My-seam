import React from 'react';
import styles from './Pagination.module.css';


export const Pagination = ({totalProducts,productsPerPage, setCurrentPage,currentPage }) => {

  // Agregar el número de páginas de acuerdo a los productos que hay en la DB
  const pageNumber = []
  for (let i = 1; i <= Math.ceil(totalProducts/productsPerPage); i++) {
    pageNumber.push(i)
  }

  return (
    <div className={totalProducts > 0 ? styles.containerPaginate : styles.hidePaginate}>
      <nav className="d-flex justify-content-center" aria-label="...">
        <ul className="pagination flex-wrap  mt-4">

          {/* Botón Previous */}
          <li className= {currentPage  === 1 ? "page-item disabled" : "page-item"}>
            <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)} >Previous</button>
          </li> 

          {/* Numeración del paginado */}
          {
            pageNumber &&  
            pageNumber.map((page,index) => {
              return (
                <li 
                  key={index} 
                  className= {currentPage  === page ? "page-item active" : "page-item"}> 
                  <button 
                    onClick={() => setCurrentPage(page)} 
                    className = "page-link"
                    aria-current="page"
                  >{page}
                  </button>
                </li>
              )
            })  
          }

          {/* Botón Next */}
          <li className= {totalProducts < 8 || currentPage  === 4 ? "page-item disabled" : "page-item"}>
            <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)} >Next</button>
          </li>

        </ul>
      </nav>
    </div>
  )
}