import { Route, Routes, useLocation } from 'react-router-dom';
import { Landing } from './views/Landing/Landing';
import { Home } from './views/Home/Home';
import { Create } from './views/Create/Create';
import { CreateService }  from "./views/CreateService/CreateService";
import { Iconos } from "./components/Iconos/Iconos"
import { Promotions } from './components/Carousel/Promotions/Promotions';
import { Login } from './views/Login/Login';
import { ProductDetail } from './views/ProductDetail/ProductDetail'
import { Categories } from './components/Categories/Categories';
import Profile from './components/Auth0/Profile/Profile';
import { Error404 } from './components/Error404/Error404';
import { ServiceDetail } from './views/ServiceDetail/ServiceDetail';
import { Service } from './views/Service/Service';
import { Favourites } from './views/Favourites/Favourites';
import { UserList } from './components/UserList/UserList'
import { useAuth0 } from "@auth0/auth0-react";
import { MercadoPago } from './views/Checkout/MercadoPago'
import { UserProductList } from './components/UserProductList/UserProductList';
import { UserServiceList } from './components/UserServiceList/UserServiceList';
import { Contacto } from './components/Contacto/Contacto';
import { UserDetail } from './components/UserDetail/UserDetail';


function App() {
  const location = useLocation();
  const { isAuthenticated, user } = useAuth0();

  return (
    <Routes>
      <Route exact path = '/' element = {<Landing />}/>
      <Route path = '/home' element = {<Home isAuthenticated={isAuthenticated} user={user} />}/>
      <Route path = '/login' element = {<Login />}/>
      <Route path='/create' element={<Iconos isAuthenticated={isAuthenticated} user={user} />} />
      
      <Route path='/createProduct' element={<Create isAuthenticated={isAuthenticated} user={user} />} />
      <Route path = '/createService' element = {<CreateService isAuthenticated={isAuthenticated} user={user}/>}/>

      <Route path='/productList' element={<UserProductList />} />
      <Route path = '/serviceList' element={<UserServiceList />}/>

      <Route path = '/promotions' element = {<Promotions />}/>
      <Route path = '/categories' element = {<Categories />}/>
      <Route path = '/checkout' element = {<MercadoPago />}/>
      <Route path = '/ProductDetail/:id' element = {<ProductDetail isAuthenticated={isAuthenticated} user={user}/>}/>
      <Route path = '/profile' element = {<Profile isAuthenticated={isAuthenticated} user={user}/>}/> 
      <Route path = '/ServiceDetail/:id' element={<ServiceDetail isAuthenticated={isAuthenticated} user={user} />}/>
      <Route path = '/service' element={<Service />}/>
      <Route path = '/users' element={<UserList />}/>
      <Route path = '/favourites' element={<Favourites />}/>
      <Route path = '/contacto' element = {<Contacto />}/> 
      <Route path = '*' element = {<Error404 />}/> 
      <Route path = '/UserDetail/:id' element={<UserDetail isAuthenticated={isAuthenticated} user={user}/> }/>

    </Routes >
  );
}

export default App;

// {<Create isAuthenticated={isAuthenticated} user={user}/>}/>