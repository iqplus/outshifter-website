import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from 'styled-components';
import './pages.css';

import { Link } from "gatsby"
import Button from '../components/Buttons/Button'
import ButtonOutline from '../components/Buttons/ButtonOutline'
import ButtonCircle from '../components/Buttons/ButtonCircle'
import { FaAngleRight } from 'react-icons/fa'
import { FaAngleDown } from 'react-icons/fa'

import ShopifyWhite from '../images/Shopify-Badge-White.png'
import LogoWhite from '../images/logo-mobil_white.png'
import Logo from '../images/outshifter-logo.png'


import Lottie from 'lottie-react-web'
import LogoBack from '../animations/logo-back.json'
import LogoRipple from '../animations/logo-ripple-effect.json'
import BulletsAzulTurquesa from '../animations/bullets-azul-turquesa.json'
import BulletsAzulVioleta from '../animations/bullets-azul-violeta.json'
import BulletsTurquesaVioleta from '../animations/bullets-turquesa-violeta.json'
import BulletsVioletaTurquesa from '../animations/bullets-violeta-turquesa.json'
import BulletsTurquesaAzul from '../animations/bullets-turquesa-azul.json'
import BulletsVioletaAzul from '../animations/bullets-violeta-azul.json'
import DotsSphere from '../animations/dots-sphere.json'


const Forside = styled.div`
.main-banner {
  p {
    color: #4A4A4A;
    font-size: 1rem;
    font-weight: 500;
    margin-top: 10px;
  }
  .how-works {
    position: absolute;
    z-index: 25;
    bottom: 50px;
    right: 50px;
    @media only screen and (max-width: 991px) {
      display: none;
    }
  }
  .how-works p {
    display: inline;
    margin-left: 10px;
  }
}
.magic {
  h4 {
    margin-bottom: 1rem;
  }
  p {
    line-height: 2;
  }
}

.universal .logo-animation svg {
  max-width: 200px;
  position: absolute;
  bottom: 90px;
  right: 50px;
  z-index: 2;
  opacity:0.5;
}
.universal img {
  max-width: 45px;
  position: absolute;
  z-index: 3;
/*  bottom: 194px;
  left: 681px;*/
}

/* Dot line animation Universal */
#dot-line-1 {
  transform: rotate(180deg);
  animation-delay: 2s;

  right: 265px;
  top: -11px;
}
#dot-line-1 .c-dashed-line__dash {
  stroke: #5873e5; /* this must match the background color */
}
#dot-line-2 {
  transform: rotate(170deg);
  right: 229px;
  top: 114px;
}
#dot-line-2 .c-dashed-line__dash {
  stroke: #3dcef4;
}
#dot-line-3 {
  transform: rotate(170deg);
  right: 121px;
  top: 102px;
}
#dot-line-3 .c-dashed-line__dash {
  stroke: #5873e5; /* this must match the background color */
}
#dot-line-4 {
  transform: rotate(160deg);
  left: -48px;
  top: 156px;
}
#dot-line-4 .c-dashed-line__dash {
  stroke: #3dcef4; /* this must match the background color */
}

/* Dot line animation Multichannel */
#dot-multichannel {
  position: relative;
  bottom: 888px;
  left: 108px;
}
#dot-line-5 {
  transform: rotate(280deg);
  right: 719px;
  top: 296px;
}
#dot-line-5 .c-dashed-line__dash {
  stroke: #5873e5; /* this must match the background color */
}
#dot-line-6 {
  transform: rotate(285deg);
  right: 719px;
  top: 296px;
}
#dot-line-6 .c-dashed-line__dash {
  stroke: #3dcef4;
}
#dot-line-7 {
  transform: rotate(290deg);
  right: 719px;
  top: 296px;
}
#dot-line-7 .c-dashed-line__dash {
  stroke: #5873e5; /* this must match the background color */
}
#dot-line-8 {
  transform: rotate(295deg);
  right: 719px;
  top: 296px;
}
#dot-line-8 .c-dashed-line__dash {
  stroke: #3dcef4; /* this must match the background color */
}
/* Dot line animation Multichannel */
#dot-outsourcing {
  position: relative;
  bottom: 682px;
  left: 765px;
}
#dot-line-9 {
  transform: rotate(360deg);
  right: 719px;
  top: 296px;
}
#dot-line-9 .c-dashed-line__dash {
  stroke: #5873e5; /* this must match the background color */
}
#dot-line-10 {
  transform: rotate(355deg);
  right: 719px;
  top: 296px;
}
#dot-line-10 .c-dashed-line__dash {
  stroke: #3dcef4;
}
#dot-line-11 {
  transform: rotate(350deg);
  right: 719px;
  top: 296px;
}
#dot-line-11 .c-dashed-line__dash {
  stroke: #5873e5; /* this must match the background color */
}
#dot-line-12 {
  transform: rotate(345deg);
  right: 719px;
  top: 296px;
}
#dot-line-12 .c-dashed-line__dash {
  stroke: #3dcef4; /* this must match the background color */
}
/* Dot Animation Generales */
.dot-animation {
  svg {
    position: absolute;
    z-index: 1;
  }
  .c-dashed-line__path {
    animation: c-dashed-line-path 6s ease-in-out infinite alternate;
    fill: none;
    stroke: white;
    stroke-dasharray: 940; /* this is the entire length of the line */
    stroke-dashoffset: 940; /* this is the entire length of the line */
    stroke-width: 5;
  }
  .c-dashed-line__dash {
    fill: none;
    stroke-dasharray: 1 15; /* draws a 10px dash line with a 16px gap between */
    stroke-width: 5; /* make the dashed line slightly bigger than the one it's covering */
    stroke-linecap: round;
    stroke-opacity: 0.5;
  }
  @keyframes c-dashed-line-path {
    to {
      stroke-dashoffset: 0;
    }
    from {
      stroke-dashoffset: 940;
    }
  }
}

.magic-content {
  max-width: 400px;
  margin-bottom: 5rem;
  position: relative;
  z-index: 50;
}
.multichannel ul {
  padding-left: 0px;
  display: flex;
}
.multichannel li {
  display: contents;
  margin-right: 15px;
}
.multichannel svg {
  max-width: 30px;
  position: relative;
  bottom: 2px;
}
.outsourcing ul {
  padding-left: 0px;
  text-align: center;
}
.outsourcing li {
  display: inline-flex;
}
.outsourcing svg {
  max-width: 25px;
}
.outsourcing button {
  margin-bottom: 1rem;
}
.extentions {
  background: #F5F7F8;
  svg {
    max-width: 400px;
  }
}
.extentions-content {
  max-width: 400px;
}
.extentions-logo img {
  max-width: 75px;
  position: absolute;
  top: 171px;
  right: 274px;
}
`;

class WavesPage extends React.Component {

  componentDidMount() {
    const scriptAftc = document.createElement("script");
    scriptAftc.async = true;
    scriptAftc.src = "../includes/js/aftc.min.js";
    document.head.appendChild(scriptAftc);

    const scriptThree = document.createElement("script");
    scriptThree.async = true;
    scriptThree.src = "../includes/js/three.min.js";
    document.head.appendChild(scriptThree);

    const scriptStats = document.createElement("script");
    scriptStats.async = true;
    scriptStats.src = "../includes/js/stats.min.js";
    document.head.appendChild(scriptStats);

    const scriptApp = document.createElement("script");
    scriptApp.async = true;
    scriptApp.src = "../includes/js/app.js";
    document.head.appendChild(scriptApp);

    const scriptAppTest = document.createElement("script");
    scriptAppTest.async = true;
    scriptAppTest.src = "../includes/js/appTest.js";
    document.head.appendChild(scriptAppTest);

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
      
      <Layout className="hidden">
        <SEO title="Home" />
        <Forside>

        <div className="main-banner">

          <canvas id="canvas1"></canvas>
          <canvas id="canvas2"></canvas>
          <div className={'masthead'}>
            <div className={'container ' + 'h-100 '}>
              <div className="row h-100 main-banner no-gutters">
                <div className="col text-center">
                  <h1>The Sales Network</h1>
                  <p>
                    Connect your sales community<br/>
                    and grow exponentially.
                  </p>
                  <Link to={'/account'}><Button>Get started for free</Button></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="how-works">
            <Link to={''}><ButtonCircle><FaAngleDown /></ButtonCircle></Link><p>How outshifting works</p>
          </div>

        </div>

        {/* Where the magic begins */}
        <div className="container-fluid back-white after-canvas magic">
          <div className="container">

            <div className="row mb-10 universal">
              <div className="col-lg-8 ">
                <div className="float-right">
                  <div className="logo-animation">
                    <Lottie options={{animationData: LogoBack}}/>
                    <img src={LogoWhite} alt="logo white" />
                  </div>
                  <div className="dot-animation">
                    <svg id="dot-line-1" class="c-dashed-line" width="880" height="240" xmlns="http://www.w3.org/2000/svg" >
                      <defs>
                        <path id="c-dashed-line" d="M300 0s3 30-150 150-435 120-435 120"/>
                      </defs>
                      {/* A dashed white line that sits on top of the solid green line */}
                      <use class="c-dashed-line__dash" xlinkHref="#c-dashed-line"/>
                      {/* A solid green line that we'll animate */}
                      <use class="c-dashed-line__path" xlinkHref="#c-dashed-line"/>
                    </svg>
                    <svg id="dot-line-2" class="c-dashed-line" width="880" height="240" xmlns="http://www.w3.org/2000/svg" >
                      <defs>
                        <path id="c-dashed-line" d="M300 0s3 30-150 150-435 120-435 120"/>
                      </defs>
                      {/* A dashed white line that sits on top of the solid green line */}
                      <use class="c-dashed-line__dash" xlinkHref="#c-dashed-line"/>
                      {/* A solid green line that we'll animate */}
                      <use class="c-dashed-line__path" xlinkHref="#c-dashed-line"/>
                    </svg>
                    <svg id="dot-line-3" class="c-dashed-line" width="880" height="240" xmlns="http://www.w3.org/2000/svg" >
                      <defs>
                        <path id="c-dashed-line" d="M300 0s3 30-150 150-435 120-435 120"/>
                      </defs>
                      {/* A dashed white line that sits on top of the solid green line */}
                      <use class="c-dashed-line__dash" xlinkHref="#c-dashed-line"/>
                      {/* A solid green line that we'll animate */}
                      <use class="c-dashed-line__path" xlinkHref="#c-dashed-line"/>
                    </svg>
                    <svg id="dot-line-4" class="c-dashed-line" width="880" height="240" xmlns="http://www.w3.org/2000/svg" >
                      <defs>
                        <path id="c-dashed-line" d="M300 0s3 30-150 150-435 120-435 120"/>
                      </defs>
                      {/* A dashed white line that sits on top of the solid green line */}
                      <use class="c-dashed-line__dash" xlinkHref="#c-dashed-line"/>
                      {/* A solid green line that we'll animate */}
                      <use class="c-dashed-line__path" xlinkHref="#c-dashed-line"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="magic-content">
                  <h4>Universal Management</h4>
                  <p>
                    Control your entire e-commerce from a single dashboard: With centralized inventory, 
                    outsourcing enablement, order management and more, for physical and digital products.
                  </p>
                  <Link to={'/solution'}>Learn more <FaAngleRight /></Link>
                </div>
              </div>
            </div>
            <div className="row mb-15 multichannel">
              <div className="col-lg-7 text-center dot-dots">
                <ul>
                  <li><Lottie options={{animationData: BulletsVioletaAzul}}/>API</li>
                  <li><Lottie options={{animationData: BulletsAzulTurquesa}}/>Storefront</li>
                  <li><Lottie options={{animationData: BulletsTurquesaVioleta}}/>Websites</li>
                  <li><Lottie options={{animationData: BulletsVioletaTurquesa}}/>Socialmedia</li>
                  <li><Lottie options={{animationData: BulletsAzulVioleta}}/>Marketplaces</li>
                  <li><Lottie options={{animationData: BulletsTurquesaAzul}}/>Dropshipping</li>
                </ul>
              </div>
              <div className="col-lg-5">
                <div className="magic-content">
                  <h4>Multichannel Commerce</h4>
                  <p>
                    One complete solution for all your online sales-channels. Distribute cross-platform with
                    powerfull listing tools and integrations that bridges content seamlessly. 
                  </p>
                  <Link to={'/solution'}>Learn more <FaAngleRight /></Link>
                </div>
              </div>
            </div>
            <div className="dot-animation" id="dot-multichannel">
              <svg id="dot-line-5" class="c-dashed-line" width="880" height="240" xmlns="http://www.w3.org/2000/svg" >
                <defs>
                  <path id="c-dashed-line" d="M300 0s3 30-150 150-435 120-435 120"/>
                </defs>
                {/* A dashed white line that sits on top of the solid green line */}
                <use class="c-dashed-line__dash" xlinkHref="#c-dashed-line"/>
                {/* A solid green line that we'll animate */}
                <use class="c-dashed-line__path" xlinkHref="#c-dashed-line"/>
              </svg>
              <svg id="dot-line-6" class="c-dashed-line" width="880" height="240" xmlns="http://www.w3.org/2000/svg" >
                <defs>
                  <path id="c-dashed-line" d="M300 0s3 30-150 150-435 120-435 120"/>
                </defs>
                {/* A dashed white line that sits on top of the solid green line */}
                <use class="c-dashed-line__dash" xlinkHref="#c-dashed-line"/>
                {/* A solid green line that we'll animate */}
                <use class="c-dashed-line__path" xlinkHref="#c-dashed-line"/>
              </svg>
              <svg id="dot-line-7" class="c-dashed-line" width="880" height="240" xmlns="http://www.w3.org/2000/svg" >
                <defs>
                  <path id="c-dashed-line" d="M300 0s3 30-150 150-435 120-435 120"/>
                </defs>
                {/* A dashed white line that sits on top of the solid green line */}
                <use class="c-dashed-line__dash" xlinkHref="#c-dashed-line"/>
                {/* A solid green line that we'll animate */}
                <use class="c-dashed-line__path" xlinkHref="#c-dashed-line"/>
              </svg>
              <svg id="dot-line-8" class="c-dashed-line" width="880" height="240" xmlns="http://www.w3.org/2000/svg" >
                <defs>
                  <path id="c-dashed-line" d="M300 0s3 30-150 150-435 120-435 120"/>
                </defs>
                {/* A dashed white line that sits on top of the solid green line */}
                <use class="c-dashed-line__dash" xlinkHref="#c-dashed-line"/>
                {/* A solid green line that we'll animate */}
                <use class="c-dashed-line__path" xlinkHref="#c-dashed-line"/>
              </svg>
            </div>
            <div className="row outsourcing mb-10">
              <div className="col-lg-8">
                <ul>
                  <li><Lottie options={{animationData: BulletsVioletaAzul}}/></li>
                  <li><Lottie options={{animationData: BulletsAzulTurquesa}}/></li>
                  <li><Lottie options={{animationData: BulletsTurquesaVioleta}}/></li>
                  <li><Lottie options={{animationData: BulletsVioletaTurquesa}}/></li>
                  <li><Lottie options={{animationData: BulletsAzulVioleta}}/></li>
                  <li className="mr-3"><Lottie options={{animationData: BulletsTurquesaAzul}}/></li>
                  <li><Lottie options={{animationData: BulletsVioletaAzul}}/></li>
                  <li><Lottie options={{animationData: BulletsAzulTurquesa}}/></li>
                  <li><Lottie options={{animationData: BulletsTurquesaVioleta}}/></li>
                  <li><Lottie options={{animationData: BulletsVioletaTurquesa}}/></li>
                  <li><Lottie options={{animationData: BulletsAzulVioleta}}/></li>
                  <li className="mr-3"><Lottie options={{animationData: BulletsTurquesaAzul}}/></li>
                  <li><Lottie options={{animationData: BulletsVioletaAzul}}/></li>
                  <li><Lottie options={{animationData: BulletsAzulTurquesa}}/></li>
                  <li><Lottie options={{animationData: BulletsTurquesaVioleta}}/></li>
                  <li><Lottie options={{animationData: BulletsVioletaTurquesa}}/></li>
                  <li><Lottie options={{animationData: BulletsAzulVioleta}}/></li>
                  <li className="mr-3"><Lottie options={{animationData: BulletsTurquesaAzul}}/></li>
                  <li><Lottie options={{animationData: BulletsVioletaAzul}}/></li>
                  <li><Lottie options={{animationData: BulletsAzulTurquesa}}/></li>
                  <li><Lottie options={{animationData: BulletsTurquesaVioleta}}/></li>
                  <li><Lottie options={{animationData: BulletsVioletaTurquesa}}/></li>
                  <li><Lottie options={{animationData: BulletsAzulVioleta}}/></li>
                  <li><Lottie options={{animationData: BulletsTurquesaAzul}}/></li>
                </ul>
              </div>
              <div className="col-lg-4">
                <div className="magic-content">
                  <h4>Outsourcing Network</h4>
                  <p>
                    Exponetially scale distribution trough network effects: Administrate third-party product 
                    access or expand your inventory by sourcing products from other users. 
                  </p>
                  <ButtonOutline>Start by sourcing</ButtonOutline>
                  <br/>
                  <Link to={'/solution'}>Learn more <FaAngleRight /></Link>
                </div>
              </div>
            </div>
            <div className="dot-animation" id="dot-outsourcing">
              <svg id="dot-line-9" class="c-dashed-line" width="880" height="240" xmlns="http://www.w3.org/2000/svg" >
                <defs>
                  <path id="c-dashed-line" d="M300 0s3 30-150 150-435 120-435 120"/>
                </defs>
                {/* A dashed white line that sits on top of the solid green line */}
                <use class="c-dashed-line__dash" xlinkHref="#c-dashed-line"/>
                {/* A solid green line that we'll animate */}
                <use class="c-dashed-line__path" xlinkHref="#c-dashed-line"/>
              </svg>
              <svg id="dot-line-10" class="c-dashed-line" width="880" height="240" xmlns="http://www.w3.org/2000/svg" >
                <defs>
                  <path id="c-dashed-line" d="M300 0s3 30-150 150-435 120-435 120"/>
                </defs>
                {/* A dashed white line that sits on top of the solid green line */}
                <use class="c-dashed-line__dash" xlinkHref="#c-dashed-line"/>
                {/* A solid green line that we'll animate */}
                <use class="c-dashed-line__path" xlinkHref="#c-dashed-line"/>
              </svg>
              <svg id="dot-line-11" class="c-dashed-line" width="880" height="240" xmlns="http://www.w3.org/2000/svg" >
                <defs>
                  <path id="c-dashed-line" d="M300 0s3 30-150 150-435 120-435 120"/>
                </defs>
                {/* A dashed white line that sits on top of the solid green line */}
                <use class="c-dashed-line__dash" xlinkHref="#c-dashed-line"/>
                {/* A solid green line that we'll animate */}
                <use class="c-dashed-line__path" xlinkHref="#c-dashed-line"/>
              </svg>
              <svg id="dot-line-12" class="c-dashed-line" width="880" height="240" xmlns="http://www.w3.org/2000/svg" >
                <defs>
                  <path id="c-dashed-line" d="M300 0s3 30-150 150-435 120-435 120"/>
                </defs>
                {/* A dashed white line that sits on top of the solid green line */}
                <use class="c-dashed-line__dash" xlinkHref="#c-dashed-line"/>
                {/* A solid green line that we'll animate */}
                <use class="c-dashed-line__path" xlinkHref="#c-dashed-line"/>
              </svg>
            </div>
            <div className="row mb-10">
              <div className="col">
                <div className="magic-content mx-auto">
                  <h4>Sales Acceleration</h4>
                  <p>
                    Grow sales by maximizing consumer touch points at the 1st stage of their e-commerce journey. 
                    Enable direct purchasing anywhere, with localized payment and shipping options.
                  </p>
                  <Link to={'/solution'}>Learn more <FaAngleRight /></Link>
                </div>
              </div>
            </div>
            <canvas id="canvas21"></canvas>
            <canvas id="canvas22"></canvas>
            <div className="row mb-5">
              <div className="col">
                <div className="magic-content float-left">
                  <h4>Data Empowerment</h4>
                  <p>
                    Track your networks impact and total sales in real-time to efficiently adjust channel utilization and optimize your cross-platform strategy with total transparency.
                  </p>
                  <Link to={'/solution'}>Learn more <FaAngleRight /></Link>
                </div>
              </div>
            </div>
            <div className="row text-center mb-5">
              <div className="col">
                <Button>Start outshifting for free</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid extentions pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col align-self-center text-center extentions-logo">
                <img src={Logo} alt='logo' />
                <Lottie options={{animationData: DotsSphere}}/>         
              </div>
              <div className="col align-self-center">
                <div className="extentions-content">
                  <h3>Customize Extentions</h3>
                  <p>
                    Outshifter supports flexible architecture that allows integration with any other third-party API.
                    <br/><br/>
                    Join our developer community!
                  </p>
                  <Link to={'/solution'}>Documentation <FaAngleRight /></Link>
                </div>
              </div>
            </div>
            <div className="row text-center shop-badge">
              <div className="col">
                <img src={ShopifyWhite} alt='shopify badge white' />
              </div>
            </div>  
          </div>
        </div>

        </Forside>
        </Layout>
    );
  }

}

export default WavesPage