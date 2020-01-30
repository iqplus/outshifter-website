import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CookieConsent from "react-cookie-consent";

import styled from 'styled-components';
import './pages.scss';

import { Link } from "gatsby"
import Button from '../components/Buttons/Button'
import ButtonOutline from '../components/Buttons/ButtonOutline'
import ButtonCircle from '../components/Buttons/ButtonCircle'
import { FaAngleRight } from 'react-icons/fa'
import { FaAngleDown } from 'react-icons/fa'

import ShopifyWhite from '../images/Shopify-Badge-White.png'
import LogoWhite from '../images/logo-mobil_white.png'
import LogoExtentions from '../images/outshifter-logo-extentions.png'
import DotsBackground from '../images/dots-background-desktop.png'
import DotsBackgroundMobile from '../images/dots-background-mobile-2.png'


import Lottie from 'lottie-react-web'
import LogoBack from '../animations/logo-back.json'
import BulletsAzulTurquesa from '../animations/bullets-azul-turquesa.json'
import BulletsAzulVioleta from '../animations/bullets-azul-violeta.json'
import BulletsTurquesaVioleta from '../animations/bullets-turquesa-violeta.json'
import BulletsVioletaTurquesa from '../animations/bullets-violeta-turquesa.json'
import BulletsTurquesaAzul from '../animations/bullets-turquesa-azul.json'
import BulletsVioletaAzul from '../animations/bullets-violeta-azul.json'
import DotsSphere from '../animations/dots-sphere.json'

const CircleIcon = styled.div`
  border: none;
  display: inline-block;
  border-radius: 50%;
  color: white;
  position: relative;
  z-index: 1;

  padding-top: 2px;
  padding-bottom: 3px;
  padding-right: 7px;
  padding-left: 7px;

  background: #5873e5;
  background: -moz-linear-gradient(left, #5873e5 0%, #3dcef4 100%);
  background: -webkit-gradient(linear, left top, right top, color-stop(0%,#5873e5), color-stop(100%,#3dcef4));
  background: -webkit-linear-gradient(left, #5873e5 0%,#3dcef4 100%);
  background: -o-linear-gradient(left, #5873e5 0%,#3dcef4 100%);
  background: -ms-linear-gradient(left, #5873e5 0%,#3dcef4 100%);
  background: linear-gradient(to right, #5873e5 0%,#3dcef4 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5873e5', endColorstr='#3dcef4',GradientType=1 );
`;

const Forside = styled.div`
.main-banner {
  p {
    color: #4A4A4A;
    font-size: 1rem;
    font-weight: 500;
    margin-top: 10px;
  }
  .how-works {
    background: white;
    border-radius:30px;
    padding:10px;
    position: absolute;
    z-index: 25;
    bottom: 50px;
    right: 50px;
    box-shadow: rgb(226, 226, 226) 1px 1px 5px 2px;
    svg {
      -moz-animation: bounce 3s infinite;
      -webkit-animation: bounce 3s infinite;
      animation: bounce 3s infinite;
    }
    &:hover {
      box-shadow: rgb(221,223,221) 1px 1px 5px 6px;
    }
    p {
      display: inline;
      margin-left: 10px;
    }
    @media only screen and (max-width: 991px) {
      display: none;
    }
  }
}
@-moz-keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    -moz-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -moz-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  60% {
    -moz-transform: translateY(-5px);
    transform: translateY(-5px);
  }
}
@-webkit-keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  60% {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
  }
}
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -moz-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  60% {
    -moz-transform: translateY(-5px);
    -ms-transform: translateY(-5px);
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
  }
}

.universal h4::before { 
  display: block; 
  content: " "; 
  margin-top: -285px; 
  height: 285px; 
  visibility: hidden; 
  pointer-events: none;
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
  @media only screen and (max-width: 991px) {
    position:inherit;
  }
}
.universal img {
  max-width: 45px;
  position: absolute;
  z-index: 3;
  bottom: 194px;
  left: 681px;
  display:none;
}
@media only screen and (max-width: 991px) {
  .universal .float-right {
    float: none!important;
  }
  .universal .logo-animation {
    text-align: center;
    margin-bottom: 50px;
  }
}
/* Dot line animation Universal */
#dot-universal {
  @media only screen and (max-width: 991px) {
    display: none;
  }
}
#dot-line-1 {
  transform: rotate(190deg);
  animation-delay: 2s;
  right: 265px;
  top: -21px;
}
#dot-line-1 .c-dashed-line__dash {
  stroke: #5873e5; /* this must match the background color */
}
#dot-line-2 {
  transform: rotate(182deg);
  right: 230px;
  top: 48px;
}
#dot-line-2 .c-dashed-line__dash {
  stroke: #3dcef4;
}
#dot-line-3 {
  transform: rotate(173deg);
  right: 195px;
  top: 122px;
}
#dot-line-3 .c-dashed-line__dash {
  stroke: #5873e5; /* this must match the background color */
}
#dot-line-4 {
  transform: rotate(160deg);
  left: 458px;
  top: 125px;
}
#dot-line-4 .c-dashed-line__dash {
  stroke: #3dcef4; /* this must match the background color */
}
.dot-line-1000 {
  display: none;
}

/* Dot line animation Multichannel */
#dot-multichannel {
  display: none;
  position: relative;
  bottom: 888px;
  left: 108px;
  @media only screen and (max-width: 991px) {
    display: none;
  }
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
#dot-outsourcing-2 {
  position: relative;
  top: 691px;
  left: 56px;
  transform: rotate(-17deg);
  @media only screen and (max-width: 991px) {
    display: none;
  }
}
#dot-multichannel-2 {
  position: relative;
  top: 174px;
  right: 828px;
  transform: rotate(-79deg);
  @media only screen and (max-width: 1399px) and (min-width: 992px) {
    right: 550px;
  }
  @media only screen and (max-width: 991px) {
    display: none;
  }
}
/* Dot line animation Outsourcing */
#dot-outsourcing {
  display: none;
  @media only screen and (max-width: 991px) {
    display: none;
  }
}
#dot-line-9 {
  transform: rotate(360deg);
  top: 0px;
  right: 0px;
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
    animation: c-dashed-line-path 5s ease-in-out infinite alternate;
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
  @media only screen and (max-width: 991px) {
    display: inherit;
  }
}
.multichannel li {
  display: contents;
  margin-right: 15px;
  @media only screen and (max-width: 991px) {
    display: inline-flex;
    margin-bottom: 15px;
  }
}
.multichannel svg {
  max-width: 30px;
  position: relative;
  bottom: 2px;
}
.outsourcing ul {
  padding-left: 0px;
  text-align: center;
  @media only screen and (max-width: 991px) {
    display: none;
  }
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
@media only screen and (max-width: 1199px) and (min-width: 992px) {
  .li-dots-display svg {display: none;}
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
/*extentions-logo img {
  max-width: 400px;
  position: absolute;
  top: 0px;
  right: 0px;
}*/

.sales-background img {
  position: absolute;
  top: -100px;
  max-width: 700px;
  opacity: .5;
  background-repeat: no-repeat;
  @media only screen and (max-width: 991px) {
    display: none;
  }
}

.sales-background-right img {
  position: absolute;
  top: -100px;
  right: 0px;
  max-width: 700px;
  opacity: .5;
  background-repeat: no-repeat;
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  filter: FlipH;
  -ms-filter: "FlipH";
  @media only screen and (max-width: 991px) {
    display: none;
  }
}

.sales-background-mobile img {
  position: absolute;
  max-width: 325px;
  opacity: .5;
  background-repeat: no-repeat;
  @media only screen and (min-width: 992px) {
    display: none;
  }
}

.animation-background {
  position: absolute;
}

.wrapper-animation-1 {
  display: flex;
  align-items: stretch;
  max-width: 400px;
  margin: 0 auto;
}

.wrapper-animation-1 img {
  max-width: 100%;
  height: auto;
}

`;

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}


class WavesPage extends React.Component {

  componentDidMount(){
    document.querySelector('#canvas1').style.visibility = "visible"
    document.querySelector('#canvas2').style.visibility = "visible"
  }
  render () {
    return (
      
      <Layout className="hidden">
        <SEO title="Home" />
        <CookieConsent
          containerClasses="cookie-container"
          contentClasses="cookie-text"
          buttonClasses="cookie-button"
          buttonText="OK"
        >
          Outshifter uses cookies to provide necessary site functionality and improve your experience. By using our website, you agree to our <a href="/terms" target="_blank">privacy policy</a> and our <a href="/terms" target="_blank">cookie policy</a>.
        </CookieConsent>
        <Forside>

        <div className="main-banner">
  
          <div className={'masthead'}>
            <div className={'container ' + 'h-100 '}>
              <div className="row h-100 main-banner no-gutters">
                <div className="col text-center">
                  <FadeInSection>
                  <h1>The Sales Network</h1>
                  <p>
                    Connect your sales community<br/>
                    and grow exponentially.
                  </p>
                  </FadeInSection>
                  <a href="https://dx6lpv6uyfg06.cloudfront.net/"><Button>Get started for free</Button></a>
                </div>
              </div>
            </div>
          </div>
          <Link to={'#row-universal'}>
            <div className="how-works">
              <CircleIcon><FaAngleDown /></CircleIcon><p>How outshifting works</p>
            </div>
          </Link>  
        </div>

        {/* Where the magic begins */}
        <div className="container-fluid back-white after-canvas magic">
          <div className="container">

            <div className="row mb-10 universal">
              <div className="col-12 order-2 order-lg-1 col-lg-8">
                <div className="float-right">
                  <div className="logo-animation">
                    <Lottie options={{animationData: LogoBack}}/>
                    <img src={LogoWhite} alt="logo white" />
                  </div>
                  <div className="dot-animation" id="dot-outsourcing-2">
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
                    <svg id="dot-line-3" class="c-dashed-line" width="850" height="240" xmlns="http://www.w3.org/2000/svg" >
                      <defs>
                        <path id="c-dashed-line" d="M300 0s3 30-150 150-435 120-435 120"/>
                      </defs>
                      {/* A dashed white line that sits on top of the solid green line */}
                      <use class="c-dashed-line__dash" xlinkHref="#c-dashed-line"/>
                      {/* A solid green line that we'll animate */}
                      <use class="c-dashed-line__path" xlinkHref="#c-dashed-line"/>
                    </svg>
                    <svg id="dot-line-1000" class="c-dashed-line" width="250" height="240" xmlns="http://www.w3.org/2000/svg" >
                      <defs>
                        <path id="c-dashed-line" d="M300 0s3 30-150 150-435 120-435 120"/>
                      </defs>
                      {/* A dashed white line that sits on top of the solid green line */}
                      <use class="c-dashed-line__dash" xlinkHref="#c-dashed-line"/>
                      {/* A solid green line that we'll animate */}
                      <use class="c-dashed-line__path" xlinkHref="#c-dashed-line"/>
                    </svg>
                  </div>
                  <div className="dot-animation" id="dot-universal">
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
                    <svg id="dot-line-3" class="c-dashed-line" width="850" height="240" xmlns="http://www.w3.org/2000/svg" >
                      <defs>
                        <path id="c-dashed-line" d="M300 0s3 30-150 150-435 120-435 120"/>
                      </defs>
                      {/* A dashed white line that sits on top of the solid green line */}
                      <use class="c-dashed-line__dash" xlinkHref="#c-dashed-line"/>
                      {/* A solid green line that we'll animate */}
                      <use class="c-dashed-line__path" xlinkHref="#c-dashed-line"/>
                    </svg>
                    <svg id="dot-line-1000" class="c-dashed-line" width="250" height="240" xmlns="http://www.w3.org/2000/svg" >
                      <defs>
                        <path id="c-dashed-line" d="M300 0s3 30-150 150-435 120-435 120"/>
                      </defs>
                      {/* A dashed white line that sits on top of the solid green line */}
                      <use class="c-dashed-line__dash" xlinkHref="#c-dashed-line"/>
                      {/* A solid green line that we'll animate */}
                      <use class="c-dashed-line__path" xlinkHref="#c-dashed-line"/>
                    </svg>
                  </div>
                  <div className="dot-animation" id="dot-multichannel-2">
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
                    <svg id="dot-line-3" class="c-dashed-line" width="850" height="240" xmlns="http://www.w3.org/2000/svg" >
                      <defs>
                        <path id="c-dashed-line" d="M300 0s3 30-150 150-435 120-435 120"/>
                      </defs>
                      {/* A dashed white line that sits on top of the solid green line */}
                      <use class="c-dashed-line__dash" xlinkHref="#c-dashed-line"/>
                      {/* A solid green line that we'll animate */}
                      <use class="c-dashed-line__path" xlinkHref="#c-dashed-line"/>
                    </svg>
                    <svg id="dot-line-1000" class="c-dashed-line" width="250" height="240" xmlns="http://www.w3.org/2000/svg" >
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
              <div className="col-12 order-1 order-lg-2 col-lg-4">
                <div className="magic-content">
                <FadeInSection>

                  <h4 id="row-universal">Universal Management</h4>
                  <p>
                    Control your entire e-commerce from a single dashboard: With centralized inventory, 
                    outsourcing enablement, order management and more, for physical and digital products.
                  </p>
                  <Link to={'/solution'}>Learn more <FaAngleRight /></Link>
                  </FadeInSection>

                </div>
              </div>
            </div>
            <div className="row mb-15 multichannel">
              <div className="col-12 order-2 order-lg-1 col-lg-7 text-center dot-dots">
                <ul>
                  <li><Lottie options={{animationData: BulletsVioletaAzul}}/>API</li>
                  <li><Lottie options={{animationData: BulletsAzulTurquesa}}/>Storefront</li>
                  <li><Lottie options={{animationData: BulletsTurquesaVioleta}}/>Websites</li>
                  <li><Lottie options={{animationData: BulletsVioletaTurquesa}}/>Socialmedia</li>
                  <li><Lottie options={{animationData: BulletsAzulVioleta}}/>Marketplaces</li>
                  <li><Lottie options={{animationData: BulletsTurquesaAzul}}/>Dropshipping</li>
                </ul>
              </div>
              <div className="col-12 order-1 order-lg-2 col-lg-5">
                <div className="magic-content">
                <FadeInSection>

                  <h4>Multichannel Commerce</h4>
                  <p>
                    One complete solution for all your online sales-channels. Distribute cross-platform with
                    powerfull listing tools and integrations that bridges content seamlessly. 
                  </p>
                  <Link to={'/solution'}>Learn more <FaAngleRight /></Link>
                  </FadeInSection>

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
                  <li className="li-dots-display"><Lottie options={{animationData: BulletsVioletaAzul}}/></li>
                  <li className="li-dots-display"><Lottie options={{animationData: BulletsAzulTurquesa}}/></li>
                  <li className="li-dots-display"><Lottie options={{animationData: BulletsTurquesaVioleta}}/></li>
                  <li className="li-dots-display"><Lottie options={{animationData: BulletsVioletaTurquesa}}/></li>
                  <li className="li-dots-display"><Lottie options={{animationData: BulletsAzulVioleta}}/></li>
                  <li className="li-dots-display"><Lottie options={{animationData: BulletsTurquesaAzul}}/></li>
                </ul>
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
              </div>
              <div className="col-lg-4">
                <div className="magic-content mobile-center">
                <FadeInSection>

                  <h4>Outsourcing Network</h4>
                  <p>
                    Exponetially scale distribution trough network effects: Administrate third-party product 
                    access or expand your inventory by sourcing products from other users. 
                  </p>
                  <ButtonOutline>Start by sourcing</ButtonOutline>
                  <br/>
                  <Link to={'/solution'}>Learn more <FaAngleRight /></Link>
                  </FadeInSection>

                </div>
              </div>
            </div>
            <div className="row mb-10">
              <div className="col">
                <div className="sales-background"><img src={DotsBackground} alt="dots backgorund left"/></div>
                <div className="sales-background-right"><img src={DotsBackground} alt="dots backgorund right"/></div>
                <div className="sales-background-mobile"><img src={DotsBackgroundMobile} alt="dots backgorund mobile"/></div>
                <div className="magic-content mx-auto">
                <FadeInSection>

                  <h4>Sales Acceleration</h4>
                  <p>
                    Grow sales by maximizing consumer touch points at the 1st stage of their e-commerce journey. 
                    Enable direct purchasing anywhere, with localized payment and shipping options.
                  </p>
                  <Link to={'/solution'}>Learn more <FaAngleRight /></Link>
                  </FadeInSection>

                </div>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col">
                <div className="magic-content float-left">
                <FadeInSection>

                  <h4>Data Empowerment</h4>
                  <p>
                    Track your networks impact and total sales in real-time to efficiently adjust channel utilization and optimize your cross-platform strategy with total transparency.
                  </p>
                  <Link to={'/solution'}>Learn more <FaAngleRight /></Link>
                  </FadeInSection>

                </div>
              </div>
            </div>
            <div className="row text-center mb-5">
              <div className="col">
                <a href="'https://dx6lpv6uyfg06.cloudfront.net/login"><Button>Start outshifting for free</Button></a>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid extentions pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-12 col-2 col-lg-1 col-lg-6 align-self-center text-center extentions-logo">
                <div className="wrapper-animation-1">
                  <Lottie options={{animationData: DotsSphere}}/>
                  <div className="animation-background"><img src={LogoExtentions} alt='logo' /></div>
                </div>
              </div>
              <div className="col-12 col-1 col-lg-2 col-lg-6 align-self-center">
                <div className="extentions-content">
                <FadeInSection>

                  <h3>Customize Extentions</h3>
                  <p>
                    Outshifter supports flexible architecture that allows integration with any other third-party API.
                    <br/><br/>
                    Join our developer community!
                  </p>
                  <Link to={'/solution'}>Documentation <FaAngleRight /></Link>
                  </FadeInSection>

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