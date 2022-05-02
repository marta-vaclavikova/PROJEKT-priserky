
import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';

function Home() {
  return (
    <section className="home">
      <div className="home__info">
        <h1>Generátor příšerek</h1>
        <p>Vítejte na na generátoru příšerek!</p>
        <p>Vytvoř si svoji příšerku a někomu ji pošli</p>
        <p>Máš-li kód, příšerku si vyzvedni.</p>
      </div>

      <Link className="home__link" to="/generate">
        <h2 className="home__action">Generuj příšerku</h2>
        <p className="home__description">Vygeneruj si svoji příšerku.</p>
        <p className="home__description">Stáhni si ji nebo někomu pošli.</p>
      </Link>

      <Link className="home__link" to="/display">
        <h2 className="home__action">Vyzvedni příšerku</h2>
        <p className="home__description">Vyzvedni si příšerku pomocí kódu, který ti někdo zaslal.</p>
      </Link>

    </section>
  );
}

export default Home;
