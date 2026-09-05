
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/header_footer.css';
import './css/styles.css';
import './css/font.css';
import { HashRouter } from "react-router-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./aboutMe";
import Art from "./art";
import Design from "./design";


const rootEl = document.getElementById('root');
console.log("finding root")
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <section>
     <div className="App">
            <p>wawawawa</p>
            <HashRouter>
                <Routes>
                    <Route  path="/" element={<Art />} />
                    <Route  path="/art" element={<Art />} />

                    <Route  path="/design" element={<Design />} />
                    <Route  path="/aboutMe" element={<AboutMe />} />
                </Routes>
            </HashRouter>
        </div>
    </section>
  );
}
