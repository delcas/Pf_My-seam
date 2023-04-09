import { NavBar } from "../NavBar/NavBar";
import { useAuth0 } from "@auth0/auth0-react";

export const UserList = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <>
      <NavBar isAuthenticated={isAuthenticated} user={user} />
      <h1> Aquí se listarán Todos los Usuarios de la BD</h1>
    </>
  );
};
