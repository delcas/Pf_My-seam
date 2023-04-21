import React, { useEffect, useState } from 'react'
import styles from './Favourites.module.css'
import { NavBar } from '../../components/NavBar/NavBar'
import { CardProducts } from '../../components/Card/CardProducts/CardProducts'
import { useDispatch, useSelector } from 'react-redux';

export const Favourites = () => {

  const favourites = useSelector(state => state.favourites)
  let allFavourites = useSelector(state => state.allFavourites) 
  const [stateFavourites, setStateFavourites] = useState(favourites)

  useEffect(() => {
    allFavourites > 0 &&
    setStateFavourites(favourites)
  }, [allFavourites])

  return (
    <div>
      <NavBar />
      <h1 className={stateFavourites.length > 0 ? '' : styles.hide}>Mis favoritos</h1>
      <ul className={styles.cardContainer}>
        {stateFavourites.length > 0 ? (
          stateFavourites.map((product) => {
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
          <p>No hay Favoritos</p>
        )}
      </ul>
    </div>
  )
}
