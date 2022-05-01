import React from 'react';

function BodyCategory({ category, setCategory }) {
  return (
    <>
      <h2>{category}</h2>
      <button type="button" onClick={() => setCategory('torso')}>Tělo</button>
      <button type="button" onClick={() => setCategory('head')}>Hlava</button>
      <button type="button" onClick={() => setCategory('legs')}>Nohy</button>
      <button type="button" onClick={() => setCategory('arms')}>Ruce</button>
      <button type="button" onClick={() => setCategory('clothes')}>Oblečení</button>
      <button type="button" onClick={() => setCategory('shoes')}>Boty</button>
      <button type="button" onClick={() => setCategory('eyes')}>Oči</button>
      <button type="button" onClick={() => setCategory('mouth')}>Ústa</button>
    </>
  );
}

export default BodyCategory;
