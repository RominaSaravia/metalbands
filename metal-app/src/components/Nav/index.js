import React from 'react';
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav({title = ""}) {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link className="navbar-brand" to="/" > SONIDO METÁLICO </Link>

        <div className="navbar-right" id="navbarColor03">

          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Bandas <span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/artistas">
                Artistas
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav;