import React, { useEffect, useState } from 'react';
import styles from './CardServices.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getServices, getUsers } from '../../redux/actions';
import { CardService } from './CardService/CardService';
import { Paginado } from '../Paginado/Paginado';
import { Loading } from '../Loading/Loading';
import { Filters } from '../../components/Filters/FiltersServices';

export const CardServices = () => {
  // Estado para actualizar la página actual
  const [currentPage, setCurrentPage] = useState(1);

  // Estado de los servicios que se muestran por página
  const [servicesPerPage, setServicesPerPage] = useState(8);

  // Para ejecutar las funciones de las actions
  const dispatch = useDispatch();

  // Me traigo los estados del reducer
  const services = useSelector((state) => state.services);
  const users = useSelector((state) => state.users);

  // Delimitar el índice de los servicios a paginar
  const lastServiceIndex = currentPage * servicesPerPage;
  const firstServiceIndex = lastServiceIndex - servicesPerPage;
  const currentServices = services.slice(firstServiceIndex, lastServiceIndex);

  // Filtrar los servicios publicados por usuarios activos
  const activeUserServices = currentServices.filter((service) => {
    const user = users.find((user) => user.id === service.userid);
    return user && user.isActive;
  });

  // Ejecuto en automático la action para obtener la info de la DB y actualizar las card
  useEffect(() => {
    dispatch(getServices());
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div>
      <Filters setCurrentPage={setCurrentPage} />
      <ul className={styles.cardContainer}>
        {activeUserServices.length > 0 ? (
          activeUserServices.map((el) => {
            return (
              <CardService
                id={el.id}
                key={el.id}
                image={el.image}
                name={el.name}
                price={el.price}
                description={el.description}
              />
            );
          })
        ) : (
          <Loading />
        )}
      </ul>

      <Paginado
        totalProducts={services.length}
        productsPerPage={servicesPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};
