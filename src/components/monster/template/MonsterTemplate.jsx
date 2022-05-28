import React, { useContext } from 'react';
import SvgContext from '../../context/SvgContext';

const MonsterTemplate = ({ monster, svgRef }) => {
  const svgContext = useContext(SvgContext);

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
      viewBox="0 0 28 32"
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
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
};

export default MonsterTemplate;
