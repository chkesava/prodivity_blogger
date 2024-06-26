// src/styles/GlobalStyle.js

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .container {
    width: 90%;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
