import React from 'react';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/react'
import globalStyles from './utils/globalStyles'
import Shopping from './features/shopping';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <Shopping />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
