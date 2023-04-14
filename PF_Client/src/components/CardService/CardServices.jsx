import React, {useEffect,useState} from 'react';
import styles from './CardServices.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getServices } from '../../redux/actions';
import { CardService } from './CardService/CardService';
import { Paginado } from '../Paginado/Paginado';
import { Loading } from '../Loading/Loading';
import { Filters } from '../../components/Filters/FiltersServices'


export const CardServices = () => {

  // Estado para actualizar la página actual
  const [currentPage, setCurrentPage] = useState(1);

  // Estado de los productos que se muestran por página
  const [servicesPerPage, setServicesPerPage] = useState(8);

  // Para ejecutar las funciones de las actions
  const dispatch = useDispatch();
  
  // Me traigo los estados del reducer 
  let services = useSelector((state) => state.services);

  // Delimitar el indíce de los productos a paginar
  const lastServiceindex = currentPage * servicesPerPage;
  const firstServiceIndex = lastServiceindex - servicesPerPage;
  const currentServices = services.slice(firstServiceIndex, lastServiceindex);

  // Ejecuto en automático la action para obtener la info de la DB y actualizar las card
  useEffect(() => {
  dispatch(getServices());
  }, [])

  return (
    <div>  
         <Filters setCurrentPage={setCurrentPage} />
        <ul className={styles.cardContainer}>
        {
          currentServices.length > 0 ? 
          currentServices.map((el) => {
            return ( 
              <CardService 
                id = {el.id} 
                key = {el.id}
                image = {el.image}
                name = {el.name} 
                price = {el.price}
                description = {el.description}
              />
            )
          }) 
          : <Loading />
        }
        </ul>  
      
      <Paginado 
       totalProducts={services.length}
       productsPerPage={servicesPerPage}
       setCurrentPage={setCurrentPage} 
       currentPage={currentPage} 
      />

    </div>
  )
}
