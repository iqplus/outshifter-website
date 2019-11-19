import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './pages.css';

import Lottie from 'lottie-react-web'
import Animation1 from '../animations/animation1.json'
import Animation1Phone from '../images/Animation-1-Phone.png'

import styled from 'styled-components';

const CommingStyled = styled.div`
  .menu-wrapper {display:none;}
  .footer {display:none;}
`;

const CommingPage = () => (
  <CommingStyled>
  <Layout>
  <SEO title="Home" />

    {/* Banner */}
    <div className={'masthead'}>   
      <div className={'container ' + 'h-100 '}>
        <div className="row h-100 align-items-center main-banner no-gutters">
          <div className="col-md-12 col-lg-5">
            <h1>Outshifter<br/>Coming Soon</h1>
            <p>Website under construction</p>
          </div>
          <div className="col-md-12 col-lg-7">
            <div className="wrapper-animation-1">
              <div className="animation-background"><img src={Animation1Phone}></img></div>
              <Lottie options={{animationData: Animation1}}/>
            </div>
          </div>
        </div>
      </div>
    </div>

  </Layout>
  </CommingStyled>
)

export default CommingPage
