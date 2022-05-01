import React, { useContext } from 'react';
import SvgContext from '../context/SvgContext';
import ArmsTemplate from './template/ArmsTemplate';
import CommonTemplate from './template/CommonTemplate';
import LegsTemplate from './template/LegsTemplate';
import ShoesTemplate from './template/ShoesTemplate';

function TemplateSwitch({ category, svg }) {
  switch (category) {
    case 'legs': {
      return <LegsTemplate svg={svg} />;
    }
    case 'arms': {
      return <ArmsTemplate svg={svg} />;
    }
    case 'shoes': {
      return <ShoesTemplate svg={svg} />;
    }
    case 'head': {
      return <CommonTemplate svg={svg} height={1400} width={1500} />;
    }
    case 'eyes': {
      return <CommonTemplate svg={svg} height={350} width={750} />;
    }
    case 'clothes': {
      return <CommonTemplate svg={svg} height={580} width={540} />;
    }
    case 'mouth': {
      return <CommonTemplate svg={svg} height={220} width={330} />;
    }
    case 'torso': {
      return <CommonTemplate svg={svg} height={600} width={450} />;
    }
    default: {
      //  ignore
    }
  }
}

function BodyTemplate({ category }) {
  const svgContext = useContext(SvgContext);

  return (
    <>
      {Object.keys(svgContext.data[category]).map((template) => (
        <button type="button" className="body-button">
          <TemplateSwitch key={template} category={category} svg={svgContext.data[category][template]} />
        </button>
      )) }
    </>
  );
}

export default BodyTemplate;
