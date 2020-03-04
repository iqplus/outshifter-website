import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CookieConsent from "react-cookie-consent";

import styled from 'styled-components';
import './pages.scss';

import { Link } from "gatsby"
import Button from '../components/Buttons/Button'
import ButtonOutline from '../components/Buttons/ButtonOutline'
import { FaAngleDown } from 'react-icons/fa'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/pro-duotone-svg-icons';
import ShopifyWhite from '../images/Shopify-Badge-White.png'
import Lottie from 'lottie-react-web'
import Animation1 from '../animations/animation1.json'
import Animation1Phone from '../images/Animation-1-Phone.png'
import DevelopersTest from '../images/developers-final.png'

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
    color: #4C4C4C;
    font-size: 1rem;
    font-weight: 500;
    margin-top: 10px;
    opacity: 0.84;
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

.parallax {
  position: sticky;
  height: 100%;
  left: 0px;
  top: 200px;
  @media only screen and (max-width: 991px) {
    position: inherit;
    top: none;
    left: none;
    margin-bottom: 50px;
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
    opacity: 0.9;
  }
  p {
    line-height: 2;
    color: #4E4046;
    opacity: 0.84;
  }
  a {
    color: #444244;
    font-size: 0.8rem;
    font-weight: 600;
    opacity: 0.84;
  }
  .svg-inline--fa {
    font-size: 1.3rem;
    vertical-align: -0.3em;
    margin-left: 5px;
  }
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
  margin-bottom: 15rem;
  position: relative;
  z-index: 150;
  @media only screen and (max-width: 991px) {
    margin-bottom: 5rem;
  }
}
.magic-content button {
  margin-bottom: 1rem;
  font-size: 0.8rem;
  padding: 8px 20px;
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
  margin: 0 auto;
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

`;

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
                    Connect your sales community <br/>
                    and grow exponentially.
                  </p>
                  </FadeInSection>
                  <a href="https://app.outshifter.com/"><Button>Get started for free</Button></a>
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

            <div className="row mb-10">

              <div className="col-12 col-lg-7 align-items-center parallax">
                  <div className="wrapper-animation-1">
                    <div className="animation-background"><img src={Animation1Phone}></img></div>
                    <Lottie options={{animationData: Animation1}}/>
                  </div>
              </div>

              <div className="col-12 col-lg-5">
                <div className="magic-content mobile-center universal">
                  <FadeInSection>
                    <h4 id="row-universal">Universal Management</h4>
                    <p>
                      Control your entire e-commerce from a single dashboard: With centralized inventory, 
                      outsourcing enablement, order management and more, for physical and digital products.
                    </p>
                    <Link to={'/solution'}>Learn more <FontAwesomeIcon icon={faAngleRight} /></Link>
                  </FadeInSection>
                </div>
                <div className="magic-content mobile-center">
                  <FadeInSection>
                    <h4>Multichannel Commerce</h4>
                    <p>
                      One complete solution for all your online sales channels. Distribute cross-platform with 
                      powerful listing tools and integrations that bridge content seamlessly.
                    </p>
                    <Link to={'/solution'}>Learn more <FontAwesomeIcon icon={faAngleRight} /></Link>
                  </FadeInSection>
                </div>
                <div className="magic-content mobile-center">
                  <FadeInSection>
                    <h4>Outsourcing Network</h4>
                    <p>
                      Exponentially scale distribution through network effects: Administrate third-party 
                      product access or expand your inventory by sourcing products from other users.
                    </p>
                    <ButtonOutline>Start by sourcing</ButtonOutline>
                    <br/>
                    <Link to={'/solution'}>Learn more <FontAwesomeIcon icon={faAngleRight} /></Link>
                  </FadeInSection>
                </div>
                <div className="magic-content mobile-center">
                  <FadeInSection>
                    <h4>Sales Acceleration</h4>
                    <p>
                      Grow sales by maximizing consumer touchpoints at the 1st stage of their e-commerce journey. 
                      Enable direct purchasing anywhere, with localized payment and shipping options.
                    </p>
                    <Link to={'/solution'}>Learn more <FontAwesomeIcon icon={faAngleRight} /></Link>
                  </FadeInSection>
                </div>
                <div className="magic-content mobile-center">
                  <FadeInSection>
                    <h4>Data Empowerment</h4>
                    <p>
                      Track your networks impact and total sales in real-time to efficiently adjust channel utilization and optimize your cross-platform strategy with total transparency.
                    </p>
                    <Link to={'/solution'}>Learn more <FontAwesomeIcon icon={faAngleRight} /></Link>
                  </FadeInSection>
                </div>
              </div>
            </div>


            <div className="row text-center mb-5">
              <div className="col">
                <a href="https://app.outshifter.com/"><Button>Start outshifting for free</Button></a>
              </div>
            </div>

          </div>
        </div>


        {/* Developers */}

        <div className="container-fluid merchant developer magic">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-12 col-lg-6 align-self-center mobile-center">
                <div className="extentions-content">
                  <FadeInSection>
                    <h3>Customize Extensions</h3>
                    <p>
                      Outshifter supports flexible architecture that allows integration with any other third-party API.
                      <br/><br/>
                      Join our developer community!
                    </p>
                    <Link to={'/solution'}>Documentation <FontAwesomeIcon icon={faAngleRight} /></Link>
                  </FadeInSection>
                </div>
              </div>
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
            </div>

            <div className="row text-center shop-badge mt-10">
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