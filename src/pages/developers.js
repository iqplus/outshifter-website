import React, {Component} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from 'styled-components';
import MyContact from "../components/MyContact/MyContactSupport"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faCode, faQuestion } from '@fortawesome/pro-duotone-svg-icons';


const ContactStyled = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  .intro {
    padding-top: 5%;
  }
  .intro h3 {
    padding-bottom: 25px;
  }
  .intro p {
    font-size: 1rem;
    padding-bottom: 5%;
  }
  .faq h4 {
    font-weight: 600;
  }
  .faq p {
    font-size: 1rem;
    padding-top: 15px;
    padding-bottom: 15px;
    color: #4A4A4A;
  }
  .bulletsicon {
    float: left;
    width: 25%;
    text-align: center;
    svg {
      font-size: 32px;
      margin-top: 4px;
    }
  }
  .svg-inline--fa {
    position: relative;
    top: 4px;
    right: 5px;
  }
  .bulletstext {
    float: right;
    width: 75%;
    h6 {
      padding-top: 2px;
    }
    p {
      color: #929292;
    }
  }
  .contact-separator {
    margin-top: 75px;
    margin-bottom: 75px;
    hr {
      width: 100%;
      background: #CDCDCD;
      height: 1px;
    }
  }

  .position-1 {margin-right: 5%}
  .position-3 {margin-left: 5%}
  .contact-description {padding-bottom:50px;}

  @media only screen and (max-width: 1400px) {
    .position-1 {margin-right: 0%}
    .position-3 {margin-left: 0%}
  }
  @media only screen and (max-width: 991px) {
    .position-2 {margin-top: 25px;margin-bottom:25px;}
  }
`;

const BoxStyled = styled.div`
  box-shadow: 0 0 0 1px rgba(50,50,93,.05), 0 2px 5px 0 rgba(50,50,93,.1), 0 1px 1px 0 rgba(0,0,0,.07);
  transition: box-shadow 0.5s;
  padding: 15px;
  border-radius: 6px;
  img {height: 50px;}
  height: 80px;
  p {
    padding: 0px!important;
    margin-bottom: 0px;
    font-size: 0.8rem!important;
  }
  &:hover {
    transition: box-shadow 1s;
    box-shadow: 0 0 0 1px rgba(50,50,93,.05), 0 7px 14px 0 rgba(50,50,93,.1), 0 3px 6px 0 rgba(0,0,0,.07);
  }
  @media only screen and (max-width: 991px) {
    max-width: 350px;
    margin: 0 auto;
  }
`;
class DevelopersPage extends Component {
  componentDidMount(){
    document.querySelector('#canvas1').style.visibility = "hidden"
    document.querySelector('#canvas2').style.visibility = "hidden"
  }
  render(){
    return(
<Layout>
  <SEO title="Support" />
  <ContactStyled>

    <div className="container">

      {/* Intro */}
      <div className="row intro">
        <div className="col">
          <h3>Contact Outshifter Support</h3>
          <p>
            <strong>In need of assistance?</strong> Get familiar with our solution or check out our FAQ:
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="row faq">
        <div className="col-md-12 col-lg position-1 align-self-center">
          <Link to={'/solution'}><BoxStyled >
            <div className="bulletsicon icon-shadow">
              <FontAwesomeIcon icon={faInfo} />
            </div>
            <div className="bulletstext">
              <h6>Solution</h6>
              <p>Specific service information</p>
            </div>
          </BoxStyled></Link>
        </div>
        <div className="col-md-12 col-lg position-2 align-self-center">
          <Link to={'/developers'}><BoxStyled>
          <div className="bulletsicon icon-shadow">
            <FontAwesomeIcon icon={faCode} />
            </div>
            <div className="bulletstext">
              <h6>Documentation</h6>
              <p>Outshifter API for developers</p>
            </div>
          </BoxStyled></Link>
        </div>
        <div className="col-md-12 col-lg position-3">
          <Link to={'/faq'}><BoxStyled position="3">
          <div className="bulletsicon icon-shadow align-self-center">
            <FontAwesomeIcon icon={faQuestion} />
            </div>
            <div className="bulletstext">
              <h6>FAQ</h6>
              <p>Frequently Asked Questions </p>
            </div>
          </BoxStyled></Link>
        </div>
      </div>

      <div className="contact-separator"><hr /></div>

      <div className="row faq contact-description">
        <div className="col align-self-center">
          <p>
            <b>Can’t find what you’re looking for?</b><br/><br/>
            Contact our support center and we will be happy to assist you.
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="row contact">
        <div className="col">
          <MyContact />
        </div>
      </div>

    </div>
  </ContactStyled>
  </Layout>
    )
  }
}

export default DevelopersPage;