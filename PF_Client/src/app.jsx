import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001/';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Landing } from './views/Landing/Landing';
import { Home } from './views/Home/Home';
import { Create } from './views/Create/Create';
import { Promotions } from './components/Carousel/Promotions/Promotions';
import { Login } from './views/Login/Login';
import { ProductDetail } from './views/ProductDetail/ProductDetail'
import { Categories } from './components/Categories/Categories';
import Profile from './components/Auth0/Profile/Profile';

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
    </Routes >
  );
}

export default App;
