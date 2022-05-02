import React from 'react';
import { Link } from 'react-router-dom';
import './menu.scss';

function Menu({ className }) {
  return (
    <nav className={`menu ${className}`}>
      <ul className="menu__list">
        <li className="menu__item">
          <Link className="menu__link" to="/">
            Úvod
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to="/generate">
            Generuj příšerku
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to="/display">
            Vyzvedni příšerku
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to="/gallery">
            Galerie
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to="/blog">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
