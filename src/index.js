import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import App1 from './App1';
import App3 from './App3';
import App4 from './App4';
import App5 from './App5';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <App1 />
    <App3 />
    <App4 />
    <App5 model="Mustang" />
  </StrictMode>
);
