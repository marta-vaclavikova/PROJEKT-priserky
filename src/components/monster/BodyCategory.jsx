import React from 'react';

function BodyCategory({ setCategory }) {
  return (
    <div className="body-category">
      <h2>Vytvoř svoji příšerku</h2>
      <p>Vyber část těla příšerky</p>
      <div className="body-category__buttons">
        <button className="body-category__button" type="button" onClick={() => setCategory('body')}>Tělo</button>
        <button className="body-category__button" type="button" onClick={() => setCategory('legs')}>Nohy</button>
        <button className="body-category__button" type="button" onClick={() => setCategory('arms')}>Ruce</button>
        <button className="body-category__button" type="button" onClick={() => setCategory('eyes')}>Oči</button>
        <button className="body-category__button" type="button" onClick={() => setCategory('mouth')}>Ústa</button>
      </div>
    </div>
  );
}

export default BodyCategory;
