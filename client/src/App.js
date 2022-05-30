import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import SignUp from "./components/SignUp/SignUp";
import LogIn from "./components/LogIn/LogIn";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import AddCat from './components/AddCat/AddCat';
import {useSelector} from 'react-redux'

function App() {
  const loggedUser = useSelector(state => state.userSlice.loggedUser)
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/reset-password" element={<ResetPassword />} />
        <Route exact path="/add-cat" element={Object.entries(loggedUser).length > 0 ? <AddCat /> : <Navigate to="/login"/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
