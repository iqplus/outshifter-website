import React from "react"

import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import './layout.css'
import Header from "./header"

import { Link } from 'gatsby'
import {Helmet} from "react-helmet"

import 'bootstrap/dist/css/bootstrap.css';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './../global';
import { theme } from './../theme';

import Loading from './loading.js';
import Footer from "./footer"

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
      <Helmet>
        <script>{`onReady(function(){new App();})`}</script>
      </Helmet>
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
