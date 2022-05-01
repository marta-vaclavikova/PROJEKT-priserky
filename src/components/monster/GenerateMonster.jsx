import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BodyCategory from './BodyCategory';
import BodyTemplate from './BodyTemplate';
import MonsterTemplate from './template/MonsterTemplate';
import './monster.css';


function GenerateMonster() {
  const [monster, setMonster] = useState();
  const [category, setCategory] = useState(undefined);

  useEffect(() => {
    axios.get('assets/initial-monster.json')
      .then((response) => {
        setMonster(response.data);
      });
  }, []);

  return (
    <>
      <div className="monster-image">{monster && <MonsterTemplate monster={monster} /> }</div>
      <BodyCategory setCategory={setCategory} category={category} />
      {category && <BodyTemplate category={category} />}
    </>
  );
}

export default GenerateMonster;
