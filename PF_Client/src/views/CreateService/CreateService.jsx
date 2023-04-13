import React from 'react'
import { useState } from 'react';
import { NavBar } from "../../components/NavBar/NavBar";
import style from "./CreateService.module.css";
import {
  FormControl,
  Flex,
  FormHelperText,
  Heading,
  FormLabel,
  Input,
  Button,
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Select,
} from "@chakra-ui/react";

import { validate } from "./validateService";
import axios from "axios";

export const CreateService = () => {

   const url = "http://localhost:3001";

   const [showAlert, setShowAlert] = useState(false);

   const [camposVacios, setCamposVacios] = useState(false);


   const [error, setError] = useState({});
   
   const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    number: "",
    email: "",
    country: "",
    city: "",
   });
  

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value })
    setError(validate ({...form, [property]: value}))
 }

   // console.log(form)
  
  function handleSubmit(e) {
    e.preventDefault()
    console.log(form)
    if (    error.name !== undefined 
                || error.price !== undefined 
                || error.description !== undefined 
                || error.number !== undefined 
                || error.email !== undefined 
                || error.country !== undefined 
                || error.city !== undefined 
    ) {
            return setCamposVacios(true);
        } else if ( 
              form.price === "" 
            || form.description === "" 
            || form.number === ""
            || form.email === ""
            || form.country === ""  
            || form.city === "" 
      
             ) {
                
            return setCamposVacios(true);
        }
  //   const errors = validate(form);

  // if (Object.keys(errors).length > 0) {
  //   setError(errors);
  //   setCamposVacios(true);
    //  } 
    else {  
           
      axios.post(`${url}/service`, form)
      .then(r => console.log(r.data))
            setForm({
                name: "",
                price: "",
                description: "",
                number: "",
                email: "",
                country: "",
                city: "",
            })
      setShowAlert(true);
      setCamposVacios(false);
    }
   
  }

  return (
    <>
      <NavBar />
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Box className={style.containerForm}>
          <Heading
            textAlign="center"
            margin-top="10px"
            color="#ff000"
            as="h1"
            fontWeight="400"
            fontSize="30px"
            letterSpacing="1px"
          >
            Agregar Servicio
          </Heading>

           <FormControl>
            <FormLabel>Servicios</FormLabel>
            <Select
              placeholder="Seleccione un servicio..."
              size="md"
              height="20px"
              width="100%"
              value={form.name}
              onChange={changeHandler}
              name="name"
            >
              <option value="Todos" >Todos</option>
              <option value="Arreglo de ropa" >Arreglo de ropa</option>
              <option value="Confección de ropa" >Confección de ropa</option>
              <option value="Bordado" >Bordado</option>
              <option value="Decoración de ropa" >Decoración de ropa</option>
              
            </Select>

            {error ? (
              <FormHelperText color="#f00">{error.name}</FormHelperText>
            ) : null}
           </FormControl>
          
          <FormControl>
            <FormLabel>Precio</FormLabel>
            <Select
              placeholder="Seleccione un precio..."
              size="md"
              height="20px"
              width="100%"
              value={form.price}
              onChange={changeHandler}
              name="price"
            >
            
              <option value="A convenir" >A convenir</option>
              <option value="Negociable" >Negociable</option>
              
            </Select>
            {error ? (
              <FormHelperText color="#f00">{error.price}</FormHelperText>
            ) : null}
          </FormControl>

          <FormControl>
            <FormLabel>Descripcion</FormLabel>
            <Input
              type="text"
              placeholder="Describa su servicio o experiencia..."
              size="md"
              htmlSize={25}
              height="20px"
              width="100%"
              value={form.description}
              onChange={changeHandler}
              name="description"
            />
            {error ? (
              <FormHelperText color="#f00">{error.description}</FormHelperText>
            ) : null}
          </FormControl>

          
          <FormControl>
            <FormLabel>Numero telefonico</FormLabel>
            <Input
              type="text"
              placeholder="Ingrese su numero de telefono..."
              size="md"
              htmlSize={25}
              height="20px"
              width="100%"
              value={form.number}
              onChange={changeHandler}
              name="number"
            />
            {error ? (
              <FormHelperText color="#f00">{error.number}</FormHelperText>
            ) : null}
          </FormControl>

          <FormControl>
            <FormLabel>Ingrese su correo electronico</FormLabel>
            <Input
              type="text"
              placeholder="Ingrese su direccion email..."
              size="md"
              htmlSize={25}
              height="20px"
              width="100%"
              value={form.email}
              onChange={changeHandler}
              name="email"
            />
            {error ? (
              <FormHelperText color="#f00">{error.email}</FormHelperText>
            ) : null}
          </FormControl>

          
         <FormControl>
            <FormLabel>Pais</FormLabel>
            <Input
              type="text"
              placeholder="Ingrese el pais donde reside..."
              size="md"
              htmlSize={25}
              height="20px"
              width="100%"
              value={form.country}
              onChange={changeHandler}
              name="country"
            />
            {error ? (
              <FormHelperText color="#f00">{error.country}</FormHelperText>
            ) : null}
          </FormControl>

          <FormControl>
            <FormLabel>Ciudad</FormLabel>
            <Input
              type="text"
              placeholder="Ingrese la ciudad donde reside..."
              size="md"
              htmlSize={25}
              height="20px"
              width="100%"
              value={form.city}
              onChange={changeHandler}
              name="city"
            />

            {error ? (
              <FormHelperText color="#f00">{error.city}</FormHelperText>
            ) : null}
          </FormControl>

          <Button
            type="submit"
            size="lg"
            onClick={handleSubmit}
            className={style.btnPrimary}
          >
            Publicar servicio
          </Button>

          {showAlert && (
            <Alert
              status="success"
              variant="subtle"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              height="200px"
            >
              <AlertIcon boxSize="40px" mr={0} />
              <AlertTitle mt={4} mb={1} fontSize="lg">
                Servicio publicado con exito!
              </AlertTitle>
              <AlertDescription maxWidth="sm">
                My seam te desea exitos con tus ventas ♥!
              </AlertDescription>
            </Alert>
          )}

          {camposVacios && (
            <Alert
              status="error"
              variant="subtle"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              height="auto"
            >
              <AlertIcon boxSize="40px" mr={0} />
              <AlertTitle mt={4} mb={1} fontSize="lg">
                Todos los campos son requeridos!
              </AlertTitle>
              <AlertDescription maxWidth="sm">
                Para publicar un servicio debes llenar todos los datos!
              </AlertDescription>
            </Alert>
          )}
        </Box>
      </Flex>
    </>
  )
}
