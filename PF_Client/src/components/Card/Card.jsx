import React, {useEffect, useState} from 'react';
import styles from './Card.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions';
import { CardProducts } from './CardProducts/CardProducts';
import { Pagination } from '../Pagination/Pagination';

export const Card = () => {

    // Estado para actualizar la página actual
    const [currentPage, setCurrentPage] = useState(1);

    // Estado de los productos que se muestran por página
    const [productsPerPage, setProductsPerPage] = useState(8);

    // Para ejecutar las funciones de las actions
    const dispatch = useDispatch();
    
    // Me traigo los estados del reducer 
    let products = useSelector((state) => state.products);

    // Delimitar el indíce de los productos a paginar
    const lastProductIndex = currentPage * productsPerPage;
    const firstProductIndex = lastProductIndex - productsPerPage;
    const  currentProducts = products.slice(firstProductIndex, lastProductIndex);

  // Ejecuto en automático la action para obtener la info de la DB y actualizar las card
  useEffect(() => {
  dispatch(getProducts());
  }, [dispatch])

  return (
    <div>
      <ul className={styles.cardContainer}>

      {
        currentProducts.length > 0 ? 
        currentProducts.map((el) => {
          return ( 
            <CardProducts el={el} key={el.id} />
          )
        }) 
        : <span className={styles.loader}></span>
       }

      </ul>  
       <Pagination 
       totalProducts={products.length}
       productsPerPage={productsPerPage}
       setCurrentPage={setCurrentPage} 
       currentPage={currentPage} />
    </div>
  )
}
