import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import './pages.css';
import styled from 'styled-components'

import { Link } from "gatsby"

import Button from "../components/Buttons/Button"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/pro-duotone-svg-icons'

import ShopifyBlack from '../images/Shopify-Badge-Black.png'
import ShopifyWhite from '../images/Shopify-Badge-White.png'
import BannerPhoneCase from '../images/Banner-Blue-Wave-Phone-Case-min.png'
import BannerSneakers from '../images/Box-Super-Sneakers-min.png'
import IconOutshifter from '../images/shopify-outshifter-min.png'
import IconConnect from '../images/shopify-connect-min.png'
import IconSell from '../images/shopify-sell-min.png'
import IconImport from '../images/shopify-import-min.png'
import BoxAccount from '../images/Box-Marie-Raleigh-min.png'
import ImageChannels from '../images/image-channels-centered-min.png'
import ImageNetwork from '../images/image-Network-min.png'
import ImageProducts from '../images/image-Products-min.png'
import ImageOrders from '../images/image-Orders-min.png'
import ImageShipping from '../images/image-Shipping-min.png'
import ImageAnalytics from '../images/image-Analytics-centered-min.png'
import ImageBannerMobile from '../images/Shopify-banner-mobile-min.png'


const InnerPages = styled.div`
  .width-991 {
    max-width: 1000px;
    margin: 0 auto;
  }
  .banner-content {
    max-width: 400px;
    margin: 0 auto;
  }
  .banner-title {
    p {
      color: #676767;
      opacity: 0.84;
      margin-top: 1rem;
      margin-bottom: 2rem;
    }
  }
  .banner-extra-text {
    margin-top: 5rem;
    h6 {
      font-weight: 500;
      color: #737070;
      opacity: 0.84;
      font-size: 0.8rem;
      margin-bottom: 1rem;
    }
    p {
      font-weight: 500;
      color: #999999;
      opacity: 0.84;
      font-size: 0.6rem;
      line-height: 2;
    }
  }
  .banner-box {
    width: 250px;
    display: block;
  }
  .p-sneakers {
    padding-top: 10%;
  }
  .shopi-badge {
    width: 200px;
    margin-left: 25px;
    @media only screen and (max-width: 991px) {
      margin-left: 0px;
    }
  }
  .shopi-icons {
    img {max-width: 75px;}
    h5 {
      font-weight: bold!important;
      margin-top: 2rem;
      margin-bottom: 1rem;
    }
    p {
      color: #737373;
      opacity: 0.84;
    }
    @media only screen and (max-width: 991px) {
      margin-top: 75px;
    }
  }
  .col-content {
    max-width: 400px;
    p {
      color: #4E4046;
      opacity: 0.84;
    }
    a {
      color: #444244;
      opacity: 0.84;
      font-size: 0.8rem;
    }
    .fa-secondary {
      fill: #444244!important;
      color: #444244!important;
      opacity: 0.84!important;
    }
    .fa-primary {
      fill: #444244!important;
      color: #444244!important;
      opacity: 0.84!important;
    }
    @media only screen and (max-width: 991px) {
      margin: 0 auto;
      h3 {margin-top: 2rem;}
    }
  }
  .col-image-box {
    img {
      max-width: 300px; 
    }
  }
  .col-image-standard {
    img {
      max-width: 400px;
    }
  }
  .col-image-channels {
    img {
      max-width: 500px;
      @media only screen and (max-width: 991px) {max-width: 350px;}
    }
  }
  .col-image-analytics {
    img {
      max-width: 550px;
      @media only screen and (max-width: 991px) {max-width: 350px;}
    }
  }
  .col-image-two-box {
    img {
      max-width: 450px;
    }
  }
  .p-channels {
    padding-top: 200px;
  }
  .p-analytics {
    padding-top: 200px;
  }
  .col-float-right {
    @media only screen and (min-width: 992px) {
      float: right;
    }
  }
  @media only screen and (max-width: 991px) {
    .image-wrapper-991 img {
      max-width: 100%;
      height: auto;
    }
  }
  @media only screen and (max-width: 500px) {
    .image-wrapper img {
      max-width: 100%;
      height: auto;
    }
  }
`;

class ShopifyPage extends React.Component {

  componentDidMount(){
    document.querySelector('#canvas1').style.visibility = "hidden"
    document.querySelector('#canvas2').style.visibility = "hidden"
  }

  render () {
    return (

      <Layout>
      <SEO title="Company" />
      
      <InnerPages>

        {/* Banner */}
        <div>
            <div className={'masthead'}>
              <div className={'container ' + 'h-100 '}>
                <div className="row h-100 align-items-center mobile-center mt-150-mob">
                    <div className="col-12 col-lg-6 align-items-center">
                      <div className="banner-content">
                        <div className="banner-title">
                          <h1>Outshift to Shopify</h1>
                          <p>
                              Connect your sales community <br/>
                              and grow exponentially.
                          </p>
                          <Link to={'https://app.outshifter.com/'}><Button>Get started</Button></Link>
                        </div>
                        <div className="banner-extra-text">
                          <h6>Sourcing products from Outshifter is and will always be FREE.</h6>
                          <p>
                            Outshifter launched in March 2020. We´re constantly growing and 
                            updating available channels, products and suppliers, so make sure you 
                            check out our offering regularly.
                          </p>
                        </div>
                        <div className="no-display-desktop">
                          <div className="image-wrapper-991 mt-5 mb-5">
                            <img src={ImageBannerMobile} alt="shopify banner mobile" />
                            <img className="shopi-badge mt-5" src={ShopifyBlack} alt="shopify logo white" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-lg-3 p-sneakers align-items-center no-display-mobile">
                      <img className="banner-box" src={BannerSneakers} alt="shopify banner" />
                    </div>
                    <div className="col-6 col-lg-3 align-items-center no-display-mobile">
                      <img className="banner-box" src={BannerPhoneCase} alt="shopify banner" />
                      <img className="shopi-badge" src={ShopifyBlack} alt="shopify logo white" />
                    </div>
                </div>
              </div>
            </div>
        </div>

        {/* Shopify Icons */}
        <div className="container shopi-icons text-center">
          <div className="row width-991">
            <div className="col-lg-3">
              <img src={IconOutshifter} alt="shopify icon outshifter" />
              <h5>Sign up</h5>
              <p>Create your Outshifter Account</p>
            </div>
            <div className="col-lg-3">
              <img src={IconConnect} alt="shopify icon connect" />
              <h5>Connect</h5>
              <p>Connect your Sales Network</p>
            </div>
            <div className="col-lg-3">
              <img src={IconImport} alt="shopify icon import" />
              <h5>Import</h5>
              <p>Import products with One Click</p>
            </div>
            <div className="col-lg-3">
              <img src={IconSell} alt="shopify icon sell" />
              <h5>Sell</h5>
              <p>Drive traffic and Grow Sales</p>
            </div>
          </div>
        </div>

        {/* Account */}
        <div className="container mt-10 mobile-center">
          <div className="row width-991 align-items-center">
            <div className="col-lg-6 col-image-box align-items-center">
              <img src={BoxAccount} alt="shopify icon sell" />
            </div>
            <div className="col-lg-6 align-items-center">
              <div className="col-content">
                <h3>Account</h3>
                <p>
                  Control your entire e-commerce from a single dashboard: 
                  Connect with suppliers, source products or create listings. 
                  Manage all sales channels and orders through one account.
                </p>
                <Link to={'/solution'}>Learn more <FontAwesomeIcon icon={faAngleRight} /></Link>
              </div>
            </div>
          </div>
        </div>

        {/* Channels */}
        <div className="container mt-5 mobile-center">
          <div className="row width-991 align-items-center">
            <div className="order-2 order-lg-1 col-lg-6 align-items-center">
              <div className="col-content">
                <h3>Channels</h3>
                <p>
                  Import physical and digital products to your sales channels, 
                  simply with one click. Outshifter´s deep integrations and powerful 
                  listing tools bridges content seamlessly.
                </p>
                <Link to={'/solution'}>Learn more <FontAwesomeIcon icon={faAngleRight} /></Link>
              </div>
            </div>
            <div className="order-1 order-lg-2 col-lg-6 col-image-channels align-items-center">
              <div className="image-wrapper">
                <img src={ImageChannels} alt="shopify icon sell" />
              </div>
            </div>
          </div>
        </div>

        {/* Network */}
        <div className="container mt-10 mobile-center">
          <div className="row width-991 align-items-center">
            <div className="col-lg-6 align-items-center col-image-two-box">
              <div className="image-wrapper">
                <img src={ImageNetwork} alt="shopify icon sell" />
              </div>
            </div>
            <div className="col-lg-6 align-items-center">
              <div className="col-content col-float-right">
                <h3>Network</h3>
                <p>
                Grow sales through network effects: Connected users get 
                access to source each other’s listings. Manage and scale your 
                network by connecting with top suppliers and merchants. 
                </p>
                <Link to={'/solution'}>Learn more <FontAwesomeIcon icon={faAngleRight} /></Link>
              </div>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="container mt-10 mobile-center">
          <div className="row width-991 align-items-center">
            <div className="order-2 order-lg-1 col-lg-6 align-items-center">
              <div className="col-content">
                <h3>Products</h3>
                <p>
                  Quality is key. Outshifter only works with verified European suppliers 
                  of high-quality products. Exponentially grow your sales with the latest 
                  editions and newest collections.  
                </p>
                <Link to={'/solution'}>Learn more <FontAwesomeIcon icon={faAngleRight} /></Link>
              </div>
            </div>
            <div className="order-1 order-lg-2 col-lg-6 align-items-center col-image-two-box">
              <div className="image-wrapper">
                <img src={ImageProducts} alt="shopify icon sell" />
              </div>
            </div>
          </div>
        </div>

        {/* Orders */}
        <div className="container mt-10 mobile-center">
          <div className="row width-991 align-items-center">
            <div className="col-lg-6 align-items-center col-image-standard">
              <div className="image-wrapper">
                <img src={ImageOrders} alt="shopify icon sell" />
              </div>
            </div>
            <div className="col-lg-6 align-items-center">
              <div className="col-content col-float-right">
                <h3>Orders</h3>
                <p>
                  Outshifter synchronizes inventory and updates order status in real-time. 
                  So, sit back and relax, while remaining in complete control. 
                </p>
                <Link to={'/solution'}>Learn more <FontAwesomeIcon icon={faAngleRight} /></Link>
              </div>
            </div>
          </div>
        </div>

        {/* Shipping */}
        <div className="container mt-10 mobile-center">
          <div className="row width-991 align-items-center">
            <div className="order-2 order-lg-1 col-lg-6 align-items-center">
              <div className="col-content">
                <h3>Shipping</h3>
                <p>
                  Fulfill orders with one click and Outshifer automates the rest. 
                  We integrate with more than 50 of the world’s leading couriers. 
                  Ensuring fast and reliable delivery for customer satisfaction.
                </p>
                <Link to={'/solution'}>Learn more <FontAwesomeIcon icon={faAngleRight} /></Link>
              </div>
            </div>
            <div className="order-1 order-lg-2 col-lg-6 align-items-center col-image-standard">
              <div className="image-wrapper">
                <img src={ImageShipping} alt="shopify icon sell" />
              </div>
            </div>
          </div>
        </div>

        {/* Analytics */}
        <div className="container mt-10 mobile-center">
          <div className="row width-991 align-items-center">
            <div className="col-lg-6 align-items-center col-image-analytics">
              <div className="image-wrapper">
                <img src={ImageAnalytics} alt="shopify icon sell" />
              </div>
            </div>
            <div className="col-lg-6 align-items-center">
              <div className="col-content col-float-right">
                <h3>Analytics</h3>
                <p>
                  Empower your business with data-driven insights and analytics. 
                  Statistics and overall impact helps you adjust accordingly to target the most profitable online avenues. 
                </p>
                <Link to={'/solution'}>Learn more <FontAwesomeIcon icon={faAngleRight} /></Link>
              </div>
            </div>
          </div>
        </div>
  
        {/* Free Forever */}
        <div className="container mt-10 mb-10 pb-10 mobile-center">
          <div className="row width-991 align-items-center">
            <div className="col-lg-6 align-items-center">
              <div className="col-content">
                <h3>Free Forever</h3>
                <p>
                  Outshifer is free, that´s it. No hidden fees or additional charges. 
                  Source and import unlimited amounts of products and generate infinite numbers of orders. 
                </p>
                <Link to={'/solution'}>Learn more <FontAwesomeIcon icon={faAngleRight} /></Link>
              </div>
            </div>
            <div className="col-lg-6 align-items-center col-image-standard text-center pt-5-mob">
              <Link to={'https://app.outshifter.com/'}><Button>Get started</Button></Link>
            </div>
          </div>
        </div>

      </InnerPages>
      </Layout>
    );
  }
}

export default ShopifyPage;

