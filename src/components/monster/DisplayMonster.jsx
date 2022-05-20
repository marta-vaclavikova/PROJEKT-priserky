import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MonsterTemplate from './template/MonsterTemplate';
import './display-monster.scss';

function DisplayMonster() {
  const [code, setCode] = useState('');
  const [monster, setMonster] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const parseCode = (textCode) => {
    const monst = ({
      eyes: textCode.substring(0, 2),
      body: textCode.substring(2, 4),
      legs: textCode.substring(4, 6),
      arms: textCode.substring(6, 8),
      mouth: textCode.substring(8, 10),
      colors: textCode.substring(10, 12),
    });
    // eslint-disable-next-line no-console
    console.log(`Parsed monster ${JSON.stringify(monst)}`);
    return monst;
  };

  useEffect(() => {
    if (id) {
      setMonster(parseCode(id));
    }
  }, [id]);

  const handleClick = () => {
    setMonster(parseCode(code));
  };

  const handleNextClick = () => {
    setMonster(null);
    setCode('');
  };

  return (
    <section className="display-monster">
      <h1>Vyzvedni příšerku</h1>
      {(!monster)
      && (
      <div className="display-monster__form">
        <label htmlFor="code">
          Kód příšerky
          <input type="text" id="code" name={code} onChange={(e) => setCode(e.target.value)} />
        </label>
        <button className="display-monster__button" type="submit" onClick={handleClick} disabled={code.length <= 0}>
          Zobraz příšerku
        </button>
      </div>
      )}
      {monster
      && (
      <div className="display-monster__picture">
        <h2>Tvoje příšerka</h2>
        <MonsterTemplate monster={monster} />
        <button
          type="button"
          className="display-monster__next"
          onClick={handleNextClick}
        >
          Zobrazit další příšerku

        </button>
        <button
          type="button"
          className="display-monster__next"
          onClick={() => navigate('/generate')}
        >
          Vygenerovat novou příšerku

        </button>
      </div>
      ) }

    </section>
  );
}

export default DisplayMonster;
