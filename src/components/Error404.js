import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      <Link to={"*"}>
        <h2>Error 404</h2>
        <p>Imposible cargar...</p>
      </Link>
    </div>
  );
};

export default Error404;
