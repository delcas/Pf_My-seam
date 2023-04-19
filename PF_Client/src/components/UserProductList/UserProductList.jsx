import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { useAuth0 } from "@auth0/auth0-react";
import { Footer } from "../../components/Footer/Footer";
import { BotonIrInicio } from "../../components/BotonIrInicio/BotonIrInicio";
import { Card } from "../../components/Card/Card"; 
import { Error404 } from "../Error404/Error404"

export const UserProductList = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);

   if (isAuthenticated && (user["https://example.com/roles"].includes("admin"))) {
    return (
      <>
        <NavBar isAuthenticated={isAuthenticated} user={user} />

        <Card />
        <BotonIrInicio />
        <Footer />
      </>
    );
  } else {
    return (
      <Error404 />
    )
  }
};