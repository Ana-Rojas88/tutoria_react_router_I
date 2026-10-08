import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        MiApp
      </Link>

      <div className="navbar-links">
        <Link to="/home">Inicio</Link>
        {/* <button>Inicio</button> */}
        <Link to="/">Login</Link>
        {/* <button>Login</button> */}
        <Link to="/registro">Registro</Link>
        {/* <button>Registro</button> */}
      </div>
    </nav>
  );
};

export default Navbar;