import React from 'react';
import { ArrowLeft } from 'phosphor-react';
import './body-category.scss';

const BodyCategory = ({ setCategory, category }) => (
  <div className="body-category">
    {!category && <h2>Vytvoř svoji příšerku</h2>}
    {!category && <p>Vyber část těla příšerky</p>}
    <div className={`body-category__buttons ${category ? '' : 'body-category__buttons--detail'}`}>
      {category
        && (
        <button className="body-category__back" type="button" onClick={() => setCategory(null)}>
          <ArrowLeft />
        </button>
        )}
      {(!category || category === 'body') && (
        <button
          className={`body-category__button ${category === 'body'
            ? 'body-category__button--active'
            : ''}`}
          type="button"
          onClick={() => setCategory('body')}
        >
          Tělo
        </button>
      )}
      {(!category || category === 'legs') && (
        <button
          className={`body-category__button ${category === 'legs'
            ? 'body-category__button--active'
            : ''}`}
          type="button"
          onClick={() => setCategory('legs')}
        >
          Nohy
        </button>
      )}
      {(!category || category === 'arms') && (
        <button
          className={`body-category__button ${category === 'arms'
            ? 'body-category__button--active'
            : ''}`}
          type="button"
          onClick={() => setCategory('arms')}
        >
          Ruce
        </button>
      )}
      {(!category || category === 'eyes') && (
        <button
          className={`body-category__button ${category === 'eyes'
            ? 'body-category__button--active'
            : ''}`}
          type="button"
          onClick={() => setCategory('eyes')}
        >
          Oči
        </button>
      )}
      {(!category || category === 'mouth') && (
        <button
          className={`body-category__button ${category === 'mouth'
            ? 'body-category__button--active'
            : ''}`}
          type="button"
          onClick={() => setCategory('mouth')}
        >
          Ústa
        </button>
      )}
      {(!category || category === 'colors') && (
        <button
          className={`body-category__button ${category === 'colors'
            ? 'body-category__button--active'
            : ''}`}
          type="button"
          onClick={() => setCategory('colors')}
        >
          Barvy
        </button>
      )}
    </div>
  </div>
);

export default BodyCategory;
