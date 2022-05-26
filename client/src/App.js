import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
   <BrowserRouter>
   <NavBar/>
   <Routes>
     <Route exact path="/" element={<Landing/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
