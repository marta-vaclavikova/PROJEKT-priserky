import React, { useContext } from 'react';
import SvgContext from '../../context/SvgContext';

function MonsterTemplate({ monster }) {
  const svgContext = useContext(SvgContext);

  return (
    <svg
      viewBox="0 0 25 30"
    >
      <g id="arms" transform="translate(0,14)">
        {svgContext.data?.arms?.[monster.arms].map((path, index) => (
          <path key={index} fill={path.fill} d={path.path} />
        ))}
      </g>
      <g id="legs" transform="translate(4,22)">
        {svgContext.data?.legs?.[monster.legs].map((path, index) => (
          <path key={index} fill={path.fill} d={path.path} />
        ))}
      </g>
      <g id="body" transform="translate(0,0)">
        {svgContext.data?.body?.[monster.body].map((path, index) => (
          <path key={index} fill={path.fill} d={path.path} />
        ))}
      </g>
      <g id="eyes" transform="translate(6.5,7)">
        {svgContext.data?.eyes?.[monster.eyes].map((path, index) => (
          <path key={index} fill={path.fill} d={path.path} />
        ))}
      </g>
      <g id="mouth" transform="translate(6.5,14)">
        {svgContext.data?.mouth?.[monster.mouth].map((path, index) => (
          <path key={index} fill={path.fill} d={path.path} />
        ))}
      </g>
    </svg>
  );
}

export default MonsterTemplate;
