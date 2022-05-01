import React from 'react';

function LegsTemplate({ svg }) {
  return (
    <svg
      className="svg"
      width="210"
      viewBox="0 0 500 680"
    >
      <g id="thigh-left" transform="translate(225,4)">
        {svg.leftThigh.map((path, index) => (
          <path key={index} fill={path.fill} d={path.path} />
        ))}
      </g>
      <g id="calf-left" transform="translate(283,351)">
        {svg.calf.map((path, index) => (
          <path key={index} fill={path.fill} d={path.path} />
        ))}
      </g>
      <g id="thigh-right">
        {svg.rightThigh.map((path, index) => (
          <path key={index} fill={path.fill} d={path.path} />
        ))}
      </g>
      <g id="calf-right" transform="translate(3,360)">
        {svg.calf.map((path, index) => (
          <path key={index} fill={path.fill} d={path.path} />
        ))}
      </g>
    </svg>
  );
}

export default LegsTemplate;
