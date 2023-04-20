import { React, useRef, useState} from 'react'
import styles from './Filters.module.css'
import { useDisclosure } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getServices,filterByTypeService,filterByCountry  } from '../../redux/actions';
import { Button, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton,
} from '@chakra-ui/react'


export const Filters = ({ setCurrentPage }) => {
  
  const dispatch = useDispatch()

  // estilos
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  // Me traigo los estados del reducer 
  let services = useSelector((state) => state.services);
  
  // funciones
 

const handleFilterClick = (e) => {
    e.preventDefault();
    dispatch(getServices())
  }

const handleFilterByServices = (e) => {
    dispatch(filterByTypeService(e.target.value));
    setCurrentPage(1)
  };

const handleFilterByCountrys = (e) => {
    dispatch(filterByCountry(e.target.value));
    setCurrentPage(1)
};

// const OptionsRender = ()=> {

// }

  return (
    <div className={services.length > 0 ? `${styles.containerFilters} filtrado` : styles.hideFilters}>
      <Button className={styles.buttonFilters} ref={btnRef} colorScheme='teal' onClick={onOpen} mt='20px' ml='35px'>
        Filtrar servicios
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>Filtrar Servicios</DrawerHeader>
        <DrawerBody>
          
            <div>

              <div onChange={(e) => handleFilterByServices(e)}>
                <label>Por tipo de servicio</label>
                <br />
                <select>
                  {/* {OptionsRender} */}
                 <option value='Todos'>Todos</option>
                 <option value='Arreglos'>Arreglos</option>
                 <option value='Confección'>Confección</option>
                 <option value='Bordado'>Bordado</option>
                 <option value='Decoración'>Decoración</option>               
                </select>
            </div>
             
            <div>
               <label>Por paises</label>
               <br />
              <select onChange={(e) => handleFilterByCountrys(e)}> 
                  {/* {OptionsRender} */}
               <option value="All">Todos</option>
               <option value='Argentina'>Argentina</option>
               <option value='Bolivia'>Bolivia</option>
               <option value='Chile'>Chile</option>
               <option value='Brasil'>Brasil</option>
               <option value='Colombia'>Colombia</option>
               <option value='Uruguay'>Uruguay</option>
               <option value='Peru'>Peru</option>
               <option value='Mexico'>Mexico</option>
               <option value='Venezuela'>Venezuela</option>
                                  
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
