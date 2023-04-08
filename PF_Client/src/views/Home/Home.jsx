import React from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from "../../components/Footer/Footer";
import { Card } from "../../components/Card/Card";
import { BotonIrInicio } from "../../components/BotonIrInicio/BotonIrInicio";
import { Carousel } from "../../components/Carousel/Carousel";
import { Sections } from "../../components/Sections/Sections";
import { useDispatch, useSelector } from "react-redux";
import { getUserByEmail } from "../../redux/actions";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

export const Home = () => {
  const { isAuthenticated, user } = useAuth0();

  if (isAuthenticated && (user["https://example.com/roles"].includes("admin"))){
    
      return (
      <>
       <NavBar isAuthenticated={isAuthenticated} user={user} />
      <h1>BIENVENIDO ADMINISTRADOR</h1>
      <Link to="/profile">PROFILE</Link>
      {/* <NavBar isAuthenticated={isAuthenticated} user={user} /> */}
      </>);
  
  
  } else {
    return (
      <div id="home">
        <NavBar isAuthenticated={isAuthenticated} user={user} />
        <Carousel />
        <Sections />
        <div id="card">
          <Card />
        </div>
        <BotonIrInicio />
        <Footer />
      </div>
    );
  }
};
