import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001/';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Landing } from './views/Landing/Landing';
import { Home } from './views/Home/Home';
import { Create } from './views/Create/Create';
import { Promotions } from './components/Carousel/Promotions/Promotions';
import { Login } from './views/Login/Login';
import { ProductDetail } from './views/ProductDetail/ProductDetail'

function App() {
  const location = useLocation();
  return (
    //<BrowserRouter>
      <Routes>
        <Route exact path = '/' element = {<Landing />}/>
        <Route path = '/home' element = {<Home />}/>
        <Route path = '/login' element = {<Login />}/>
        <Route path = '/create' element = {<Create />}/>
        <Route path = '/promotions' element = {<Promotions />}/>
        <Route path = '/ProductDetail' render = {()=> <ProductDetail/>}/> 
      </Routes >
    //</BrowserRouter>
  );
}

export default App;
