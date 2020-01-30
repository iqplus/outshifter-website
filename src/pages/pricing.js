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
        scriptApp.src = "./includes/js/app.js";
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
                          No setup costs, no monthly fees and no hidden fees.<br/>
                          We only charge per transaction to ensure you ROI.
                        </p>
                        <a href="'https://dx6lpv6uyfg06.cloudfront.net/login"><ButtonOutline>Get started for free</ButtonOutline></a>
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
                          <a href="'https://dx6lpv6uyfg06.cloudfront.net/login"><ButtonOutline>Start by Outsourcing</ButtonOutline></a>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                          <h4>Transaction Fee</h4>
                          <p>4.8% + € 0.18  is charged from the sales of the products you list. That's it.</p>
                          <a href="'https://dx6lpv6uyfg06.cloudfront.net/login"><ButtonOutline>Start outsourcing for free</ButtonOutline></a>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                          <h4>Free Trial</h4>
                          <p>Your first 100 sales transactions are free! Try outshifting without any catch or cost.</p>
                          <a href="'https://dx6lpv6uyfg06.cloudfront.net/login"><ButtonOutline>Create account</ButtonOutline></a>
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
