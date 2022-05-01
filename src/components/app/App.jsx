import React, { useEffect, useState } from 'react';

import SvgContext from '../context/SvgContext';
import { loadSvgData } from '../context/svgLoader';
import GenerateMonster from '../monster/GenerateMonster';
import './style.css';

function App() {
  const [svgData, setSvgData] = useState({});

  useEffect(() => {
    loadSvgData(setSvgData);
  }, []);

  return (
    <SvgContext.Provider value={{ data: svgData }}>
      <div className="container">
        <header>
          <div className="logo" />
          <h1>Webová aplikace</h1>
        </header>
        <main>
          <GenerateMonster />
        </main>
        <footer>
          <p>Czechitas, Digitální akademie: Web</p>
        </footer>
      </div>
    </SvgContext.Provider>
  );
}

export default App;
