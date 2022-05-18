import React from 'react';
import { List } from 'phosphor-react';
import { Link } from 'react-router-dom';
import './menu.scss';

function Menu() {
  return (
    <nav className="menu">
      <input type="checkbox" className="menu__checkbox" id="menu-checkbox" />
      <label htmlFor="menu-checkbox" className="menu__toggler"><List /></label>

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
