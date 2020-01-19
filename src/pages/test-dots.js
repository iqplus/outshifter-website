import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';

import Layout from "../components/layout"
import SEO from "../components/seo"

import Button from '../components/Button/Button'

import './pages.css';

import Icon1 from '../images/icon-1.png'
import Icon2 from '../images/icon-2.png'
import Icon3 from '../images/icon-3.png'
import Icon4 from '../images/icon-4.png'
import Icon5 from '../images/icon-5.png'

const NewBanner = styled.div`

margin-top: 200px;

.container-fluid {
  padding-right: 0px;
  padding-left: 0px;
}

h1 {
  font-weight: 900;
}

p {
  color: #4A4A4A;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 30px;
}

`;


class WavesPage extends React.Component {

  componentDidMount() {

    const scriptVertex = document.createElement("script");
    scriptVertex.type = "x-shader/x-vertex";
    scriptVertex.id = "vertexshader";
    document.body.appendChild(scriptVertex);
    document.getElementById('vertexshader').append('attribute float scale;attribute vec3 customColor;varying vec3 vColor;void main() {vColor = customColor;vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );gl_PointSize = scale * ( 100.0 / - mvPosition.z );gl_Position = projectionMatrix * mvPosition;}')

    const scriptFragment = document.createElement("script");
    scriptFragment.type = "x-shader/x-fragment";
    scriptFragment.id = "fragmentshader";
    document.body.appendChild(scriptFragment);
    document.getElementById('fragmentshader').append('uniform vec3 color;varying vec3 vColor;void main() {  if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.275 ) discard;  gl_FragColor = vec4( color * vColor, 1.0 );}')
  }

  render () {
    return (
      
      <Layout className="hidden">
        <SEO title="Home" />

        {/* Banner */}
        <NewBanner>
        <div className={'masthead'}>
          <div className={'container-fluid ' + 'h-100 ' + 'no-gutters'}>
            <div className="container">
                <div className="row h-100 align-items-center">
                  <div className="col-md-12 col-lg-4">
                    <h1>Sell Anything<br/>
                      Through Anyone<br/>
                      Anywhere
                    </h1>
                  </div>
                  <div className="col-md-12 col-lg-4 text-center">
                    <p>
                      Outshifter is the most powerfull<br/>
                      e-commerce distribution tool.
                    </p>
                    <Link to={'/account'}><Button>Get started for free</Button></Link>
                  </div>
                </div>
            </div>
        </div>
        </div>
        </NewBanner>

        <canvas id="canvas1"></canvas>
        <canvas id="canvas2"></canvas>


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
            <div className="row e-icons">
              <div className="col-12 col-md-4 col-lg">
                <img src={Icon1}></img>
                <h6>Access</h6>
                <p>Search, filter and connect with Merchants or Mediators.</p>
              </div>
              <div className="col-12 col-md-4 col-lg">
                <img src={Icon2}></img>
                <h6>Products</h6>
                <p>List or source products and services for your Profile</p>
              </div>
              <div className="col-12 col-md-4 col-lg">
                <img src={Icon3}></img>
                <h6>Outshift</h6>
                <p>Seamless product outshifting for multi-channel Direct Selling</p>
              </div>
              <div className="col-12 col-md-6 col-lg">
                <img src={Icon4}></img>
                <h6>Manage</h6>
                <p>Control every aspect of your online distribution in one place</p>
              </div>
              <div className="col-12 col-md-6 col-lg">
                <img src={Icon5}></img>
                <h6>Insights</h6>
                <p>Monitor all orders, channels, data performance and revenue</p>
              </div>
            </div>
          </div>
        </div>

        </Layout>
    );
  }

}

export default WavesPage