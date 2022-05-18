import React from 'react';
import Menu from '../menu/Menu';
import './header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header__left">

        <div className="header__title">
          Generátor příšerek
        </div>
      </div>
      <Menu />
    </header>
  );
}

export default Header;
