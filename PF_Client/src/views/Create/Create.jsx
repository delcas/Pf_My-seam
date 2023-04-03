import { useState, useEffect } from "react";
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
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

import { supabase } from "../../components/Config/configSupabase";
import { v4 as uuidv4 } from "uuid";

import { validate } from "./validate";
import style from "./Create.module.css"
import axios from "axios"

const CDNURL = "https://tpmrrlpsabqmegwwsqlk.supabase.co/storage/v1/object/public/myseam/";


export const Create = () => {
  
  const [images, setImages] = useState([]);



  const url = 'http://localhost:3001';
  
  const [showAlert, setShowAlert] = useState(false)
  
  const [camposVacios, setCamposVacios] = useState(false);
  
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


  const handleChangeImage = async (e) => {
     //  e.target.files.forEach((e) => setImages({...images, image}))
     // const url = await uploadFile()
     //  console.log(url)
     // setForm({ ...form, image: [...form.image,url] })
    
     // setImages(e.target.files[0])    // Pushear todo a mi state .
    // console.log(e.target.files)
    // console.log(images)
    // uploadFile()

      const uploadedImageUrl = await uploadFile(setImages(e.target.files[0]))
      setForm({ ...form, image: [...form.image, uploadedImageUrl] })
    
    
  };
  
  /////////////////////////
  async function uploadFile() {
    const imageFile = images;
    const filename = `${uuidv4()}-${imageFile.name}`;

    const { data, error } = await supabase.storage
      .from("myseam")
      .upload(filename, imageFile, {
        cacheControl: "3600",
        upsert: false
      })
   
    if (error) {
      console.log(error);
      alert("Error al cargar la imagen")
    }
  
      getImages()
    // setImages(e.target.files[0]) 
     return CDNURL + data.path
    
  }

  async function getImages() {
    const { data, error } = await supabase
    .storage
    .from("myseam")
    .list("")
    // data : [image1,image2,image,etc]
    // image1: "naruto.jpg"
    if (data !== null) {
      setImages(data)
    } else {
       console.log(error);
      alert("Error al traer las imagenes")
    }
  }
   
  useEffect(() => {
    getImages()
  },[])

 
  ////////////////////////
 // 1 - crear un estado nuevo.
 // 2 - copiar en ese estado lo que subo a form  y dsp hacer el post.
//  3 - en el boton de img que seleccione varias.
  console.log(form)
 ///////////////////////// 
 async function handleSubmit(e) {
   e.preventDefault();
    //const url = await uploadFile()
  console.log(url)
  // setForm({ ...form, image: [...form.image,url] }) // se actualiza el estado de "form" con la nueva URL de la imagen subida
  setForm({
    name: '',
    description: '',
    price: '',
    image: [],
    stock: '',
  })
  
  
    // if (    error.name !== undefined 
    //             || error.description !== undefined 
    //             || error.price !== undefined    
    //             || error.stock !== undefined 
    //     )  {
    //         return setCamposVacios(true);
    //     } else if (form.name === "" 
    //         || form.description === "" 
    //         || form.price === ""     
    //         || form.stock?.length === 0
    //          ) {
                
    //         return setCamposVacios(true);
    //     } else {  
    //   // uploadFile()
    //   //  console.log(form)
    //   axios.post(`${url}/product`, form)
    //   .then(r => console.log(r.data))
    //         setForm({
    //             name: '',
    //             description: '',
    //             price: '',
    //             image: [],
    //             stock: '',
    //         })
      
    //   setShowAlert(true)
    //   setCamposVacios(false)
    // }
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
          

            {/* <FormControl>
              <FormLabel>Imagen</FormLabel>
              <Input  type="text" placeholder='Suba imagenes de su producto...' size='md' htmlSize={25} height="20px" width="100%" 
              value={form.image}
              onChange={handleChangeImage}
              name="image"
              />
              
            {error ? <FormHelperText color='#f00'>{error.image}</FormHelperText> : null}
      
           </FormControl> */}
            
      

            
            <FormControl>
              <FormLabel>Seleccionar imagen</FormLabel>
              <Input type="file" accept="image/*" placeholder='Suba imagenes de su producto...' size='md' htmlSize={25} height="32px" width="100%" 
              onChange={handleChangeImage}
              name="image"
            
          
            /> 
                
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
               
          {showAlert && (
            <Alert
                 status='success'
                 variant='subtle'
                 flexDirection='column'
                 alignItems='center'
                 justifyContent='center'
                 textAlign='center'
                 height='200px'
               >
                  <AlertIcon boxSize='40px' mr={0} />
               <AlertTitle mt={4} mb={1} fontSize='lg'>
                  Producto creado con exito!
                 </AlertTitle>
                <AlertDescription maxWidth='sm'>
                      My seam te desea exitos con tus ventas ♥!
                </AlertDescription>
                 </Alert>
                  
           )}       
          
            {camposVacios &&  (
            <Alert
                 status='error'
                 variant='subtle'
                 flexDirection='column'
                 alignItems='center'
                 justifyContent='center'
                 textAlign='center'
                 height='auto'
               >
                  <AlertIcon boxSize='40px' mr={0} />
               <AlertTitle mt={4} mb={1} fontSize='lg'>
                  Todos los campos son requeridos!
                 </AlertTitle>
                <AlertDescription maxWidth='sm'>
                      Para publicar un producto debes llenar todos los datos!
                </AlertDescription>
                 </Alert>
                  
                )}       

          
          </Box>
         </Flex>
      </>
  )
}