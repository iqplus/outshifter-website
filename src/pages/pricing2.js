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
.included{
  position: relative;
z-index:100;

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

 

    render() {
        return (
            <Layout>
            <SEO title="Pricing" />
            <FeatureStylePage>            
            <div className="main-banner text-center pricing-banner">
                <canvas id="canvas1"></canvas>
                <canvas id="canvas2"></canvas>
                <div className={'masthead'}>
                    <div className={'container ' + 'h-100 '}>
                    <div className="row h-100 main-banner no-gutters">
                        <div className="col">
                        <h1>Pricing</h1>
                        <p>
                          No setup costs, no monthly fees and no hidden fees.<br/>
                          We only charge per transaction to ensure you ROI.
                        </p>
                        <Link to={'/account'}><ButtonOutline>Get started for free</ButtonOutline></Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid pricing-cols back-white after-canvas">
                <div className="container">   
                    <div className="row text-center">
                        <div className="col-md-6 col-lg-4 mb-5">
                          <h4>Sourcing</h4>
                          <p>Sourcing products and selling through Outshifter is always completly free.</p>
                          <ButtonOutline>Start by Outsourcing</ButtonOutline>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                          <h4>Transaction Fee</h4>
                          <p>4.8% + € 0.18  is charged from the sales of the products you list. That's it.</p>
                          <ButtonOutline>Start outsourcing for free</ButtonOutline>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                          <h4>Free Trial</h4>
                          <p>Your first 100 sales transactions are free! Try outshifting without any catch or cost.</p>
                          <ButtonOutline>Create account</ButtonOutline>
                        </div>
                    </div>
                    <div className="row text-center">
                      <div className="col">
                        <img src={WorldMap} alt="world map" />
                      </div>
                    </div>

                </div>
            </div>
            <div className="pricing-bg-image"></div>
            <div className="container included">

              <div className="row text-center mb-5">
                <div className="col">
                    <h2>What's included</h2>
                    <hr/>
                </div>
              </div>

              <div className="row text-center">
                  <div className="col-md-6 col-xl-4 mb-5">
                    <MyBox>
                      <div className="include-title fill-gradient-linear">
                        <FaSlidersH /><h5>Management</h5>
                      </div>
                      <ul className="listings">
                        <li><FaCheck/>Inventory control & reel-time updates</li>
                        <li><FaCheck/>Syncronizeed orders & status changes</li>
                        <li><FaCheck/>Channels and outsorucing administration</li>
                        <li><FaCheck/>Multichannel data and insights</li>
                      </ul>
                    </MyBox>
                  </div>
                  <div className="col-md-6 col-xl-4 mb-5">
                    <MyBox>
                      <div className="include-title">
                        <FaSlidersH /><h5>Channels</h5>
                      </div>
                      <ul className="listings">
                        <li><FaCheck/>Webpages</li>
                        <li><FaCheck/>Sosial media</li>
                        <li><FaCheck/>Marketplaces</li>
                        <li><FaCheck/>Outshifter Storefront</li>
                      </ul>
                    </MyBox>
                  </div>
                  <div className="col-md-6 col-xl-4 mb-5">
                    <MyBox>
                      <div className="include-title">
                        <FaSlidersH /><h5>Network</h5>
                      </div>  
                      <ul className="listings">
                        <li><FaCheck/>Inventory control & reel-time updates</li>
                        <li><FaCheck/>Syncronizeed orders & status changes</li>
                        <li><FaCheck/>Channels and outsorucing administration</li>
                        <li><FaCheck/>Multichannel data and insights</li>
                      </ul>
                    </MyBox>
                  </div>
                  <div className="col-md-6 col-xl-4 mb-5">
                    <MyBox>
                      <div className="include-title">
                        <FaSlidersH /><h5>Sales</h5>
                      </div>
                      <ul className="listings">
                        <li><FaCheck/>Inventory control & reel-time updates</li>
                        <li><FaCheck/>Syncronizeed orders & status changes</li>
                        <li><FaCheck/>Channels and outsorucing administration</li>
                        <li><FaCheck/>Multichannel data and insights</li>
                      </ul>
                    </MyBox>
                  </div>
                  <div className="col-md-6 col-xl-4 mb-5">
                    <MyBox>
                      <div className="include-title">
                        <FaSlidersH /><h5>Analytics</h5>
                      </div>
                      <ul className="listings">
                        <li><FaCheck/>Inventory control & reel-time updates</li>
                        <li><FaCheck/>Syncronizeed orders & status changes</li>
                        <li><FaCheck/>Channels and outsorucing administration</li>
                        <li><FaCheck/>Multichannel data and insights</li>
                      </ul>
                    </MyBox>
                  </div>
                  <div className="col-md-6 col-xl-4 mb-5">
                    <MyBox>
                      <div className="include-title">
                        <FaSlidersH /><h5>Developers</h5>
                      </div>  
                      <ul className="listings">
                        <li><FaCheck/>Webpages</li>
                        <li><FaCheck/>Sosial media</li>
                        <li><FaCheck/>Marketplaces</li>
                        <li><FaCheck/>Outshifter Storefront</li>
                      </ul>
                    </MyBox>
                  </div>
                </div>

              </div>
              
            </FeatureStylePage>
            </Layout>
        );
    }
}
  
export default PricingPage;
