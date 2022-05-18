import React from 'react';
import './color-template.scss';

function ColorTemplate({ colors }) {
  return (
    <div className="color-template">
      <div className="color-template__color" style={{ backgroundColor: `${colors.color1}` }}>&nbsp;</div>
      <div className="color-template__color" style={{ backgroundColor: `${colors.color2}` }}>&nbsp;</div>
      <div className="color-template__color" style={{ backgroundColor: `${colors.color3}` }}>&nbsp;</div>
    </div>
  );
}

export default ColorTemplate;
