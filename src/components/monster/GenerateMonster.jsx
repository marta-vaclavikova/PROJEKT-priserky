import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BodyCategory from './BodyCategory';
import BodyTemplate from './BodyTemplate';
import MonsterTemplate from './template/MonsterTemplate';
import './generate-monster.scss';

function GenerateMonster() {
  const [monster, setMonster] = useState();
  const [category, setCategory] = useState(undefined);

  useEffect(() => {
    axios.get('/assets/initial-monster.json')
      .then((response) => {
        setMonster(response.data);
      });
  }, []);

  const changeBodyPart = (template, categoryChange) => {
    setMonster({ ...monster, [categoryChange]: template });
  };

  const getMonsterCode = (m) => `${m.eyes}${m.body}${m.legs}${m.arms}${m.mouth}${m.colors}`;

  return (
    <section className="generate-monster">
      <h1>Generuj příšerku</h1>
      <div className="generate-monster__body">
        <div className="generate-monster__image">{monster && <MonsterTemplate monster={monster} /> }</div>
        <div className="generate-monster__customize">
          <BodyCategory setCategory={setCategory} category={category} />
          {category && <BodyTemplate category={category} changeBodyPart={changeBodyPart} />}
        </div>
      </div>
      {monster && (
      <div className="generate-monster__code">
        Kód pro vyzvednutí příšerky:
        {' '}
        <a href={`/display/${getMonsterCode(monster)}`}>{getMonsterCode(monster)}</a>
      </div>
      )}
    </section>
  );
}

export default GenerateMonster;
