import React from "react"

import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import './layout.css'
import Header from "./header"

import { Link } from 'gatsby'
import {Helmet} from "react-helmet"

import 'bootstrap/dist/css/bootstrap.css';
import '../pages/pages.scss';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './../global';
import { theme } from './../theme';

import Loading from './loading.js';
import Footer from "./footer"

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  fad, faHomeLgAlt, faGem, faAnalytics, faFileInvoice,
  faTags, faUserFriends, faSearch, faChartNetwork,
  faInfo, faCode, faQuestion,
  faShieldAlt, faLockAlt
} from '@fortawesome/pro-duotone-svg-icons';

library.add(
  fad, faHomeLgAlt, faGem, faAnalytics, faFileInvoice, faTags, faUserFriends,
  faSearch, faChartNetwork,
  faInfo, faCode, faQuestion,
  faShieldAlt, faLockAlt
);


const Layout = ({ children }) => {
  
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
  <Loading>
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <Header siteTitle={'Outshifter'} />
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="svg-settings">
        <defs>
          <linearGradient id="linear" gradientTransform="rotate(90)" >
            <stop class="linear-stop1" offset="0%"></stop>
            <stop class="linear-stop2" offset="100%"></stop>
          </linearGradient>
            
          <linearGradient id="linear-2">
            <stop class="linear-stop-1" offset="0%"></stop>
            <stop class="linear-stop-2" offset="100%"></stop>
          </linearGradient>
        </defs>
      </svg>
      <div>
        <main className="main-class">{children}</main>
        <Footer/>
      </div>
    </>
    </ThemeProvider>
  </Loading>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
