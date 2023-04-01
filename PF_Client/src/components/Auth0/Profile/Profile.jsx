import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavBar } from "../../NavBar/NavBar";
import { Footer } from "../../Footer/Footer";
// chakra
import { Image } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <Spinner color="red.500" size="xl" />;
  }

  return (
    isAuthenticated && (
      <div>
        <NavBar />
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
            <Box marginTop="20px" marginBottom="20px">
              <Image
                borderRadius="full"
                boxSize="300px"
                fallbackSrc="https://res.cloudinary.com/dp9kh0hqs/image/upload/v1680229136/logo_Seam-400x400_gmdbvq.png"
                src={user.picture}
                alt={user.name}
              />
            </Box>
            <Box fontSize="xl" ml="2" px={100} as="h4">
              {/* <img src={user.picture} alt={user.name} /> */}
              <Text as="b" fontSize="3xl">
                Nombre de usuario: {user.nickname}
              </Text>
              <Text></Text>
              <Text>Nombre: {user.name}</Text>
              <Text>Email: {user.email}</Text>
              <Text>Fecha de acimiento: {user.email}</Text>
              <Text>País: {user.email}</Text>
              <Text>Ciudad: {user.email}</Text>
              <Text>Dirección: {user.email}</Text>
            </Box>
          </Box>
        </Box>
      </div>
    )
  );
};

export default Profile;
