import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import './pages.css';
import styled from 'styled-components';

import CareerJoinTeam from '../images/career-join-team.jpg'
import CareerStudents from '../images/career-students.jpg'

import ButtonOutline from "../components/Buttons/ButtonOutline"

const ImageOutshifter = styled.div`
    background-image: url(${CareerJoinTeam});
    height: 400px;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 6px;
    margin-top: 100px;
    margin-bottom: 50px;
    box-shadow: 0 0 0 1px rgba(50,50,93,.05), 0 7px 14px 2px rgba(50,50,93,.1), 0 7px 14px 2px rgba(0,0,0,.07);
    @media only screen and (max-width: 991px) {
      height: 300px;
    }
`;
const ImageTeam = styled.div`
    background-image: url(${CareerStudents});
    height: 400px;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 6px;
    margin-top: 100px;
    margin-bottom: 50px;
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
  .company {
    max-width: 700px;
    margin: 0 auto;
    margin-top: 10%;
    margin-bottom: 10%;
  }
  .company p {
    color: #4A4A4A;
    margin-top: 30px;
  }
  .company button {
    margin-top: 25px;
  }
  hr {
    background: linear-gradient(to right, #829DDD, #85E9F7);
    height: 3px;
    width: 30%;
    border-radius: 10px;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
`;

class CompanyPage extends React.Component {

  componentDidMount(){
    document.querySelector('#canvas1').style.visibility = "hidden"
    document.querySelector('#canvas2').style.visibility = "hidden"
  }
  render () {
    return (

      <Layout>
      <SEO title="Company" />
      
      <InnerPages>
        <canvas id="canvas1"></canvas>
        <canvas id="canvas2"></canvas>

        {/* Banner */}
        <div className={'masthead'}>
          <div className={'container ' + 'h-100 '}>
            <div className="row h-100 main-banner no-gutters">
              <div className="container">   
                <div className="row intro">
                  <div className="col">
                    <h2>Democratice e-Commerce</h2>
                    <p>
                      Outshifter is the technology company creating the infrastructure for a decentralized and transparent e-commerce value-chain.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container-fluid back-white after-canvas">
        <div className="container">
          <div className="company">

            <div className="row text-center">
              <div className="col">
                <h2>Outshifter</h2>
                <hr />
                <p>
                  Outshifter is centered on a belief in transparency, empowerment, ease-of-use and innovation.
                  <br/><br/>
                  Through the platforms multi-channel-network we aim to enable all e-commece players regardless of size, 
                  experience and budget to connect, colaborate and scale online. Consequently, allowing consumers to 
                  securely buy what they see, at the places they spend their time online.
                </p>  
                <ImageOutshifter />
              </div>
            </div>

            <div className="row text-center">
              <div className="col">
                <h2>Join the team</h2>
                <p>
                  Outshifter is looking for great people to complement our team. 
                  <br/><br/>
                  We truly believe diversity make for the best ideas. Thus, there is no predefined background, 
                  age, sex, ethnicity, colour, sexual orientation or religion that make the ideal Outshifter. 
                  We value curiosity, positivism, teamwork, creativity, disruptive mindsets and problem solvers.
                  <br/><br/>
                  Sounds like a something you´d like to be a part of? 
                </p>
                <ButtonOutline>Contact</ButtonOutline>
                <ImageTeam />
              </div>
            </div>

            <div className="row text-center">
              <div className="col">
                <h2>Students and interns</h2>
                <p>
                  Looking for a part-time position or a company to write your thesis with?
                  <br/>
                  At Outshifter we are always open for students and their ideas and projects. 
                  <br/>
                  The future belongs to the young.
                  <br/>
                </p>
                <ButtonOutline>Contact</ButtonOutline>
              </div>
            </div>

          </div>
        </div>
        </div>

      </InnerPages>
      </Layout>
    );
  }
}

export default CompanyPage;