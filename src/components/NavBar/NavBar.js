import logo from "./logo.png";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const categories = {
  electronica: "electronics",
  joyeria: "jewelery",
  hombre: "men's clothing",
  mujer: "women's clothing",
};

const NavBar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <Link
            className="navbar-item"
            to={`/category/${categories.electronica}`}
          >
            Electronica
          </Link>

          <Link className="navbar-item" to={`/category/${categories.joyeria}`}>
            Joyeria
          </Link>

          <Link className="navbar-item" to={`/category/${categories.hombre}`}>
            Ropa - Hombre
          </Link>

          <Link className="navbar-item" to={`/category/${categories.mujer}`}>
            Ropa - Mujer
          </Link>
        </div>
      </div>

      <div className="navbvar-end">
        <div className="navbar-item">
          <div className="buttons">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
};

export { NavBar };
