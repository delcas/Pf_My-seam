import { React, useRef} from 'react'
import styles from './Filters.module.css'
import { useDisclosure } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { filterByPrice,orderByAlphabet,getProducts  } from '../../redux/actions';
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
              <option value='none'>-</option>
              <option value='Hasta $ 100'>Hasta $ 100</option>
              <option value='$ 100 a $ 500'>$ 100 a $ 500</option>
              <option value='Mas de $ 500'>Mas de $ 500</option>
            </select>
        {/* <button className='borrar-filtro'>X</button> */}
            </div>
            
            <div onChange={(e) => handleChange(e)}>
              <label>Por orden alfabetico</label>
              <br />
            <select> 
            <option value="reset">-</option>
            <option value='a-z'>A - Z</option>
            <option value='z-a'>Z - A</option>
          </select>
            </div>
            
            <div>

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
