import React from 'react';
import { Link } from 'react-router-dom';
import MonsterTemplate from '../monster/template/MonsterTemplate';
import './home.scss';

const monsterList = [
  {
    eyes: '01',
    body: '01',
    legs: '01',
    arms: '01',
    mouth: '01',
  },
  {
    eyes: '04',
    body: '06',
    legs: '02',
    arms: '05',
    mouth: '07',
  },
  {
    eyes: '08',
    body: '11',
    legs: '12',
    arms: '15',
    mouth: '08',
  }    
];

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

      <div className="home__pictures">
        {monsterList.map((monster, index) => (
          <div className={`home__picture home__picture-${index}`}>
            <MonsterTemplate monster={monster} />
          </div>
        ))}
      </div>

    </section>
  );
}

export default Home;
