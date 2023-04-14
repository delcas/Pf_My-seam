import React, { useState, useEffect } from 'react'
import styles from './Categories.module.css'
import { NavBar } from '../NavBar/NavBar'
import { CardProducts } from '../../components/Card/CardProducts/CardProducts'
import { useDispatch, useSelector } from 'react-redux';
import { filterByPrice, orderByAlphabet, getProducts  } from '../../redux/actions';
// Chakra
import { Button } from '@chakra-ui/react'

export const Categories = () => {
  // Categoría que se muestra en pantalla
  const [category, setCategory] = useState('All')

  // Ejecución de las actions 
  const dispatch = useDispatch()

  // Me traigo los estados del reducer 
  let products = useSelector((state) => state.products);

  // Filtro por Precio
  function handleFilterByPrice(e){
    // e.preventDefault()
    console.log('por precio', e.target.value)
    dispatch(filterByPrice(e.target.value)) 
    setCategory(e.target.value)
    // setCurrentPage(1)
  }

  // Orden Alfabetico
  const handleOrderAlphabet = (e) => {
    dispatch(orderByAlphabet(e.target.value))
    setCategory(e.target.value)
  } 

  // Mostrar todos los productos
  const handleAll = (e) => {
    e.preventDefault();
    dispatch(getProducts())
    setCategory(e.target.value)
  }

  // Ejecuto en automático la action para obtener la info de la DB y actualizar las card
  useEffect(() => {
    dispatch(getProducts());
    }, [])

  return (
    <div>
      <NavBar />
      <div>
        <h1 className={styles.currentCategory}>{category}</h1>
      </div>

      <div className={styles.containerCategories}>
        <Button value='All' onClick={(e) => handleAll(e)} className={styles.buttonCategorie} colorScheme='orange'>All</Button>
        <Button value='a-z' onClick={(e) => handleOrderAlphabet(e)} className={styles.buttonCategorie} colorScheme='orange'>A-Z</Button>
        <Button value='z-a' onClick={(e) => handleOrderAlphabet(e)} className={styles.buttonCategorie} colorScheme='orange'>Z-A</Button>
        <Button value='Hasta $ 100' onClick={(e) => handleFilterByPrice(e)} className={styles.buttonCategorie} colorScheme='orange'>Hasta $100</Button>
        <Button value='$ 100 a $ 500' onClick={(e) => handleFilterByPrice(e)} className={styles.buttonCategorie} colorScheme='orange'>Entre $100-$500</Button>
        <Button value='Mas de $ 500' onClick={(e) => handleFilterByPrice(e)} className={styles.buttonCategorie} colorScheme='orange'>Más de $500</Button>
      </div>

      {/* Cards */}
      <ul className={styles.cardContainer}>
      {
        products.length > 0 ? 
        products.map((el) => {
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
  )
}
