import React from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from "../../components/Footer/Footer";
import { Card } from "../../components/Card/Card";
import { BotonIrInicio } from "../../components/BotonIrInicio/BotonIrInicio";
import { Carousel } from "../../components/Carousel/Carousel";
import { Sections } from "../../components/Sections/Sections";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { SectionsAdmin } from "../../components/SectionsAdmin/SectionsAdmin";

export const Home = () => {
  const { isAuthenticated, user } = useAuth0();

  if (isAuthenticated && user["https://example.com/roles"] && user["https://example.com/roles"].includes("admin")){
    
      return (
      <>
        <NavBar />
        <h1>BIENVENIDO ADMINISTRADOR</h1>
        <Link to="/profile">PROFILE</Link>
        <SectionsAdmin />
      </>);
  
  
  } else {
    return (
      <div id="home">
        <NavBar />
        <Carousel />
        <Sections />
        <Card />
        <BotonIrInicio />
        <Footer />
      </div>
    );
  }
};
