import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import fileDownload from 'js-file-download';
import SvgContext from '../context/SvgContext';
import MonsterTemplate from './template/MonsterTemplate';
import './display-monster.scss';

const DisplayMonster = () => {
  const [code, setCode] = useState('');
  const [monster, setMonster] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const svgContext = useContext(SvgContext);

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
    setError(false);
    const mon = parseCode(code);
    if (svgContext.data?.arms?.[mon.arms] === undefined
      || svgContext.data?.legs?.[mon.legs] === undefined
      || svgContext.data?.body?.[mon.body] === undefined
      || svgContext.data?.eyes?.[mon.eyes] === undefined
      || svgContext.data?.mouth?.[mon.mouth] === undefined) {
      setError(true);
    } else {
      setMonster(mon);
    }
  };

  const handleNextClick = () => {
    setMonster(null);
    setCode('');
  };

  const monsterRef = React.useRef();
  const handleSave = () => {
    fileDownload(monsterRef.current.outerHTML, 'priserka.svg');
  };

  return (
    <section className="display-monster">
      <h1>Vyzvedni příšerku</h1>
      {error
      && (
      <div className="display-monster__error">
        <p>Špatný kód, příšerku nelze zobrazit.</p>
        <p>Zkus zadat kód znovu.</p>
      </div>
      )}
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
        <MonsterTemplate monster={monster} svgRef={monsterRef} />

        <button className="display-monster__button" type="button" onClick={handleSave}>
          Uložit jako SVG
        </button>

        <div className="display-monster__buttons">
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
      </div>
      ) }

    </section>
  );
};

export default DisplayMonster;
