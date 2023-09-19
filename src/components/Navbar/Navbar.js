import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-secondary navbar-expand-lg">
        <div className="container-fluid">
          <Link class="navbar-brand nav-tittle" to="/">
            <i className="bi bi-controller"></i> Tienda Gamers
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to={"/category/keysteam"}>
                  <i className="bi bi-steam"></i> Keys Steam
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/category/componentes"}>
                  <i className="bi bi-pc-display"></i> Componentes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/category/perifericos"}>
                  <i className="bi bi-mouse-fill"></i> Perifericos
                </Link>
              </li>
            </ul>
            <div className="cart">
              <Link className="cart-link" to="/cart">
                <CartWidget />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
