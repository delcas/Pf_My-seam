import axios from 'axios';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Landing } from './views/Landing/Landing';
import { Home } from './views/Home/Home';
import { Create } from './views/Create/Create';
import { Promotions } from './components/Carousel/Promotions/Promotions';
import { Login } from './views/Login/Login';
import { ProductDetail } from './views/ProductDetail/ProductDetail'
import { Categories } from './components/Categories/Categories';
import Profile from './components/Auth0/Profile/Profile';
import { Error404 } from './components/Error404/Error404';
import { ServiceDetail } from './views/ServiceDetail/ServiceDetail';
import { Service } from './views/Service/Service';
import { Checkout } from './views/Checkout/Checkout';
import { MercadoPago } from './views/Checkout/MercadoPago'

const backend =import.meta.env.VITE_BACKEND_URL;
axios.defaults.baseURL = backend
//axios.defaults.baseURL = 'http://localhost:3001/';

function App() {
  const location = useLocation();
  return (
    <Routes>
      <Route exact path = '/' element = {<Landing />}/>
      <Route path = '/home' element = {<Home />}/>
      <Route path = '/login' element = {<Login />}/>
      <Route path = '/create' element = {<Create />}/>
      <Route path = '/promotions' element = {<Promotions />}/>
      <Route path = '/categories' element = {<Categories />}/>
      <Route path = '/ProductDetail/:id' element = {<ProductDetail />}/>
      <Route path = '/profile' element = {<Profile />}/> 
      <Route path = '/checkout' element = {<MercadoPago />}/>
      <Route path = '/ServiceDetail/:id' element={<ServiceDetail />}/>
      <Route path = '/service' element={<Service />}/>
      <Route path = '*' element = {<Error404 />}/> 
    </Routes >
  );
}

export default App;
