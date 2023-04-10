import { NavBar } from "../NavBar/NavBar";
import { useAuth0 } from "@auth0/auth0-react";
import { Footer } from '../../components/Footer/Footer'
import { BotonIrInicio } from '../../components/BotonIrInicio/BotonIrInicio'
import { CardUsers } from '../../components/CardUser/CardUsers'

export const UserList = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <>
      <NavBar isAuthenticated={isAuthenticated} user={user} />

              <CardUsers/>
              <BotonIrInicio />
              <Footer />
    </>
  );
};
