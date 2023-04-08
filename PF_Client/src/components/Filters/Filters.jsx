import { React, useRef} from 'react'
import styles from './Filters.module.css'
import { useDisclosure } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { filterByPrice,orderByAlphabet,getProducts,filterByCategory,filterByGender  } from '../../redux/actions';
import { Button, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton,
        } from '@chakra-ui/react'

export const Filters = ({ setCurrentPage }) => {

  const dispatch = useDispatch()

  // estilos
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  // Me traigo los estados del reducer 
  let products = useSelector((state) => state.products);
  
  // funciones
  function handleFilterByPrice(e){
    // e.preventDefault()
    console.log('por precio', e.target.value)
    dispatch(filterByPrice(e.target.value)) 
    setCurrentPage(1)
  }

  const handleChange = (e) => {
    dispatch(orderByAlphabet(e.target.value))
    setCurrentPage(1)
  } 

const handleFilterClick = (e) => {
    e.preventDefault();
    dispatch(getProducts())
  }

  const handleFilterByCategory = (e) => {
    const category = e.target.value;
    dispatch(filterByCategory(category));
    setCurrentPage(1)
};

  const handleFilterByGender = (e) => {
    const gender = e.target.value;
    dispatch(filterByGender(gender));
    setCurrentPage(1)
};

  return (
    <div className={products.length > 0 ? `${styles.containerFilters} filtrado` : styles.hideFilters}>
      <Button className={styles.buttonFilters} ref={btnRef} colorScheme='teal' onClick={onOpen} mt='20px' ml='35px'>
        Filtrar productos
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>Filtra Productos</DrawerHeader>
        <DrawerBody>
          <div className='precio' onChange={(e) => handleFilterByPrice(e)} >
            <label>Por Precio</label>
            <br></br>
            <select>
              <option value='none'>Todos</option>
              <option value='Hasta $ 100'>Hasta $ 100</option>
              <option value='$ 100 a $ 500'>$ 100 a $ 500</option>
              <option value='Mas de $ 500'>Mas de $ 500</option>
            </select>
        {/* <button className='borrar-filtro'>X</button> */}
            </div>
            
            <div>
              <label>Por orden alfabetico</label>
              <br />
            <select onChange={(e) => handleChange(e)}> 
              <option value="reset">Todos</option>
              <option value='a-z'>A - Z</option>
              <option value='z-a'>Z - A</option>
            </select>
            </div>
            
            <div>

              <div>
                <label>Por categorias</label>
                <br />
                <select onChange={(e) => handleFilterByCategory(e)}>
                 <option value='All'>Todos</option>
                 <option value='Blusas'>Blusas</option>
                 <option value='Vestidos'>Vestidos</option>
                 <option value='Faldas'>Faldas</option>
                 <option value='Buzos'>Buzos</option>
                 <option value='Camperas'>Camperas</option>
                 <option value='Pantalones'>Pantalones</option>
                 <option value='Remeras'>Remeras</option>
                 <option value='Bermudas'>Bermudas</option>
                 <option value='Sweaters'>Sweaters</option>
                 <option value='Camisas'>Camisas</option>
                 <option value='Musculosas'>Musculosas</option>
                </select>
            </div>
             
            <div>
               <label>Por genero</label>
               <br />
              <select onChange={(e) => handleFilterByGender(e)}> 
               <option value="All">Todos</option>
               <option value='Hombre'>Hombre</option>
               <option value='Mujer'>Mujer</option>
               <option value='Niño'>Niño</option>
               <option value='Niña'>Niña</option>
              </select>
            </div>


              <br />
              <Button onClick={e => { handleFilterClick(e) }} variant='outline' mr={3} >Limpiar filtros</Button>
            </div>
      </DrawerBody>
      <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              X
            </Button>
            {/* <Button colorScheme='blue'>Save</Button> */}
          </DrawerFooter>
      </DrawerContent>
      </Drawer>

    </div>
  )
}
