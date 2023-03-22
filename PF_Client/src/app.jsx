import './app.css';
//import {Landing, Home, ProductDetail, ServiceDetail, Form} from "./views" 
//import NavBar from "./components/navBar/navBar"
import { Route, useLocation } from 'react-router-dom';
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:3001/";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <h1>My Seam</h1>
      {/*descomentar cuando se implemente la NavBar {location.pathname !== "/" && <NavBar />}       */}
      {/*descomentar si implementamos Landing <Route exact path="/" render = {()=> <Landing/>}/>            */}
      {/*descomentar al implementar el home <Route path="/home" render = {()=> <Home/>}/>       */}
      {/*descomentar al implementar el detail de productos <Route path="/ProductDetail" render = {()=> <ProductDetail/>}/>       */}
      {/*descomentar al implementar el detail de servicios <Route path="/ServiceDetail" render = {()=> <ServiceDetail/>}/>       */}
      {/*descomentar al implementar el form de productos/servicios <Route path="/Form" render = {()=> <Form/>}/>       */}
    </div>
  );
}

export default App;
