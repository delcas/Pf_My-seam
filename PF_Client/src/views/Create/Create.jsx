import { useState } from "react";
import { NavBar } from '../../components/NavBar/NavBar'
import {
  FormControl,
  Flex,
  FormHelperText,
  Heading,
  FormLabel,
  Input,
  Button,
  Box,
} from "@chakra-ui/react";
import { validate } from "./validate";
import { useDispatch } from "react-redux";
import style from "./Create.module.css"
import axios from "axios"




export const Create = () => {
  
   const url = 'http://localhost:3001';
  
  const [error, setError] = useState({});
   
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: [],
    stock: "",
    
   });

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value })
    setError(validate ({...form, [property]:value}))
  }


  const handleChangeImage = (e) => {

    setForm({
        ...form, [e.target.name] :  [e.target.value]
    })

    setError(validate({
        ...form, [e.target.name]: [e.target.value]
    }))
  };
  

   function handleSubmit(e) {
    if (    error.name !== undefined 
                || error.description !== undefined 
                || error.price !== undefined 
                || error.image !== undefined 
                || error.stock !== undefined 
        )  {
            return alert("Sorry, all fields are required");
        } else if (form.name === "" 
            || form.description === "" 
            || form.price === "" 
            || form.image === ""
            || form.stock?.length === 0
             ) {
                
            return alert("Sorry, all fields are required");
        } else {  
           
      //  console.log(form)
      axios.post(`${url}/product`, form)
      .then(r => console.log(r.data))
            setForm({
                name: '',
                description: '',
                price: '',
                image: [],
                stock: '',
            })
      
    }
     
     
      
  }
  
  return (
    <>
      <NavBar/>
          <Flex height="100vh" alignItems="center" justifyContent="center" >
            <Box  className={style.containerForm}>
          <Heading  textAlign="center" margin-top="10px" color="#ff000" as="h1" fontWeight="400" fontSize="30px" letterSpacing="1px">Agregar Producto</Heading>
              
          <FormControl>
              <FormLabel>Nombre de producto</FormLabel>
              <Input  type="text" placeholder='Ingrese un nombre de producto...' size='md' htmlSize={25} height="20px" width="100%"  
                   value={form.name}
                   onChange={changeHandler}
                   name="name"
              />
            {error ? <FormHelperText color='#f00'>{error.name}</FormHelperText> : null}
          </FormControl>
          <FormControl>
              <FormLabel>Descripcion</FormLabel>
              <Input  type="text" placeholder='Describa su producto...'  size='md' htmlSize={25} height="20px" width="100%" 
                   value={form.description}
                   onChange={changeHandler}
                   name="description"
            />
                 {error ? <FormHelperText color='#f00'>{error.description}</FormHelperText> : null}
          </FormControl>

          <FormControl >
              <FormLabel>Precio</FormLabel>
              <Input  type="text" placeholder='Ingrese un precio...'  size='md' htmlSize={25} height="20px" width="100%" 
                   value={form.price}
                   onChange={changeHandler}
                   name="price"
            />
                 {error ? <FormHelperText color='#f00'>{error.price}</FormHelperText> : null}
               
            </FormControl>
                  
           <FormControl >
              <FormLabel>Imagen</FormLabel>
              <Input  type="text" placeholder='Suba imagenes de su producto...' size='md' htmlSize={25} height="20px" width="100%" 
                   value={form.image}
                   onChange={handleChangeImage}
                   name="image"
            />

             {/* <Button  type="submit" size='lg'  onClick={handleTypes} className={style.btnPrimary} >Agregar imagen</Button> */}
                {error ? <FormHelperText color='#f00'>{error.image}</FormHelperText> : null}
               
            </FormControl>
            
          <FormControl >
              <FormLabel>Stock</FormLabel>
            <Input type="text" placeholder='Ingrese numero de stock del producto...' size='md' htmlSize={25} height="20px" width="100%" 
                   value={form.stock}
                   onChange={changeHandler}
                   name="stock"
                  />
                
               {error ? <FormHelperText color='#f00'>{error.stock}</FormHelperText> : null}
            </FormControl>
             
                  <Button  type="submit" size='lg'  onClick={handleSubmit} className={style.btnPrimary} >Crear producto</Button>
 
                 
                  
          </Box>
         </Flex>
      </>
  )
}

