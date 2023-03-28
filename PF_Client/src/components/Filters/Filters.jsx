import { React, useRef} from 'react'
import { useDisclosure } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { filterByPrice } from '../../Redux/actions';
import { Button, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton,
        } from '@chakra-ui/react'

export const Filters = () => {

  const dispatch = useDispatch()

  // estilos
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  
  // funciones
  function handleFilterByPrice(e){
    // e.preventDefault()
    console.log('por precio', e.target.value)
    dispatch(filterByPrice(e.target.value)) 
    // setCurrentPage(1)
  }


  return (
    <div className='filtrado'>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen} mt='20px' ml='35px'>
        Filtros
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
