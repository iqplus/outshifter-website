import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

import { Link } from "gatsby"

import ButtonOutline from '../components/Buttons/ButtonOutline'
import MyBox from '../components/Box/MyBox'
import WorldMap from '../images/world-map.png'

import { FaSlidersH } from 'react-icons/fa'
import { FaCheck } from 'react-icons/fa'


const FeatureStylePage = styled.div`
.pricing-cols {
  padding-top: 10%;
  padding-bottom: 10%;
  img {
    margin-top: 5rem;
    max-width: 100%;
  }
  h4 {
    margin-bottom: 2rem;
  }
  p {
    padding-bottom: 2rem;
    max-width: 300px;
    margin: 0 auto;
  }
  button {
    font-size: 0.8rem;
  }
}
.include-title {
  margin-top: 1rem;
  margin-bottom: 2rem;
  h5 {
    display: inline;
  }
  svg {
    margin-right: 20px;
    font-size: 28px;
    position: relative;
    bottom: 2px;
  }
}
`;

class PricingPage extends React.Component {

  componentDidMount(){
    document.querySelector('#canvas1').style.visibility = "visible"
    document.querySelector('#canvas2').style.visibility = "visible"
  }

  render() {
    return (
      <Layout>
      <SEO title="Pricing" />
      <FeatureStylePage>            
      <div className="main-banner text-center">
        <canvas id="canvas1"></canvas>
        <canvas id="canvas2"></canvas>
        <div className={'masthead'}>
            <div className={'container ' + 'h-100 '}>
            <div className="row h-100 main-banner no-gutters">
                <div className="col">
                <h1>Pricing</h1>
                <p>
                  No setup costs, no monthly fees and no hidden fees. <br/>
                  We only charge per transaction.                        
                </p>
                <a href="https://app.outshifter.com/"><ButtonOutline>Get started for free</ButtonOutline></a>
                </div>
            </div>
            </div>
          </div>
      </div>

      <div className="container-fluid pricing-cols back-white after-canvas">
          <div className="container">   
              <div className="row text-center">
                  <div className="col-md-6 col-lg-4 mb-5">
                    <h4>Sourcing & Listing</h4>
                    <p>Listing products and selling sourced products is completely free.</p>
                  </div>
                  <div className="col-md-6 col-lg-4 mb-5">
                    <h4>Transaction Fee</h4>
                    <p>4.8% of the sales value + € 0.18 is charged per sales transaction on products you list.</p>
                  </div>
                  <div className="col-md-6 col-lg-4 mb-5">
                    <h4>Free Trial</h4>
                    <p>Your first 100 sales transactions are free! There´s no catch!</p>
                  </div>
              </div>
              <div className="row text-center">
                <div className="col">
                  <a href="https://app.outshifter.com/"><ButtonOutline>Start outshifting</ButtonOutline></a>
                </div>
              </div>
              <div className="row text-center">
                <div className="col">
                  <img src={WorldMap} alt="world map" />
                </div>
              </div>

          </div>
      </div>


      </FeatureStylePage>
      </Layout>
    );
  }
}
  
export default PricingPage;
