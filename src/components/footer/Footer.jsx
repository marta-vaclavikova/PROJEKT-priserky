import React from 'react';
import Menu from '../menu/Menu';
import './footer.scss';

function Footer() {
  return (

    <footer className="footer">
      <div className="footer__copyright">
        &copy;2022 Marta
      </div>
      <div className="footer__links">
        Images from
        {' '}
        <a href="https://pixabay.com/">pixabay.com</a>
        {' '}
        and
        {' '}
        <a href="www.freepik.com">www.freepik.com</a>
      </div>
    </footer>
  );
}

export default Footer;
