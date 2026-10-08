import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import Registro from "./views/Registro";
import Login from "./views/Login";
import NotFound from "./views/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={ <Home />} />
        <Route path="/registro" element={ <Registro />} />
        <Route path="/" element={ <Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
