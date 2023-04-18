import React, { useEffect, useState } from 'react';
import styles from './Card.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, getUsers } from '../../redux/actions';
import { CardProducts } from './CardProducts/CardProducts';
import { Paginado } from '../Paginado/Paginado';
import { Filters } from '../../components/Filters/Filters';
import { Loading } from '../Loading/Loading';

export const Card = () => {
  // Estado para actualizar la página actual
  const [currentPage, setCurrentPage] = useState(1);

  // Estado de los productos que se muestran por página
  const [productsPerPage, setProductsPerPage] = useState(8);

  // Para ejecutar las funciones de las actions
  const dispatch = useDispatch();

  // Me traigo los estados del reducer
  const products = useSelector((state) => state.products);
  const users = useSelector((state) => state.users);

  // Filtrar los usuarios activos
  const activeUsers = users.filter((user) => user.isActive);

  // Delimitar el índice de los productos a paginar
  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProducts = products.slice(firstProductIndex, lastProductIndex);

  // Ejecuto en automático la action para obtener la info de la DB y actualizar las card
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div>
      <Filters setCurrentPage={setCurrentPage} />
      <div>
        <h4 className={currentProducts.length > 0 ? styles.titleSections : styles.hideCards}>Productos destacados</h4>
        <ul className={styles.cardContainer}>
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => {
              // Buscar el usuario asociado al producto
              const user = activeUsers.find((user) => user.id === product.userid);

              // Si el usuario está activo, mostrar el producto
              if (user) {
                return (
                  <CardProducts
                    id={product.id}
                    key={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                  />
                );
              }

              // Si el usuario está inactivo, ignorar el producto
              return null;
            })
          ) : (
            <Loading />
          )}
        </ul>
      </div>
      <Paginado
        totalProducts={products.length}
        productsPerPage={productsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};