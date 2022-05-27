import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import SignUp from "./components/SignUp/SignUp";
import LogIn from "./components/LogIn/LogIn";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
