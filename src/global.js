import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  
/*************** Global ***************/

*, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.white};
    text-rendering: optimizeLegibility;
  }

  .back-white {
    background: white;
  }

  .listings {
    display:inline-block;
    text-align:left;
    color: #4A4A4A;
    padding-left: 0px;
    li {  
      line-height:2em;
      padding-left:0px;
      padding-top:5px;
      padding-bottom:5px;
      font-size:14px;
      list-style-type:none;
      list-style:none;
      display: table-row;
    }
    svg {
      margin-right: 20px;
      color: #4A90E2;
    }
  }

  @media only screen and (min-width: 768px) {
    .mobil {display: none;}
    .container {max-width: 90%!important;}
  }

  @media only screen and (min-width: 1400px) {
    .container {max-width: 1280px!important;}
  }
  
  @media only screen and (max-width: 767px) {
    .desktop {display: none;}
    h1, h2 {
      text-align: center;
    }
  }
  
  /*************** Fonts styling ***************/

  @import url('https://rsms.me/inter/inter.css');
  html { font-family: 'Inter', sans-serif; }
  @supports (font-variation-settings: normal) {
    html { font-family: 'Inter var', sans-serif; }
  }
  h1,h2,h3,h4,h5,h6,p, span {
    font-family: 'Inter', sans-serif;
  }
  h1 {
    font-weight: 600;
  }
  h2 {
      font-weight: 900;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  p {
    font-size: 0.8rem;
    color: #4A4A4A;
  }
  h1 {
    color: #4A4A4A;
    font-weight: 900!important;
  }
  h2 {
    color: #4A4A4A;
    font-weight: 900!important;
  }
  h3 {
    color: #4A4A4A;
    font-weight: 900!important;
  }
  h4 {
    color: #4A4A4A;
    font-weight: 900!important;
  }
  h5 {
    color: #4A4A4A;
  }
  h6 {
    color: #4A4A4A;
  }
  a {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
  }

`

export const MailUrl = 'https://outshifter-backend.herokuapp.com/send'