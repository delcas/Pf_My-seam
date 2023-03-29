import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavBar } from '../../NavBar/NavBar'

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <NavBar />
        <img src={user.picture} alt={user.name} />
        <h2>Nombre: {user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Nombre de usuario: {user.nickname}</p>
      </div>
    )
  );
};

export default Profile;
