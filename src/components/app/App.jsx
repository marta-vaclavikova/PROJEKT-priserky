import React, { useEffect, useState, useMemo } from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';

import SvgContext from '../context/SvgContext';
import { loadSvgData } from '../context/svgLoader';
import Footer from '../footer/Footer';
import Gallery from '../gallery/Gallery';
import Header from '../header/Header';
import Home from '../home/Home';
import DisplayMonster from '../monster/DisplayMonster';
import GenerateMonster from '../monster/GenerateMonster';
import './style.css';

function App() {
  const [svgData, setSvgData] = useState({});

  useEffect(() => {
    loadSvgData(setSvgData);
  }, []);

  const svgMemo = useMemo(() => ({ data: svgData }), [svgData]);

  return (
    <SvgContext.Provider value={svgMemo}>
      <BrowserRouter>
        <div className="container">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/generate" element={<GenerateMonster />} />
              <Route path="/display" element={<DisplayMonster />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </SvgContext.Provider>
  );
}

export default App;
