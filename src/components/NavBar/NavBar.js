import logo from "./logo.png";
import { CartWidget } from "../CartWidget/CartWidget";
const NavBar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="navbar">
          <img src={logo} alt="logo" />
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="home">
            Home
          </a>

          <a className="navbar-item" href="Documentation">
            Documentation
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" href="#more">
              More
            </a>

            <div className="navbar-dropdown">
              <a className="navbar-item" href="#about">
                About
              </a>

              <a className="navbar-item" href="#about">
                Jobs
              </a>

              <a className="navbar-item" href="#about">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="navbvar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-primary" href="cart">
              <CartWidget />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { NavBar };
