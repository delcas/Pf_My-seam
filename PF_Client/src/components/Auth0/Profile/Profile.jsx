import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavBar } from "../../NavBar/NavBar";
import { Footer } from "../../Footer/Footer";
// chakra
import { Image } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getUserByEmail } from "../../../redux/actions";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const myState = JSON.parse(localStorage.getItem('myState'));
  const userInfo = useSelector((state)=>state.userInfo);
  const [form, setForm]= useState({
      username: myState.username,
      name: myState.name,
      email: myState.email,
      birthdate: myState.birthdate,
      country: myState.country,
      city: myState.city,
      address: myState.address,
      image: myState.image
  })

  console.log(userInfo);

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    await axios
      .put(`/users/${userInfo.id}`, form)
      .then((res) => alert(res))
      .catch((err) => alert(err));

    setForm({
      username: userInfo.username,
      name: userInfo.name,
      email: userInfo.email,
      birthdate: userInfo.birthdate,
      country: userInfo.country,
      city: userInfo.city,
      address: userInfo.address,
      image: userInfo.image
    });
    
      dispatch(getUserByEmail(user.email));
      window.location.reload();
  };

  if (isLoading) {
    return <Spinner color="red.500" size="xl" />;
  }

  return (
    isAuthenticated && (
      <div>
        <NavBar isAuthenticated={isAuthenticated} user={user}/>
        <Box>
          <Box
            borderWidth="3px"
            borderRadius="100px"
            px={40}
            display="flex"
            fontWeight="semibold"
            letterSpacing="wide"
            alignItems="center"
            margin="50px"
            // alignItems="baseline"
          >

          <form onSubmit={submitHandler}>

            <Box marginTop="20px" marginBottom="20px">
              <Image
                borderRadius="full"
                boxSize="300px"
                fallbackSrc="https://res.cloudinary.com/dp9kh0hqs/image/upload/v1680229136/logo_Seam-400x400_gmdbvq.png"
                src={form.image}
                alt={form.name}
              />
            </Box>
            <Box fontSize="xl" ml="2" px={100} as="h4">
              {/* <img src={user.picture} alt={user.name} /> */}

              <label>Nombre de usuario: </label>
              <input type="text" value={form.username} onChange={(e) => {
                changeHandler(e);
              }} size="50" name="username"
              placeholder="*Add a username..."
            />

              {/* <Text as="b" fontSize="3xl">
                Nombre de usuario: {userInfo.username}
              </Text> */}
              <Text></Text>
              <Text>Nombre: {form.name}</Text>
              <Text>Email: {form.email}</Text>
              {/* <Text>Fecha de nacimiento: {form.birthdate}</Text> */}
              <label>Fecha de nacimiento: </label>
              <input type="text" value={form.birthdate} onChange={(e) => {
                changeHandler(e);
              }} size="50" name="birthdate"
              placeholder="...🖊"
            />
              {/* <Text>País: {form.country}</Text> */}
              <label>País: </label>
              <input type="text" value={form.country} onChange={(e) => {
                changeHandler(e);
              }} size="50" name="country"
              placeholder="...🖊"/>
              {/* <Text>Ciudad: {form.city}</Text> */}
              <label>Ciudad: </label>
              <input type="text" value={form.city} onChange={(e) => {
                changeHandler(e);
              }} size="50" name="city"
              placeholder="...🖊"/>
              {/* <Text>Dirección: {form.address}</Text> */}
              <label>Dirección: </label>
              <input type="text" value={form.address} onChange={(e) => {
                changeHandler(e);
              }} size="50" name="address"
              placeholder="...🖊"/>
            </Box>

            <button type="submit">Actualizar Info✔</button>

          </form>
          </Box>
        </Box>
      </div>
    )
  );
};

export default Profile;
