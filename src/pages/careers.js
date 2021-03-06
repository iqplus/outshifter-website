import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from 'styled-components';
import BannerCareer from '../images/banner-career.jpg'
import CareerJoinTeam from '../images/career-join-team.jpg'
import CareerStudents from '../images/career-students.jpg'
import Button from "../components/Buttons/Button"

const Banner = styled.div`
    background-image: url(${BannerCareer});
    width: 100%;
    height: 300px;
    background-position: 0% 25%;
    background-repeat: no-repeat;
    background-size: cover;
    div {
      background-image: linear-gradient(to top right, #5851e5, #3ddff4);
      height: 100%;
      opacity: 0.62;
    }
    {/*@media only screen and (min-width: 1500px) {
      height: 500px;
    }/*}
`;
const ColImage1 = styled.div`
    background-image: url(${CareerJoinTeam});
    height: 600px;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 6px;
    background-position: 45% center;
    box-shadow: 0 0 0 1px rgba(50,50,93,.05), 0 7px 14px 2px rgba(50,50,93,.1), 0 7px 14px 2px rgba(0,0,0,.07);
    @media only screen and (max-width: 991px) {
      height: 300px;
    }
`;
const ColImage2 = styled.div`
    background-image: url(${CareerStudents});
    height: 600px;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 6px;
    background-position: center;
    box-shadow: 0 0 0 1px rgba(50,50,93,.05), 0 7px 14px 2px rgba(50,50,93,.1), 0 7px 14px 2px rgba(0,0,0,.07);
    @media only screen and (max-width: 991px) {
      height: 300px;
    }
`;
const InnerPages = styled.div`
  .intro {
    text-align: center;
    max-width: 650px;
    margin: 0 auto;
    padding-top: 10%;
    padding-bottom: 10%;
  }
  .intro h2 {
    padding-bottom: 25px;
  }
  .intro p {
    font-size: 1.2rem;
  }
  .information {
    padding-bottom: 10%;
  }
  .information h4 {
    font-weight: 600;
  }
  .information p {
    font-size: 1rem;
    text-align: justify;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  @media only screen and (min-width: 992px) {
    .information-col-1 {
      padding-left: 10%;
    }
    .information-col-2 {
      padding-right: 10%;
    }
  }
  @media only screen and (max-width: 991px) {
    .information-col-1 {
      padding-top: 10%;
    }
    .information-col-2 {
      padding-top: 10%;
    }
    .img-col-2 {
      padding-top: 10%;
    }
  }
  @media only screen and (max-width: 575px) {
    .col-md-12 {
      padding-left: 40px;
      padding-right: 40px;
    }
    .col {
      padding-left: 25px;
      padding-right: 25px;
    }
  }

`;

const CareersPage = () => (
  <Layout>
  <SEO title="Careers" />
  <InnerPages>
  
    {/* Banner */}
    <div className="container-fluid ">   
      <div className="row banner">
        <Banner><div></div></Banner>
      </div>
    </div>

    {/* Intro */}
    <div className="container">   
      <div className="row intro">
        <div className="col">
          <h2>Careers</h2>
          <p>Outshifter builds the infrastructure of tomorrow´s e-commerce.</p>
          <p>We believe the future of e-commerce should empower and work for all, not only the few. And we would like your help!</p>
        </div>
      </div>
    </div>

    {/* Info 1 */}
    <div className="container">   
      <div className="row information">
        <div className="col-md-12 col-lg-6 align-self-center">
          <ColImage1 />
        </div>
        <div className="col-md-12 col-lg-6 align-self-center information-col-1">
          <h4>Join the Team</h4>
          <p>
            We are always looking for great people to complement our team. We truly believe diversity make for the best ideas. Thus, there is no predefined background, age, sex, ethnicity, colour sexual orientation or religion that make the ideal Outshifter.
            <br/><br/>
            We value curiosity, positivism, teamwork, creativity, disruptive mindsets and problem solvers. The workplace should be a pleasant space to spend time, where you can engage in something meaningful, and with people you like.
          </p>
          <Button>Contact</Button>
        </div>
      </div>
    </div>

    {/* Info 2 */}
    <div className="container">   
      <div className="row information">
        <div className="order-2 order-md-2 col-md-12 order-lg-1 col-lg-6 align-self-center information-col-2">
          <h4>Students & Interns</h4>
          <p>
            Looking for a part-time position or a company to write your thesis with? At Outshifter we are always open for students and their ideas and projects. The future belongs to the young.
          </p>
          <Button>Contact</Button>
        </div>
        <div className="order-1 order-md-1 col-md-12 order-lg-2 col-lg-6 align-self-center img-col-2">
          <ColImage2 />
        </div>
      </div>
    </div>
  
  </InnerPages>
  </Layout>
)

export default CareersPage
