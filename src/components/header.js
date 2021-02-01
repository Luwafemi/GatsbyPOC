import React from "react";
import { Link } from "gatsby";

const header = () => (
  <nav>
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/location">Locations</Link>
      </li>
    </ul>
  </nav>
);

export default header;
