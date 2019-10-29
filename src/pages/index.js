import React from "react"
import { Link } from "gatsby"

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

import Icon1 from '../images/icon-1.png'
import Icon2 from '../images/icon-2.png'
import Icon3 from '../images/icon-3.png'
import Icon4 from '../images/icon-4.png'
import Icon5 from '../images/icon-5.png'
import IconMediator from '../images/icon-mediator.png'
import IconMerchant from '../images/icon-merchant.png'


class IndexPage extends React.Component {
  render () {
    return (
      <Layout>
        <SEO title="Home" />

        {/* Banner */}

        <div className="masthead">   
        <div className="container h-100">
          <div className="row h-100 align-items-center main-banner no-gutters">
            <div className="col-md-12 col-lg-5">
              <h1>Sell Anything<br/>
                To Anyone<br/>
                Anywhere
              </h1>
              <p>
                List products or source products.<br/>
                Outshifting is the ultimate Direct Selling Solution.<br/>
                This is the platform where Merchants and Mediators connect.
              </p>
              <Button>Sign up</Button>
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

        {/* E-commerce */}

        <div className="container-fluid e-commerce">
          <div className="container">
            <div className="row">
              <div className="col">
                <h2>E-commerce is turning Social</h2>
                <p>As the process of purchasing gradually integrates with more aspects of online activity, 
                  the web-store has become a thing of the past. Outshifting is a new online distribution tool 
                  designed to challenge the current value chain by bringing products to where the consumers 
                  are, instead of the other way around.
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
                <p>List or source products and services for your Profile.</p>
              </div>
              <div class="col-12 col-md-4 col-lg">
                <img src={Icon3}></img>
                <h6>Outshift</h6>
                <p>Seamless product outshifting for multi-channel Direct Selling.</p>
              </div>
              <div class="col-12 col-md-6 col-lg">
                <img src={Icon4}></img>
                <h6>Manage</h6>
                <p>Regulate every aspect of your online distribution in one place.</p>
              </div>
              <div class="col-12 col-md-6 col-lg">
                <img src={Icon5}></img>
                <h6>Insights</h6>
                <p>Monitor all orders, channels, data performance and revenue.</p>
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
                <div className="class-animation-2"><Lottie options={{animationData: Animation2}}/></div>
              </div>
            </div>
            <div className="user-col col-md-12 col-lg-6 align-self-center">
              <div className="mediator-width">
                <h2>Mediator</h2>
                <p className="user-description">
                Handpick products to sell directly through your online channels. For influencers, 
                talent, creators, athletes, website proprietors or anyone aspiring to capitalise 
                on their online impact, outshifting enables a seamless income stream.
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
              <div className="user-col col-md-12 col-lg-6 align-self-center">
                <div className="merchant-width">
                  <h2>Merchant</h2>
                  <p className="user-description">
                    Outshifting is The Distribution-Compounding Tool. Enabling Direct-Selling through
                    multiple channels, mediums and Mediators simultaneously, to optimise 1st stage impact
                    on millions of consumers
                  </p>
                  <Accordeon2 />
                </div>
              </div>
              <div className="col-md-12 col-lg-6 align-self-center merchant-width">
                <div className="wrapper-animation-3">
                  <div className="animation-background"><img src={Animation3Tablet}></img></div>
                  <div className="class-animation-3"><Lottie options={{animationData: Animation3}}/></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing */}

        <div className="container pricing">
          <div className="row text-center">
            <div className="col">
              <h2>Pricing</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md">
              <div className="box">
                <div className="box-content">
                  <h3>Merchant</h3>
                  <div><img src={IconMerchant} /></div>
                  <ul>
                    <li><IcomoonReact iconSet={iconSet} color="#5851E5" size={15} icon="Check" />Limitless Number of Listings</li>
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
                  <Button>Create Account</Button>
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
                  <Button>Create Account</Button>
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