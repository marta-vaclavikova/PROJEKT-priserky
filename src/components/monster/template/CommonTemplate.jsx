import React from 'react';

const CommonTemplate = ({
  svg, width, height, widthStart = 0,
}) => (
  <svg
    className="svg"
    viewBox={`${widthStart} 0 ${width} ${height}`}
  >
    <g>
      {svg.map((path, index) => (
        <path key={index} fill={path.fill} d={path.path} />
      ))}
    </g>
  </svg>
);

export default CommonTemplate;
