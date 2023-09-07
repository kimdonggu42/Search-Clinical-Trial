import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GlobalStyle from './assets/styles/globalStyle';
import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <GlobalStyle />
      <App />
    </StyleSheetManager>
  </React.StrictMode>,
);
