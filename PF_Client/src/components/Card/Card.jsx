import React, { useEffect, useState } from 'react';
import styles from './Card.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, getUsers } from '../../redux/actions';
import { CardProducts } from './CardProducts/CardProducts';
import { Loading } from '../Loading/Loading';
import { Categories } from '../Categories/Categories'
export const Card = () => {
  // Estado para actualizar la página actual
  const [currentPage, setCurrentPage] = useState(1);

  // Estado de los productos que se muestran por página
  const [productsPerPage, setProductsPerPage] = useState(4);

  // Para ejecutar las funciones de las actions
  const dispatch = useDispatch();

  // Me traigo los estados del reducer
  const allProducts = useSelector((state) => state.allProducts);
  const users = useSelector((state) => state.users);

  // Filtrar los usuarios activos
  const activeUsers = users.filter((user) => user.isActive);

  // Delimitar el índice de los productos a paginar
  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProducts = allProducts.slice(firstProductIndex, lastProductIndex);

  const tendencias = allProducts.slice(4, 8);
  const offerProducts = allProducts.slice(9, 13);

  // Ejecuto en automático la action para obtener la info de la DB y actualizar las card
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
      <div>
        <h4 className={currentProducts.length > 0 ? styles.titleSections : styles.hideCards}>Los más vendidos</h4>
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

        <h4 className={tendencias.length > 0 ? styles.titleSections : styles.hideCards}>Tendencias</h4>
        <ul className={styles.cardContainer}>
          {tendencias.length > 0 ? (
            tendencias.map((product) => {
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
            })
          ) : (
            <Loading />
          )}
        </ul>

        <h4 className={offerProducts.length > 0 ? styles.titleSections : styles.hideCards}>También puede interesarte</h4>
        <ul className={styles.cardContainer}>
          {offerProducts.length > 0 ? (
            offerProducts.map((product) => {
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
            })
          ) : (
            <Loading />
          )}
        </ul>

        <div id="categories">
          <Categories />
        </div>

      </div>
    </div>
  );
};