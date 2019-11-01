import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Lottie from 'lottie-react-web'
import Animation1 from '../animations/animation1.json'
import Animation1Phone from '../images/Animation-1-Phone.png'

const AboutPage = () => (
  <Layout>
  <SEO title="About" />
  
    {/* Banner */}
    <div className={'masthead'}>   
      <div className={'container ' + 'h-100 '}>
        <div className="row h-100 align-items-center main-banner no-gutters">
          <div className="col-md-12 col-lg-5">
            <h1>About Page<br/>Coming Soon</h1>
            <p>Page under construction</p>
          </div>
          <div className="col-md-12 col-lg-7">
            <div className="wrapper-animation-1">
              <div className="animation-background"><img src={Animation1Phone}></img></div>
              <div className="class-animation"><Lottie options={{animationData: Animation1}}/></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </Layout>
)

export default AboutPage
