import { useState, useEffect } from "react";
import { NavBar } from "../../components/NavBar/NavBar";
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

import { supabase } from "../../components/Config/configSupabase";
import { v4 as uuidv4 } from "uuid";

import { validate } from "./validate";
import style from "./Create.module.css";
import axios from "axios";
import { useSelector } from "react-redux";

const CDNURL =
  "https://tpmrrlpsabqmegwwsqlk.supabase.co/storage/v1/object/public/myseam/";

export const Create = ({ isAuthenticated, user }) => {
  const userInfo = useSelector((state) => state.userInfo);
  const url = "http://localhost:3001";

  const [showAlert, setShowAlert] = useState(false);

  const [camposVacios, setCamposVacios] = useState(false);

  const [error, setError] = useState({});

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: [],
    stock: "",
    gender: "",
    category:"",
    userid: userInfo.id,
  });

  const [image, setImage] = useState({});

  const [send, setSend] = useState({});

  const URL_SERVER = "http://localhost:3001";

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
    setError(validate({ ...form, [property]: value }));
  };

  const handleChangeImage = async (e) => {
    setImage(e.target.files[0]);
  };

  /////////////////////////
  async function uploadFile() {
    const imageFile = image;
    const filename = `${uuidv4()}-${imageFile.name}`;

    const { data, error } = await supabase.storage
      .from("myseam")
      .upload(filename, imageFile, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      console.log(error);
      alert("Error al cargar la imagen");
    }

    getImages();
    
    return CDNURL + data.path;
  }

  async function getImages() {
    const { data, error } = await supabase.storage.from("myseam").list("");
    
    if (data !== null) {
      setImage(data);
    } else {
      console.log(error);
      alert("Error al traer las imagenes");
    }
  }

  useEffect(() => {
    //algo
    console.log("random");
  }, [image]);

  useEffect(() => {
    //getImages();
    if (Object.keys(send).length > 0) {
      // revisa si send esta vacio
      axios
        .post(`${URL_SERVER}/product`, send)
        .then((r) => console.log(r.data))
        .catch((err) => console.log(err));
    } else {
      return;
    }
  }, [send]);

  ////////////////////////
  // 1 - crear un estado nuevo.
  // 2 - copiar en ese estado lo que subo a form  y dsp hacer el post.
  //  3 - en el boton de img que seleccione varias.

  /////////////////////////
  //descomentar cuando se solucione el bug
  async function handleSubmit(e) {
    e.preventDefault();
    if (!userInfo.id)
      return alert("Por favor, registrese para publicar un producto");
    if (
      error.name !== undefined ||
      error.description !== undefined ||
      error.price !== undefined ||
      error.stock !== undefined ||
      error.gender !== undefined ||
      error.category !== undefined 
    ) {
      return setCamposVacios(true);
    } else if (
      form.name === "" ||
      form.description === "" ||
      form.price === "" ||
      form.stock?.length === 0 ||
      form.gender?.length === 0 ||
      form.category?.length === 0
    ) {
      return setCamposVacios(true);
    } else {
      const url = await uploadFile();
      console.log(url);
      //unica instancia en la que cambia send
      setSend({ ...form, image: [...form.image, url] });
      setForm({
        name: "",
        description: "",
        price: "",
        image: [],
        stock: "",
        gender: "",
        category: "",
      });
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
            Agregar Producto
          </Heading>

          <FormControl>
            <FormLabel>Nombre de producto</FormLabel>
            <Input
              type="text"
              placeholder="Ingrese un nombre de producto..."
              size="md"
              htmlSize={25}
              height="20px"
              width="100%"
              value={form.name}
              onChange={changeHandler}
              name="name"
            />
            {error ? (
              <FormHelperText color="#f00">{error.name}</FormHelperText>
            ) : null}
          </FormControl>
          <FormControl>
            <FormLabel>Descripcion</FormLabel>
            <Input
              type="text"
              placeholder="Describa su producto..."
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
            <FormLabel>Precio</FormLabel>
            <Input
              type="text"
              placeholder="Ingrese un precio..."
              size="md"
              htmlSize={25}
              height="20px"
              width="100%"
              value={form.price}
              onChange={changeHandler}
              name="price"
            />
            {error ? (
              <FormHelperText color="#f00">{error.price}</FormHelperText>
            ) : null}
          </FormControl>
          
          <FormControl>
            <FormLabel>Categorias</FormLabel>
            <Select
              placeholder="Seleccione una categoria..."
              size="md"
              height="20px"
              width="100%"
              value={form.category}
              onChange={changeHandler}
              name="category"
            >
              <option value="Blusas" >Blusas</option>
              <option value="Vestidos" >Vestidos</option>
              <option value="Faldas" >Faldas</option>
              <option value="Buzos" >Buzos</option>
              <option value="Camperas" >Camperas</option>
              <option value="Pantalones" >Pantalones</option>
              <option value="Remeras" >Remeras</option>
              <option value="Bermudas" >Bermudas</option>
              <option value="Sweaters" >Sweaters</option>
              <option value="Camisas" >Camisas</option>
              <option value="Musculosas" >Musculosas</option>
              
            </Select>

            {error ? (
              <FormHelperText color="#f00">{error.category}</FormHelperText>
            ) : null}
           </FormControl>

           <FormControl>
            <FormLabel>Ropa de :</FormLabel>
            <Select
              placeholder="Seleccione una opcion..."
              size="md"
              height="20px"
              width="100%"
              value={form.gender}
              onChange={changeHandler}
              name="gender"
            >
              <option value="Mujer" >Mujer</option>
              <option value="Hombre" >Hombre</option>
              <option value="Niño" >Niño</option>
              <option value="Niña" >Niña</option>
              
            </Select>

            {error ? (
              <FormHelperText color="#f00">{error.gender}</FormHelperText>
            ) : null}
           </FormControl>



          <FormControl>
            <FormLabel>Seleccionar imagen</FormLabel>
            <Input
              type="file"
              accept="image/*"
              placeholder="Suba imagenes de su producto..."
              size="md"
              htmlSize={25}
              height="32px"
              width="100%"
              onChange={handleChangeImage}
              name="image"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Stock</FormLabel>
            <Input
              type="text"
              placeholder="Ingrese numero de stock del producto..."
              size="md"
              htmlSize={25}
              height="20px"
              width="100%"
              value={form.stock}
              onChange={changeHandler}
              name="stock"
            />

            {error ? (
              <FormHelperText color="#f00">{error.stock}</FormHelperText>
            ) : null}
          </FormControl>

          <Button
            type="submit"
            size="lg"
            onClick={handleSubmit}
            className={style.btnPrimary}
          >
            Crear producto
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
                Producto creado con exito!
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
                Para publicar un producto debes llenar todos los datos!
              </AlertDescription>
            </Alert>
          )}
        </Box>
      </Flex>
    </>
  );
};
