import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import './pages.css';
import styled from 'styled-components'

import { Link } from "gatsby"

import ShopifyBlack from '../images/Shopify-Badge-Black.png'
import ShopifyWhite from '../images/Shopify-Badge-White.png'
import { FaCheck } from 'react-icons/fa'

import ButtonOutline from "../components/Buttons/ButtonOutline"

const InnerPages = styled.div`
  hr {
    float: left;
    @media only screen and (max-width: 767px) {
      float: none;
    }
  }
  img {
    height: 75px;
  }
  .main-banner img {
    float: right;
    margin-top: 25%;
    @media only screen and (max-width: 767px) {
      float: none;
      text-align: center;
      margin-top: 0px;
    }
  }
  .shopify {
    padding-top: 10%;
  }
  .shop-left {
    max-width: 500px;
    img {
      margin-top: 15px;
    }
    @media only screen and (max-width: 767px) {
      text-align: center;
      max-width: none;
    }
  }
  .shop-right {
    max-width: 500px;
    float: right;
    padding-right: 10%;
    @media only screen and (max-width: 991px) {
      padding-right: 0px;
    }
    @media only screen and (max-width: 767px) {
      float: none;
      margin-top: 50px;
      max-width: none;
      text-align: center;
    }
  }
  .shop-list {
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

class ShopifyPage extends React.Component {

  componentDidMount() {
    const scriptAftc = document.createElement("script");
    scriptAftc.async = true;
    scriptAftc.src = "./includes/js/aftc.min.js";
    document.head.appendChild(scriptAftc);

    const scriptThree = document.createElement("script");
    scriptThree.async = true;
    scriptThree.src = "./includes/js/three.min.js";
    document.head.appendChild(scriptThree);

    const scriptStats = document.createElement("script");
    scriptStats.async = true;
    scriptStats.src = "./includes/js/stats.min.js";
    document.head.appendChild(scriptStats);

    const scriptApp = document.createElement("script");
    scriptApp.async = true;
    scriptApp.src = "./includes/js/appCompany.js";
    document.head.appendChild(scriptApp);

    const scriptVertex = document.createElement("script");
    scriptVertex.type = "x-shader/x-vertex";
    scriptVertex.id = "vertexshader";
    document.body.appendChild(scriptVertex);
    document.getElementById('vertexshader').append('attribute float scale;attribute vec3 customColor;varying vec3 vColor;void main() {vColor = customColor;vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );gl_PointSize = scale * ( 100.0 / - mvPosition.z );gl_Position = projectionMatrix * mvPosition;}');

    const scriptFragment = document.createElement("script");
    scriptFragment.type = "x-shader/x-fragment";
    scriptFragment.id = "fragmentshader";
    document.body.appendChild(scriptFragment);
    document.getElementById('fragmentshader').append('uniform vec3 ccc;varying vec3 vColor;void main() {  if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.275 ) discard;  gl_FragColor = vec4( ccc * vColor, 1.0 );}');
  }

  render () {
    return (

      <Layout>
      <SEO title="Company" />
      
      <InnerPages>
        <canvas id="canvas1"></canvas>
        <canvas id="canvas2"></canvas>

        {/* Banner */}
        <div className="main-banner">
            <div className={'masthead'}>
              <div className={'container ' + 'h-100 '}>
                <div className="row h-100 main-banner">
                    <div className="col">
                      <h1>Shopify Integration</h1>
                      <p>
                          Outshift products to Shopify<br/>
                          and grow your e-commerce impact.
                      </p>
                      <Link to={'/account'}><ButtonOutline>Outshift to Shopify</ButtonOutline></Link>
                    </div>
                    <div className="col">
                      <img src={ShopifyWhite} alt="shopify logo white" />
                    </div>
                </div>
              </div>
            </div>
        </div>

        {/* Content */}
        <div className="container-fluid back-white shopify after-canvas">
        <div className="container">
          <div className="row">

            <div className="col-12 col-md-6">
              <div className="shop-left">
                <h2>Outshift to Shopify</h2>
                <hr/><br/><br/>
                <p>
                  Source digital and physical products for your Shopify Store for free and start selling immediately. 
                  <br/><br/>
                  Import limitless amounts of products seamlessly. With stock synchronization, instant order fulfillment, 
                  automated payment and shipping solutions, monetization is a breeze.
                </p>
                <img src={ShopifyBlack} alt="shopify logo white" />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="shop-right">
                <h2>Core Features</h2>
                <div className="shop-list">
                  <ul className="listings">
                    <li><FaCheck />Source and sell for free </li>
                    <li><FaCheck />Limitless product import</li>
                    <li><FaCheck />Real-time stock synchronization</li>
                    <li><FaCheck />Automatic transactions and payouts</li>
                    <li><FaCheck />Instant order fullfilmet</li>
                    <li><FaCheck />Add additional sales channels</li>
                  </ul>
                  <div><ButtonOutline>Create Account</ButtonOutline></div>
                </div>
              </div>
            </div>

          </div>
        </div>
        </div>

      </InnerPages>
      </Layout>
    );
  }
}

export default ShopifyPage;