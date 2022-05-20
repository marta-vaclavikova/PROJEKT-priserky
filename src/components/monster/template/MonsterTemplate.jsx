import React, { useContext } from 'react';
import SvgContext from '../../context/SvgContext';
import './monster-template.scss';

function MonsterTemplate({ monster }) {
  const svgContext = useContext(SvgContext);

  if (svgContext.data?.arms?.[monster.arms] === undefined
     || svgContext.data?.legs?.[monster.legs] === undefined
     || svgContext.data?.body?.[monster.body] === undefined
     || svgContext.data?.eyes?.[monster.eyes] === undefined
     || svgContext.data?.mouth?.[monster.mouth] === undefined) {
    return (
      <div className="monster-template__error">
        <p>Špatný kód, příšerku nelze zobrazit.</p>
        <p>Zkus zadat kód znovu</p>
      </div>
    );
  }

  const convertColor = (inputColor, colors) => {
    switch (inputColor) {
      case '#575757': {
        return colors?.color1;
      }
      case '#8a8a8a': {
        return colors?.color2;
      }
      case '#d1d1d1': {
        return colors?.color3;
      }
      default:
        return inputColor;
    }
  };

  return (
    <svg
      viewBox="0 0 27 32"
    >
      <g id="arms" transform="translate(1,14)">
        {svgContext.data?.arms?.[monster.arms].map((path, index) => (
          <path key={index} fill={convertColor(path.fill, svgContext.data?.colors?.[monster.colors])} d={path.path} />
        ))}
      </g>
      <g id="legs" transform="translate(5,22)">
        {svgContext.data?.legs?.[monster.legs].map((path, index) => (
          <path key={index} fill={convertColor(path.fill, svgContext.data?.colors?.[monster.colors])} d={path.path} />
        ))}
      </g>
      <g id="body" transform="translate(0,0)">
        {svgContext.data?.body?.[monster.body].map((path, index) => (
          <path key={index} fill={convertColor(path.fill, svgContext.data?.colors?.[monster.colors])} d={path.path} />
        ))}
      </g>
      <g id="eyes" transform="translate(7,7)">
        {svgContext.data?.eyes?.[monster.eyes].map((path, index) => (
          <path key={index} fill={convertColor(path.fill, svgContext.data?.colors?.[monster.colors])} d={path.path} />
        ))}
      </g>
      <g id="mouth" transform="translate(7,13)">
        {svgContext.data?.mouth?.[monster.mouth].map((path, index) => (
          <path key={index} fill={convertColor(path.fill, svgContext.data?.colors?.[monster.colors])} d={path.path} />
        ))}
      </g>
    </svg>
  );
}

export default MonsterTemplate;
