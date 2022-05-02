import React, { useContext } from 'react';
import SvgContext from '../context/SvgContext';
import CommonTemplate from './template/CommonTemplate';
import './monster.scss';

function TemplateSwitch({ category, svg }) {
  switch (category) {
    case 'legs': {
      return <CommonTemplate svg={svg} height={60} width={20} />;
    }
    case 'arms': {
      return <CommonTemplate svg={svg} height={91} width={50} />;
    }
    case 'eyes': {
      return <CommonTemplate svg={svg} height={43} width={16} />;
    }
    case 'mouth': {
      return <CommonTemplate svg={svg} height={42} width={26} />;
    }
    case 'body': {
      return <CommonTemplate svg={svg} height={93} width={88} />;
    }
    default: {
      //  ignore
    }
  }
}

function BodyTemplate({ category }) {
  const svgContext = useContext(SvgContext);

  return (
    <div className="body-template">
      {Object.keys(svgContext.data[category]).map((template) => (
        <button type="button" className="body-template__button">
          <TemplateSwitch key={template} category={category} svg={svgContext.data[category][template]} />
        </button>
      )) }
    </div>
  );
}

export default BodyTemplate;
