import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  
/* Global */

*, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.white};
    text-rendering: optimizeLegibility;
  }


  /* Fonts styling */

  @import url('https://rsms.me/inter/inter.css');
  html { font-family: 'Inter', sans-serif; }
  @supports (font-variation-settings: normal) {
    html { font-family: 'Inter var', sans-serif; }
  }
  h1,h2,h3,h4,h5,h6,p, span {
    font-family: 'Inter', sans-serif;
  }
  h1,h2 {
    font-weight: 600;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  p {
    font-size: 0.8rem;
    color: #9599A8;
  }
  h1 {
    font-size: 2rem;
    color: #4A4A4A;
  }
  h2 {
    color: #4A4A4A;
  }
  h3 {
    color: #4A4A4A;
  }
  h4 {
    color: #4A4A4A;
  }
  h5 {
    color: #4A4A4A;
  }


  a {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
  }

`