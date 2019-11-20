import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';
import CookieConsent from "react-cookie-consent";

import Layout from "../components/layout"
import SEO from "../components/seo"

import Button from '../components/Button/Button'
import Accordeon from '../components/Accordeon/Accordeon'
import Accordeon2 from '../components/Accordeon2/Accordeon2'

import './pages.css';

import TestIcon from '../images/test-icon.png';

import iconSet from '../icons/selection.json'
import IcomoonReact, {iconList} from 'icomoon-react'

import Lottie from 'lottie-react-web'
import Animation1 from '../animations/animation1.json'
import Animation2 from '../animations/animation2.json'
import Animation3 from '../animations/animation3.json'
import Animation1Phone from '../images/Animation-1-Phone.png'
import Animation2Phone from '../images/Animation-2-Phone.png'
import Animation3Tablet from '../images/Animation-3-Tablet.png'
import DevelopersBackground from '../images/developers-studio-code.png'
import DevelopersTest from '../images/developers-final.png'

import Icon1 from '../images/icon-1.png'
import Icon2 from '../images/icon-2.png'
import Icon3 from '../images/icon-3.png'
import Icon4 from '../images/icon-4.png'
import Icon5 from '../images/icon-5.png'
import IconMediator from '../images/icon-mediator.png'
import IconMerchant from '../images/icon-merchant.png'


const DevAnimation = styled.div`

  .anim--typing-code {
    width: 425px;
  }
  .anim {
    position: relative;
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    flex-shrink: inherit;
    justify-content: center;
  }

  .anim--typing-code .bg {
    background-image: url(${DevelopersTest});
    height: 100%;
  }

  .anim .bg {
    background-size: 100%;
    background-position: center;
    width: 100%;
  }

  .anim .bg {
    background-repeat: no-repeat;
  }

  .anim--typing-code .typewriter {
    position: absolute;
    top: 60px;
    left: 110px;
    width: 89%;
    height: 200px;
    padding: 0 1rem;
    color: #999;
    font-family: 'Courier New',sans-serif;
  }

  .anim--typing-code .typewriter p {
    letter-spacing: .025em;
    font-size: .65em;
    margin: 0;
    line-height: 1.1rem;
    font-weight: 500;
  }
  .section p:not(.bold) {
    font-weight: 300;
  }
  .d-lg-inline {
    display: inline;
  }

  .anim--typing-code .typewriter .protocol {
    color: #f9bd66;
  }


  .ml-4, .mx-4 {
    margin-left: 1.5rem!important;
  }

  .anim--typing-code .typewriter .key {
    color: #5873E5;
  }

  .anim--typing-code .typewriter .value {
    color: #3DCEF4;
  }

  .anim.anim--typing.playing .typing-email {
    animation:
        typing-email 5s steps(40, end) infinite,
        blink-caret-none .75s step-end infinite;
  }
  .anim.anim--typing.playing .typing-name {
    animation:
        typing-name 5s steps(40, end) infinite,
        blink-caret .75s step-end infinite;
    animation-delay: 1s;
  }
  .anim.anim--typing.playing .typing-run {
    animation:
        typing-run 5s steps(40, end) infinite,
        blink-caret-none .75s step-end infinite;
    animation-delay: 2s;
    margin-top: 65px;
    color: #5873E5;
  }
  .anim--typing-code .typewriter .typing {
    overflow: hidden;
    border-right: .2em solid #999;
    white-space: nowrap;
    margin: 0 auto;
  }

  /* Typing effect */
  @keyframes typing-email {
    0% {width: 0;}
    20% {width: 30%;}
    100% {width: 30%;}
  }
  @keyframes typing-name {
    0% {width: 0;}
    20% {width: 20%;}
    100% {width: 20%;}
  }
  @keyframes typing-run {
    0% {width: 0;}
    20% {width: 19%;}
    100% {width: 19%;}
  }
  /* Cursor */
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: orange; }
  }
  @keyframes blink-caret-none {
    from, to { border-color: transparent }
    50% { border-color: transparent; }
  }

  @media only screen and (max-width: 1399px) and (min-width: 1200px) {
    .anim {width: 500px;}
    .d-none {display:none!important;}
    .d-lg-inline {display: none;}
    .anim--typing-code .typewriter {top: 90px;}
    .anim.anim--typing.playing .typing-run {margin-top: 40px;}
    @keyframes typing-email {
      0% {width: 0;}
      20% {width: 40%;}
      100% {width: 40%;}
    }
    @keyframes typing-name {
      0% {width: 0;}
      20% {width: 25%;}
      100% {width: 25%;}
    }
  }
  @media only screen and (max-width: 1199px) {
    .anim {width: 400px;}
    .d-none {display:none!important;}
    .d-lg-inline {display: none;}
    .d-991 {display: none;}
    .anim--typing-code .typewriter {top: 110px; left:85px}
    .anim.anim--typing.playing .typing-run {margin-top: 35px;}
    @keyframes typing-email {
      0% {width: 0;}
      20% {width: 47%;}
      100% {width: 47%;}
    }
    @keyframes typing-name {
      0% {width: 0;}
      20% {width: 32%;}
      100% {width: 32%;}
    }
    @keyframes typing-run {
      0% {width: 0;}
      20% {width: 25%;}
      100% {width: 25%;}
    }
  }
  @media only screen and (max-width: 991px) {
    .anim {margin: 0 auto;}
  }

  @media only screen and (max-width: 450px) {
    .anim {width: 300px;}
    .d-450 {display:none;}
    .anim--typing-code .typewriter {top:139px;left:55px}
    .anim.anim--typing.playing .typing-run {margin-top: 22px;}
    @keyframes typing-email {
      0% {width: 0;}
      20% {width: 65%;}
      100% {width: 65%;}
    }
    @keyframes typing-name {
      0% {width: 0;}
      20% {width: 45%;}
      100% {width: 45%;}
    }
    @keyframes typing-run {
      0% {width: 0;}
      20% {width: 35%;}
      100% {width: 35%;}
    }
  }

`;

class IndexPage extends React.Component {

  render () {
    return (
      
      <Layout className="hidden">
        <SEO title="Home" />

        {/* Cookie Consent */}
        <CookieConsent
          containerClasses="cookie-container"
          contentClasses="cookie-text"
          buttonClasses="cookie-button"
          buttonText="OK"
        >
          Outshifter uses cookies to provide necessary site functionality and improve your experience. By using our website, you agree to our <a href="/terms" target="_blank">privacy policy</a> and our <a href="/terms" target="_blank">cookie policy</a>.
        </CookieConsent>

        {/* Banner */}

        <div className={'masthead'}>   
          <div className={'container ' + 'h-100 '}>
          <div className="row h-100 align-items-center main-banner no-gutters">
            <div className="col-md-12 col-lg-5">
              <h1>Sell Anything<br/>
                To Anyone<br/>
                Anywhere
              </h1>
              <p>
                Outshifter is the complete<br/>
                e-commerce distribution tool.
              </p>
              <Link to={'/account'}><Button>Get started for free</Button></Link>
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

        {/* E-commerce */}

        <div className="container-fluid e-commerce">
          <div className="container">
            <div className="row">
              <div className="col">
                <h2>The Web-Store is History</h2>
                <p>
                  Outshifting is the way of distributing and managing multichannel direct-sales.<br/>
                  Social media, instant messaging and streaming platforms are the future of e-commerce.
                </p>
              </div>
            </div>
            <div class="row e-icons">
              <div class="col-12 col-md-4 col-lg">
                <img src={Icon1}></img>
                <h6>Access</h6>
                <p>Search, filter and connect with Merchants or Mediators.</p>
              </div>
              <div class="col-12 col-md-4 col-lg">
                <img src={Icon2}></img>
                <h6>Products</h6>
                <p>List or source products and services for your Profile</p>
              </div>
              <div class="col-12 col-md-4 col-lg">
                <img src={Icon3}></img>
                <h6>Outshift</h6>
                <p>Seamless product outshifting for multi-channel Direct Selling</p>
              </div>
              <div class="col-12 col-md-6 col-lg">
                <img src={Icon4}></img>
                <h6>Manage</h6>
                <p>Control every aspect of your online distribution in one place</p>
              </div>
              <div class="col-12 col-md-6 col-lg">
                <img src={Icon5}></img>
                <h6>Insights</h6>
                <p>Monitor all orders, channels, data performance and revenue</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mediator */}

        <div className="container">
          <div className="row mediator">        
            <div className="col-md-12 col-lg-6 align-self-center">
              <div className="wrapper-animation-2">
                <div className="animation-background"><img src={Animation2Phone}></img></div>
                <Lottie options={{animationData: Animation2}}/>
              </div>
            </div>
            <div className="user-col col-md-12 col-lg-6 align-self-center">
              <div className="mediator-width">
                <h2>Mediator</h2>
                <p className="user-description">
                  For anyone aspiring to capitalise on their online impact Outshifter enables a seamless income stream. Handpick products
                  and sell directly through your online channels.
                </p>
                <Accordeon />
              </div>
            </div>
          </div>
        </div>

        {/* Merchant */}
        
        <div className="container-fluid merchant">
          <div className="container">
            <div className="row no-gutters">            
              <div className="order-2 order-md-2 order-lg-1 user-col col-md-12 col-lg-6 align-self-center">
                <div className="merchant-width">
                  <h2>Merchant</h2>
                  <p className="user-description">
                    Outshifter is The Distribution-Compounding Tool, enabling Direct-Selling through multiple channels, mediums and
                    Mediators simultaneously. Optimising 1st stage impact on millions of consumers.
                  </p>
                  <Accordeon2 />
                </div>
              </div>
              <div className="order-1 order-md-1 order-lg-2 col-md-12 col-lg-6 align-self-center merchant-width">
                <div className="wrapper-animation-3">
                  <div className="animation-background"><img src={Animation3Tablet}></img></div>
                  <Lottie options={{animationData: Animation3}}/>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing */}

        <div className="container pricing">
          <div className="row text-center">
            <div className="col-12">
              <h2>Pricing</h2>
              <p class="p-pricing">There are no upfront costs, no hidden fees, and no risk to get started.</p>
            </div>
          </div>
          <div className="row pricing-width">
            <div className="col-12 col-sm-12 col-md">
              <div className="box">
                <div className="box-content">
                  <h3>Merchant</h3>
                  <div><img src={IconMerchant} /></div>
                  <ul>
                    <li><IcomoonReact iconSet={iconSet} color="#5851E5" size={15} icon="Check" />Unlimited Number of Listings</li>
                    <li><IcomoonReact iconSet={iconSet} color="#5851E5" size={15} icon="Check" />Unrestricted Channel Utilisation</li>
                    <li><IcomoonReact iconSet={iconSet} color="#5851E5" size={15} icon="Check" />Unlimited Mediator Connections</li>
                    <li><IcomoonReact iconSet={iconSet} color="#5851E5" size={15} icon="Check" />Independent Scaling Enablement</li>
                    <li><IcomoonReact iconSet={iconSet} color="#5851E5" size={15} icon="Check" />Automated Payment Processing</li>
                    <li><IcomoonReact iconSet={iconSet} color="#5851E5" size={15} icon="Check" />Cross-channel Management</li>
                    <li><IcomoonReact iconSet={iconSet} color="#5851E5" size={15} icon="Check" />Seamless Order fulfilment</li>
                    <li><IcomoonReact iconSet={iconSet} color="#5851E5" size={15} icon="Check" />Real-time Data & Insights</li>
                  </ul>
                  <h5>4.8% + 0.18€</h5>
                  <h6>About service fee</h6>
                  <Link to={'/account'}><Button>Create Account</Button></Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md">
              <div className="box">
                <div className="box-content">
                  <h3>Mediator</h3>
                  <div><img src={IconMediator} /></div>
                  <ul>
                    <li><IcomoonReact iconSet={iconSet} color="#3DDFF4" size={15} icon="Check" />Independent Monetization Management</li>
                    <li><IcomoonReact iconSet={iconSet} color="#3DDFF4" size={15} icon="Check" />Unlimited Merchant Connections</li>
                    <li><IcomoonReact iconSet={iconSet} color="#3DDFF4" size={15} icon="Check" />Unrestricted Channel Utilisation</li>
                    <li><IcomoonReact iconSet={iconSet} color="#3DDFF4" size={15} icon="Check" />Unlimited Product Outshifting</li>
                    <li><IcomoonReact iconSet={iconSet} color="#3DDFF4" size={15} icon="Check" />Instant Payment Processing</li>
                    <li><IcomoonReact iconSet={iconSet} color="#3DDFF4" size={15} icon="Check" />Multichannel Direct Sales</li>
                    <li><IcomoonReact iconSet={iconSet} color="#3DDFF4" size={15} icon="Check" />Automated Order Fulfilment</li>
                    <li><IcomoonReact iconSet={iconSet} color="#3DDFF4" size={15} icon="Check" />Real-time Data & Insights</li>
                  </ul>
                  <h5>FREE</h5>
                  <h6>About service</h6>
                  <Link to={'/account'}><Button>Create Account</Button></Link>
                </div>
              </div>
            </div>
          
          </div>
        </div>

        {/* Developers */}

        <div className="container-fluid merchant developer">
          <div className="container">
            <div className="row no-gutters">            
              
              <div className="col-md-12 col-lg-6 align-self-center">
                <DevAnimation>

                  <div className="anim anim--typing anim--typing-code playing">
                    <div className="bg">
                      <div className="typewriter">
                          <p className="d-none d-lg-inline"><span class="protocol">GET</span> <span class="value">.../outshifter/orders/</span> <span className="protocol d-sm_none">HTTP/1.1</span></p>
                          <p className="d-none d-lg-inline">&nbsp;</p>
                          <p>New orders details:</p>
                          <p className="d-450">{"{"}</p>
                          <p className="d-991"><span className="key">"id":</span> <span class="value">"ord_p7ZAMo1xwNJ4xX"</span>,</p>
                          <p className="d-991"><span className="key">"customer_reference":</span> <span class="value">"TSTNC-21"</span>,</p>
                          <p className="d-450"><span className="key">"currency":</span> <span class="value">"Euro"</span>,</p>
                          <p><span className="key">"order_value":</span> <span class="value">100</span></p>
                          <p><span className="key">"customer":</span> {"{"}</p>
                          <p className="ml-4 typing typing-email"><span class="key">"email":</span> <span class="value">"hello@customer.io"</span>,</p>
                          <p className="ml-4 typing typing-name"><span class="key">"name":</span> <span class="value">"John Doe"</span></p>
                          <p className="ml-4 typing typing-run"><span>Run Program</span></p>
                      </div>
                    </div>
                  </div>
    
                </DevAnimation>
              </div>

              <div className="col-md-12 col-lg-6 align-self-center">
                <div className="developer-width">
                  <h2>Customize Extensions</h2>
                  <p>
                  Flexible artchiterure that allows integration with any other third-party API. 
                  </p>
                  <div className="button-dev"><Link to={'/dev'}><Button>Contact us</Button></Link></div>
                </div>
              </div>
          
            </div>
          </div>
        </div>

        </Layout>
    );
  }

}

export default IndexPage