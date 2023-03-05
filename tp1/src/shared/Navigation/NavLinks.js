import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

function NavLinks(props) {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          Accueil
        </NavLink>
      </li>
      <li>
        <NavLink to="/Professeurs">Professeurs</NavLink>
      </li>
      <li>
        <NavLink to="/Cours">Cours</NavLink>
      </li>
    </ul>
  );
}

export default NavLinks;
