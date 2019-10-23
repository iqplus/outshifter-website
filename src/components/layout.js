import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import './layout.css'
import Header from "./header"

import 'bootstrap/dist/css/bootstrap.css';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './../global';
import { theme } from './../theme';

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
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <footer>
          <div className="container footer">
            <div className="row">
              <div className="col"><p>Terms & Conditions</p></div>
              <div className="col"><p>Terms & Conditions</p></div>
              <div className="col"><p>Terms & Conditions</p></div>
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
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
