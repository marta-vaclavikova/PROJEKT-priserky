import React from 'react';

function CommonTemplate({ svg, width, height }) {
  return (
    <svg
      className="svg"
      viewBox={`0 0 ${width} ${height}`}
    >
      <g>
        {svg.map((path, index) => (
          <path key={index} fill={path.fill} d={path.path} />
        ))}
      </g>
    </svg>
  );
}

export default CommonTemplate;
