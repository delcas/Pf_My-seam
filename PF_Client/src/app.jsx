import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Landing } from './Pages/Landing/Landing';
import { NavBar } from './components/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = '/' element = {<Landing />}/>
        <Route path = '/home' element = {<NavBar />}/>
      </Routes >
    </BrowserRouter>
  );
}

export default App;
