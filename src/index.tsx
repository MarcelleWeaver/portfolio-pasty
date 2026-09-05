
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/header_footer.css';
import './css/styles.css';
import './css/font.css';
import { HashRouter } from "react-router-dom";


const rootEl = document.getElementById('root');
console.log("finding root")
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <section>
    <p>babababa</p>
    
    <React.StrictMode>
      <HashRouter>
      {/* blank fix 3 */}
      <App />
      </HashRouter>
    </React.StrictMode>,
    </section>
  );
}
