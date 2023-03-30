import React, {useEffect,useState} from 'react';
import styles from './Card.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions';
import { CardProducts } from './CardProducts/CardProducts';
import { Paginado } from '../Paginado/Paginado';
import { Filters } from '../../components/Filters/Filters'


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
  const currentProducts = products.slice(firstProductIndex, lastProductIndex);

  // Ejecuto en automático la action para obtener la info de la DB y actualizar las card
  useEffect(() => {
  dispatch(getProducts());
  }, [])

  return (
    <div>  
      <Filters setCurrentPage={setCurrentPage} />
      <div><h4 className={currentProducts.length > 0 ? styles.titleSections : styles.hideCards}>Productos destacados</h4>
        
        <ul className={styles.cardContainer}>
        {
          currentProducts.length > 0 ? 
          currentProducts.map((el) => {
            return ( 
              <CardProducts 
                id = {el.id} 
                key = {el.id}
                image = {el.image}
                name = {el.name} 
                price = {el.price}
                description = {el.description}
              />
            )
          }) 
          : <span className={styles.loader}></span>
        }
        </ul>  
      </div>
      <Paginado 
       totalProducts={products.length}
       productsPerPage={productsPerPage}
       setCurrentPage={setCurrentPage} 
       currentPage={currentPage} 
      />

    </div>
  )
}
