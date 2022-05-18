import React, { useContext } from 'react';
import SvgContext from '../context/SvgContext';
import CommonTemplate from './template/CommonTemplate';
import './body-template.scss';
import ColorTemplate from './template/ColorTemplate';

function TemplateSwitch({ category, svg }) {
  switch (category) {
    case 'legs': {
      return <CommonTemplate svg={svg} widthStart={-2} width={22} height={4} />;
    }
    case 'arms': {
      return <CommonTemplate svg={svg} widthStart={-2} width={29} height={6} />;
    }
    case 'eyes': {
      return <CommonTemplate svg={svg} width={13} height={5} />;
    }
    case 'mouth': {
      return <CommonTemplate svg={svg} width={13} height={5} />;
    }
    case 'body': {
      return <CommonTemplate svg={svg} width={27} height={27} />;
    }
    case 'colors': {
      return <ColorTemplate colors={svg} />;
    }
    default: {
      //  ignore
    }
  }
}

function BodyTemplate({ category, changeBodyPart }) {
  const svgContext = useContext(SvgContext);

  const handleClick = (template) => {
    changeBodyPart(template, category);
  };

  return (
    <div className="body-template">
      {Object.keys(svgContext.data[category]).sort().map((template) => (
        <button type="button" key={template} className="body-template__button" onClick={() => handleClick(template)}>
          <TemplateSwitch category={category} svg={svgContext.data[category][template]} />
        </button>
      )) }
    </div>
  );
}

export default BodyTemplate;
