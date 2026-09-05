

import React from 'react';
import ReactDOM from 'react-dom/client';
import Gallery from './App';
import './css/header_footer.css';
import './css/styles.css';
import './css/font.css';



const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <section>
    <React.StrictMode>
            <Gallery />

    </React.StrictMode>,
    </section>
  );
}
