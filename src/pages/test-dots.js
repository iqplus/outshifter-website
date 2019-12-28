import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';

import Layout from "../components/layout"
import SEO from "../components/seo"

import Button from '../components/Button/Button'
import Accordeon from '../components/Accordeon/Accordeon'
import Accordeon2 from '../components/Accordeon2/Accordeon2'

import './pages.css';


import Lottie from 'lottie-react-web'
import Animation1 from '../animations/animation1.json'
import Waves from '../animations/waves.json'
import Animation1Phone from '../images/Animation-1-Phone.png'
import DevelopersTest from '../images/developers-final.png'

import Icon1 from '../images/icon-1.png'
import Icon2 from '../images/icon-2.png'
import Icon3 from '../images/icon-3.png'
import Icon4 from '../images/icon-4.png'
import Icon5 from '../images/icon-5.png'

const WavesAnimation = styled.div`
z-index: 1;
position: absolute;
width: 100%;
height: 100%;
pointer-events: none;
`;

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

  render () {
    return (
      
      <Layout className="hidden">
        <SEO title="Home" />

        {/* Banner */}
        <NewBanner>
        <div className={'masthead'}>
          <div className={'container-fluid ' + 'h-100 ' + 'no-gutters'}>
          <WavesAnimation><Lottie options={{animationData: Waves}}/></WavesAnimation>
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

        </Layout>
    );
  }

}

export default WavesPage