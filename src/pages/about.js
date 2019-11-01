import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from 'styled-components';
import BannerCareer from '../images/banner-career.jpg'
import AboutVision from '../images/about-vision.jpg'
import Button from "../components/button/button"

const Banner = styled.div`
    background-image: url(${BannerCareer});
    width: 100%;
    height: 400px;
    background-position: 0% 25%;
    background-repeat: no-repeat;
    background-size: cover;
    div {
      background-image: linear-gradient(to top right, #5851e5, #3ddff4);
      height: 100%;
      opacity: 0.62;
    }
    @media only screen and (min-width: 1500px) {
      height: 500px;
    }
`;
const ColImage1 = styled.div`
    background-image: url(${AboutVision});
    height: 600px;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 13px;
    background-position: 45% center;
    @media only screen and (max-width: 991px) {
      height: 300px;
    }
`;

const InnerPages = styled.div`
  .intro {
    text-align: center;
    max-width: 650px;
    margin: 0 auto;
    padding-top: 10%;
    padding-bottom: 10%;
  }
  .intro h2 {
    padding-bottom: 25px;
  }
  .intro h5 {
    font-weight: 500;
  }
  .information {
    padding-bottom: 10%;
  }
  .information h4 {
    font-weight: 600;
  }
  .information p {
    font-size: 1rem;
    font-weight: 500;
    color: #4A4A4A;
    text-align: justify;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  @media only screen and (min-width: 992px) {
    .information-col-1 {
      padding-left: 10%;
    }
    .information-col-2 {
      padding-right: 10%;
    }
  }
  @media only screen and (max-width: 1500px) and (min-width: 1400px) {
    .intro {padding-top: 5%;}
  }
  @media only screen and (max-width: 991px) {
    .information-col-1 {
      padding-top: 5%;
    }
    .information-col-2 {
      padding-top: 10%;
    }
  }
`;

const AboutPage = () => (
  <Layout>
  <SEO title="About" />
  
  <InnerPages>
  
    {/* Banner */}
    <div className="container-fluid ">   
      <div className="row banner">
        <Banner><div></div></Banner>
      </div>
    </div>

    {/* Intro */}
    <div className="container">   
      <div className="row intro">
        <div className="col">
          <h2>Disrupting e-commerce</h2>
          <h5>
          Outshifter is the technology company creating the infrastructure for tomorrows decentralized and transparent e-commerce value-chain.
          </h5>
        </div>
      </div>
    </div>

    {/* Info 1 */}
    <div className="container">   
      <div className="row information">
        <div className="col-md-12 col-lg-6 align-self-center">
          <ColImage1 />
        </div>
        <div className="col-md-12 col-lg-6 align-self-center information-col-1">
          <h4>Vision</h4>
          <p>
            We were born out of a desire to disrupt the e-commerce value chain for the better -centred on our belief in transparency, empowerment, ease-of-use and innovation.These beliefs are the cornerstones of our platform and the essence of the term outshifting: 
            <br/><br/>
            -The act distributing products and services to multiple online channels.
            <br/><br/>
            With outshifting we aim to empower both Merchants and Mediators by providing them with the tools, infrastructure and network to scale. Consequently enabling consumers to securely buy what they see, at the places they spend their time online.
          </p>
          <Button>Contact</Button>
        </div>
      </div>
    </div>
  
  </InnerPages>

  </Layout>
)

export default AboutPage
