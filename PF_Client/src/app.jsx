import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Landing } from './views/Landing/Landing';
import { Home } from './views/Home/Home';
import { Create } from './views/Create/Create';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001/';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = '/' element = {<Landing />}/>
        <Route path = '/home' element = {<Home />}/>
        <Route path = '/create' element = {<Create />}/>
      </Routes >
    </BrowserRouter>
  );
}

export default App;
