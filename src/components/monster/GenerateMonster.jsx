import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import BodyCategory from './BodyCategory';
import BodyTemplate from './BodyTemplate';
import MonsterTemplate from './template/MonsterTemplate';
import SvgContext from '../context/SvgContext';
import './generate-monster.scss';
import fileDownload from 'js-file-download';

const GenerateMonster = () => {
  const [monster, setMonster] = useState();
  const [category, setCategory] = useState(undefined);
  const svgContext = useContext(SvgContext);

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

  const monsterRef = React.useRef();
  const handleSave = () => {
    fileDownload(monsterRef.current.outerHTML, 'priserka.svg');
  };

  const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  const handleRandom = () => {
    setMonster({
      eyes: String(randomIntFromInterval(1, Object.keys(svgContext.data?.eyes).length)).padStart(2, '0'),
      body: String(randomIntFromInterval(1, Object.keys(svgContext.data?.body).length)).padStart(2, '0'),
      legs: String(randomIntFromInterval(1, Object.keys(svgContext.data?.legs).length)).padStart(2, '0'),
      arms: String(randomIntFromInterval(1, Object.keys(svgContext.data?.arms).length)).padStart(2, '0'),
      mouth: String(randomIntFromInterval(1, Object.keys(svgContext.data?.mouth).length)).padStart(2, '0'),
      colors: String(randomIntFromInterval(1, Object.keys(svgContext.data?.colors).length)).padStart(2, '0'),
    });
  };

  return (
    <section className="generate-monster">
      <h1>Generuj příšerku</h1>
      <div className="generate-monster__body">
        <div className="generate-monster__image">
          {monster && <MonsterTemplate monster={monster} svgRef={monsterRef} /> }
        </div>
        <div className="generate-monster__customize">
          <BodyCategory setCategory={setCategory} category={category} />
          {category && <BodyTemplate category={category} changeBodyPart={changeBodyPart} />}
        </div>

        {monster && (
        <>
          <div className="generate-monster__buttons">
            <div className="generate-monster__button">
              <button type="button" onClick={handleRandom}>
                Generuj náhodně
              </button>
            </div>
            <div className="generate-monster__button">
              <button type="button" onClick={handleSave}>
                Uložit jako SVG
              </button>
            </div>
          </div>
          <div className="generate-monster__code">
            Kód pro vyzvednutí příšerky:
            {' '}
            <a href={`/display/${getMonsterCode(monster)}`}>{getMonsterCode(monster)}</a>
          </div>
        </>
        )}
      </div>
    </section>
  );
};

export default GenerateMonster;
