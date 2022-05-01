import React from 'react';

function ShoesTemplate({ svg }) {
  return (
    <svg
      className="svg"
      viewBox="0 0 600 200"
    >
      <g id="foot-left" transform="translate(3,4)">
        {svg.map((path, index) => (
          <path key={index} fill={path.fill} d={path.path} />
        ))}
      </g>
      <g id="foot-right" transform="translate(290)">
        {svg.map((path, index) => (
          <path key={index} fill={path.fill} d={path.path} />
        ))}
      </g>
    </svg>
  );
}

export default ShoesTemplate;
