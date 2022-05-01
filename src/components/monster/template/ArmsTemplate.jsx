import React from 'react';

function ArmsTemplate({ svg }) {
  return (
    <svg
      className="svg"
      viewBox="0 0 800 350"
    >
      <g id="upperarm-left" transform="translate(250)">
        {svg.upperArm.map((path, index) => (
          <path key={index} fill={path.fill} d={path.path} />
        ))}
      </g>
      <g id="forearm-left" transform="translate(369,227)">
        {svg.forearm.map((path, index) => (
          <path key={index} fill={path.fill} d={path.path} />
        ))}
      </g>
      <g id="hand-left" transform="translate(559,115)">
        {svg.leftHand.map((path, index) => (
          <path key={index} fill={path.fill} d={path.path} />
        ))}
      </g>
      <g id="upperarm-right">
        {svg.upperArm.map((path, index) => (
          <path key={index} fill={path.fill} d={path.path} />
        ))}
      </g>
      <g id="forearm-right" transform="translate(160,225)">
        {svg.forearm.map((path, index) => (
          <path key={index} fill={path.fill} d={path.path} />
        ))}
      </g>
      <g id="hand-right" transform="translate(356,124)">
        {svg.rightHand.map((path, index) => (
          <path key={index} fill={path.fill} d={path.path} />
        ))}
      </g>
    </svg>
  );
}

export default ArmsTemplate;
