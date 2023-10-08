import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-div">
      <footer>
        <div className="footer-sm">
          <div className="container__footer">
            <div className="footer-sm__icons">
              <div>Buscanos en las redes!</div>
              <Link to={"www.facebook.com"}>
                <i class="bi bi-facebook"></i>
              </Link>
              <Link to={"twitter.com"}>
                <i class="bi bi-twitter"></i>
              </Link>
              <Link to={"https://www.instagram.com"}>
                <i class="bi bi-instagram"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container__footer">
            <div className="footer-bottom__copyright">
              &copy; Copyright 2023 <Link to={"/"}>Tienda Gamers</Link> | Creada
              por{" "}
              <Link to={"https://github.com/TomasGon1"}>
                <i class="bi bi-github"></i>{""} TomasG.
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
