import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import './layout.css'
import Header from "./header"

import 'bootstrap/dist/css/bootstrap.css';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './../global';
import { theme } from './../theme';

import Loading from './loading.js';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
  <Loading>
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <Header siteTitle={'Outshifter'} />
      <div>
        <main>{children}</main>
        <footer>
          <div className="container footer">
            <div className="row">
              <div className="col"><p>Terms & Conditions</p></div>
              <div className="col"><p>Legal Notice</p></div>
              <div className="col"><p>Privacy Policy</p></div>
            </div>
            <div className="row">
              <div className="col">
                <p>© 2019 Outshifter AS. All rights reserved.</p>
                </div>
            </div>
          </div>
        </footer>
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
