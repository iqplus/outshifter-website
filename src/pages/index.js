import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Button from '../components/Button/Button'
import Accordeon from '../components/Accordeon/Accordeon'

import './pages.css';

import TestIcon from '../images/test-icon.png';

import iconSet from '../icons/selection.json'
import IcomoonReact, {iconList} from 'icomoon-react'

import Lottie from 'lottie-react-web'



class IndexPage extends React.Component {
  render () {
    return (
      <Layout>
        <SEO title="Home" />

        {/* Banner */}

        <div className="masthead">   
        <div className="container h-100">
          <div className="row h-100 align-items-center main-banner">
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
                <div className="animation-background"></div>
                <div className="class-animation"></div>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Banner */}

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
                <div className="empty-space"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Mediator */}

        <div className="container">
          <div className="row mediator">        
            <div className="col-md-12 col-lg-6 align-self-center">
              <div className="wrapper-animation-2">
                <div className="animation-background"></div>
                <div className="class-animation-2"></div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 align-self-center">
              <h2>Mediator</h2>
              <p>
              Handpick products to sell directly through your online channels. For influencers, 
              talent, creators, athletes, website proprietors or anyone aspiring to capitalise 
              on their online impact, outshifting enables a seamless income stream.
              </p>
              <Accordeon/>
            </div>
          </div>
        </div>

        {/* Merchant */}
        
        <div className="container-fluid merchant">
          <div className="container">
            <div className="row">            
              <div className="col-md-12 col-lg-6 align-self-center">
                <h2>Merchant</h2>
                <p>
                Handpick products to sell directly through your online channels. For influencers, 
                talent, creators, athletes, website proprietors or anyone aspiring to capitalise 
                on their online impact, outshifting enables a seamless income stream.
                </p>
                <Accordeon/>
              </div>
              <div className="col-md-12 col-lg-6 align-self-center">
                <div className="wrapper-animation-2">
                  <div className="animation-background"></div>
                  <div className="class-animation-2"></div>
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
              <p>Design is the creation of a plan or convention for the construction of an object, systemDesign is th.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md">
              <div className="box">
                <div className="box-content">
                  <h3>Merchant</h3>
                  <div><img src={TestIcon} /></div>
                  <ul>
                    <li><IcomoonReact iconSet={iconSet} color="#5851E5" size={15} icon="Check" />Admin console and audit log</li>
                    <li><IcomoonReact iconSet={iconSet} color="#5851E5" size={15} icon="Check" />Granular sharing permissions</li>
                    <li><IcomoonReact iconSet={iconSet} color="#5851E5" size={15} icon="Check" />User and company-managed groups</li>
                    <li><IcomoonReact iconSet={iconSet} color="#5851E5" size={15} icon="Check" />Smart Sync</li>
                    <li><IcomoonReact iconSet={iconSet} color="#5851E5" size={15} icon="Check" />Remote device wipe</li>
                    <li><IcomoonReact iconSet={iconSet} color="#5851E5" size={15} icon="Check" />Admin console and audit log</li>
                    <li><IcomoonReact iconSet={iconSet} color="#5851E5" size={15} icon="Check" />120 days of file recovery</li>
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
                  <div><img src={TestIcon} /></div>
                  <ul>
                    <li><IcomoonReact iconSet={iconSet} color="#3DDFF4" size={15} icon="Check" />Admin console and audit log</li>
                    <li><IcomoonReact iconSet={iconSet} color="#3DDFF4" size={15} icon="Check" />Granular sharing permissions</li>
                    <li><IcomoonReact iconSet={iconSet} color="#3DDFF4" size={15} icon="Check" />User and company-managed groups</li>
                    <li><IcomoonReact iconSet={iconSet} color="#3DDFF4" size={15} icon="Check" />Smart Sync</li>
                    <li><IcomoonReact iconSet={iconSet} color="#3DDFF4" size={15} icon="Check" />Remote device wipe</li>
                    <li><IcomoonReact iconSet={iconSet} color="#3DDFF4" size={15} icon="Check" />Admin console and audit log</li>
                    <li><IcomoonReact iconSet={iconSet} color="#3DDFF4" size={15} icon="Check" />120 days of file recovery</li>
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