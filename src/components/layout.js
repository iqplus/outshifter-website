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
        <script src="/src/animations/ParticleWaves/includes/js/aftc.min.js" />
        <script src="/src/animations/ParticleWaves/includes/js/aftc.min.js" />
        <script src="/src/animations/ParticleWaves/includes/js/three.min.js" />
        <script src="/src/animations/ParticleWaves/includes/js/stats.min.js" />
        <script src="/src/animations/ParticleWaves/includes/js/app.js" />
        <script
            dangerouslySetInnerHTML={{
                __html:`
                onReady(function(){
                    new App();
                })
                `
            }}
        />
      </Helmet>
      <div>
        <main className="main-class">{children}</main>
        <footer>
          <div className="container footer">
            <div className="row footer-links">
              <div className="col-12 col-sm-12 col-md"><Link to={'/terms'}>Terms & Conditions</Link></div>
              <div className="col-12 col-sm-12 col-md"><Link to={'/terms'}>Legal Notice</Link></div>
              <div className="col-12 col-sm-12 col-md"><Link to={'/terms'}>Privacy Policy</Link></div>
            </div>
          </div>
          <div className="container">
            <div className="row copyright">
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
