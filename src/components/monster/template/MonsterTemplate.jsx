import React, { useContext } from 'react';
import SvgContext from '../../context/SvgContext';

function MonsterTemplate({ monster }) {
  const svgContext = useContext(SvgContext);

  return (
    <svg
      className="svg"
      viewBox="0 0 1500 2500"
    >
      <g id="upperarm-left" transform="translate(812,1330)">
        {svgContext.data?.arms?.[monster.arms].upperArm.map((path, index) => (
          <path key={index} fill={path.fill} d={path.path} />
        ))}
      </g>
      <g id="forearm-left" transform="translate(973,1557)">
        {svgContext.data?.arms?.[monster.arms].forearm.map((path, index) => (
          <path key={index} fill={path.fill} d={path.path} />
        ))}
      </g>
      <g id="hand-left" transform="translate(1163,1445)">
        {svgContext.data?.arms?.[monster.arms].leftHand.map((path, index) => (
          <path key={index} fill={path.fill} d={path.path} />
        ))}
      </g>
      <g id="thigh-left" transform="translate(699,1701)">
        {svgContext.data?.legs?.[monster.legs].leftThigh.map((path, index) => (
          <path key={index} fill={path.fill} d={path.path} />
        ))}
      </g>
      <g id="calf-left" transform="translate(757,2048)">
        {svgContext.data?.legs?.[monster.legs].calf.map((path, index) => (
          <path key={index} fill={path.fill} d={path.path} />
        ))}
      </g>
      <g id="foot-left" transform="translate(723,2312)">
        {svgContext.data?.shoes?.[monster.shoes].map((path, index) => (
          <path key={index} fill={path.fill} d={path.path} />
        ))}
      </g>
      <g id="torso" transform="translate(487,1285)">
        {svgContext.data?.torso?.[monster.torso].map((path, index) => (
          <path key={index} fill={path.fill} d={path.path} />
        ))}
      </g>
      <g id="thigh-right" transform="translate(474,1697)">
        {svgContext.data?.legs?.[monster.legs].rightThigh.map((path, index) => (
          <path key={index} fill={path.fill} d={path.path} />
        ))}
      </g>
      <g id="calf-right" transform="translate(477,2057)">
        {svgContext.data?.legs?.[monster.legs].calf.map((path, index) => (
          <path key={index} fill={path.fill} d={path.path} />
        ))}
      </g>
      <g id="foot-right" transform="translate(433,2316)">
        {svgContext.data?.shoes?.[monster.shoes].map((path, index) => (
          <path key={index} fill={path.fill} d={path.path} />
        ))}
      </g>
      <g id="clothes" transform="translate(425,1280)">
        {svgContext.data?.clothes?.[monster.clothes].map((path, index) => (
          <path key={index} fill={path.fill} d={path.path} />
        ))}
      </g>
      <g id="upperarm-right" transform="translate(604,1330)">
        {svgContext.data?.arms?.[monster.arms].upperArm.map((path, index) => (
          <path key={index} fill={path.fill} d={path.path} />
        ))}
      </g>
      <g id="forearm-right" transform="translate(764,1555)">
        {svgContext.data?.arms?.[monster.arms].forearm.map((path, index) => (
          <path key={index} fill={path.fill} d={path.path} />
        ))}
      </g>
      <g id="hand-right" transform="translate(960,1454)">
        {svgContext.data?.arms?.[monster.arms].rightHand.map((path, index) => (
          <path key={index} fill={path.fill} d={path.path} />
        ))}
      </g>
      <g id="head">
        {svgContext.data?.head?.[monster.head].map((path, index) => (
          <path key={index} fill={path.fill} d={path.path} />
        ))}
      </g>
      <g id="eyes" transform="translate(694,707)">
        {svgContext.data?.eyes?.[monster.eyes].map((path, index) => (
          <path key={index} fill={path.fill} d={path.path} />
        ))}
      </g>
      <g id="mouth" transform="translate(915,1102)">
        {svgContext.data?.mouth?.[monster.mouth].map((path, index) => (
          <path key={index} fill={path.fill} d={path.path} />
        ))}
      </g>
    </svg>
  );
}

export default MonsterTemplate;
