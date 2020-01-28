import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from 'styled-components';
import FaqMerchant from '../images/icon-faq-merchant.png'
import FaqMediator from '../images/icon-faq-mediator.png'
import FaqCustomer from '../images/icon-faq-customer.png'
import MyContact from "../components/MyContact/MyContact"


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
    width: 30%;
  }
  .bulletstext {
    float: right;
    width: 70%;
  }
  .contact-separator {
    margin-top: 75px;
    margin-bottom: 75px;
  }

  .position-1 {margin-right: 5%}
  .position-3 {margin-left: 5%}
  .contact-description {padding-bottom:50px;}

  @media only screen and (max-width: 1400px) {
    .position-1 {margin-right: 0%}
    .position-3 {margin-left: 0%}
  }
  @media only screen and (max-width: 1035px) and (min-width: 992px) {
    .bulletsicon {padding-top: 5px;}
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
  @media only screen and (max-width: 1035px) and (min-width: 992px) {
    height: 90px;
  }
  @media only screen and (max-width: 991px) {
    max-width: 350px;
    margin: 0 auto;
  }
`;

const ContactPage = () => (
  <Layout>
  <SEO title="Contact" />
  <ContactStyled>

    <div className="container">

      {/* Intro */}
      <div className="row intro">
        <div className="col">
          <h3>Contact Outshifter</h3>
          <p>
            <strong>In need of assistance?</strong> Contact us and we will get in touch as soon as possible.
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

export default ContactPage;

