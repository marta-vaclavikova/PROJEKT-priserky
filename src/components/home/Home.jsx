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
    colors: '19',
  },
  {
    eyes: '04',
    body: '06',
    legs: '02',
    arms: '05',
    mouth: '07',
    colors: '12',
  },
  {
    eyes: '08',
    body: '11',
    legs: '12',
    arms: '15',
    mouth: '08',
    colors: '04',
  },
  {
    eyes: '11',
    body: '02',
    legs: '20',
    arms: '17',
    mouth: '25',
    colors: '17',
  },
  {
    eyes: '15',
    body: '14',
    legs: '11',
    arms: '09',
    mouth: '22',
    colors: '13',
  },
];

const Home = () => (
  <section className="home">
    <div className="home__info">
      <h1>Generátor příšerek</h1>
      <p>Vítejte na na generátoru příšerek!</p>
      <p>Vytvoř si svoji příšerku a někomu ji pošli</p>
      <p>Máš-li kód, příšerku si vyzvedni.</p>
    </div>

    <Link className="home__link home__link--generate" to="/generate">
      <h2 className="home__action">Generuj příšerku</h2>
      <p className="home__description">Vygeneruj si svoji příšerku.</p>
      <p className="home__description">Stáhni si ji nebo někomu pošli.</p>
    </Link>

    <Link className="home__link home__link--display" to="/display">
      <h2 className="home__action">Vyzvedni příšerku</h2>
      <p className="home__description">Vyzvedni si příšerku pomocí kódu, který ti někdo zaslal.</p>
    </Link>

    {monsterList.map((monster) => (
      <div className="home__picture" key={monster.body}>
        <MonsterTemplate monster={monster} />
      </div>
    ))}

  </section>
);

export default Home;
