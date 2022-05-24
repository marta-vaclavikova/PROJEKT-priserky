import React, { useState } from 'react';
import { List } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import './menu.scss';

const Menu = () => {
  const [checked, setChecked] = useState(false);
  return (
    <nav className="menu">
      <input
        type="checkbox"
        className="menu__checkbox"
        id="menu-checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <label htmlFor="menu-checkbox" className="menu__toggler">
        <List />
      </label>

      <ul className="menu__list">
        <li className="menu__item">
          <NavLink
            className={({ isActive }) => `menu__link ${isActive ? 'menu__link--active' : ''}`}
            onClick={() => setChecked(false)}
            to="/"
          >
            Úvod
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            className={({ isActive }) => `menu__link ${isActive ? 'menu__link--active' : ''}`}
            onClick={() => setChecked(false)}
            to="/generate"
          >
            Generuj příšerku
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            className={({ isActive }) => `menu__link ${isActive ? 'menu__link--active' : ''}`}
            onClick={() => setChecked(false)}
            to="/display"
          >
            Vyzvedni příšerku
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            className={({ isActive }) => `menu__link ${isActive ? 'menu__link--active' : ''}`}
            onClick={() => setChecked(false)}
            to="/gallery"
          >
            Galerie
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            className={({ isActive }) => `menu__link ${isActive ? 'menu__link--active' : ''}`}
            onClick={() => setChecked(false)}
            to="/blog"
          >
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
