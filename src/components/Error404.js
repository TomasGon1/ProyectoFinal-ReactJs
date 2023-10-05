import React from "react";
import { Link } from "react-router-dom";
import "./Error404.css";

const Error404 = () => {
  return (
    <div>
      <h2 className="d-flex justify-content-center h2-style">Error 404</h2>
      <p className="d-flex justify-content-center p-style">
        Imposible cargar... 😞😞
      </p>

      <Link to={"/"} className="d-flex justify-content-center h3-style">
        Volver al inicio
      </Link>
    </div>
  );
};

export default Error404;
