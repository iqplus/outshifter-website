import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import './pages.css';
import styled from 'styled-components';
import { Link } from 'gatsby'

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
    padding-top: 20%;
    padding-bottom: 10%;
    @media only screen and (max-width: 767px) {
      padding-top: 30%;
    }
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
    document.querySelector('#canvas1').style.visibility = "visible"
    document.querySelector('#canvas2').style.visibility = "visible"
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
                    <h2>Democratizing <br/>E-Commerce</h2>
                    <p>
                      Connect your network, grow your sales, and succeed together.                    
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
                <h2>About Us</h2>
                <hr />
                <p>
                  To democratize means making something accessible to everyone. The e-commerce value chain is currently not 
                  working for all. Outshifter helps allocate the value creation in e-commerce from the few to the many. 
                  We aim to enable all individuals and E-commerce participants regardless of size, experience and budget 
                  to connect, collaborate and scale.
                  <br/><br/>
                  Our platform connects suppliers and mediators and provides them with infrastructure to 
                  succeed together. At Outshifter we call it democratizing e-commerce and we want you to become part of it.
                </p>  
              </div>
            </div>

            <div className="row mt-5 text-center">
              <div className="col">
                <h2>Join the team</h2>
                <p>
                  Do you want to revolutionize e-commerce?
                  <br/><br/>
                  We are always looking for great people to complement our team. 
                  Diversity makes for the best ideas. We value curiosity, positivism, 
                  teamwork, creativity, disruptive mindsets and problem solvers.                  
                  <br/><br/>
                  If you want to join, shoot us a message right away and we will get back to you shortly.
                </p>
                <Link to={"/contact"}><ButtonOutline>Contact</ButtonOutline></Link>
                <ImageTeam />
              </div>
            </div>

            <div className="row mt-5 text-center">
              <div className="col">
                <h2>Students and interns</h2>
                <p>
                  Looking for a part-time position or a company to write your thesis with?
                  <br/><br/>
                  At Outshifter we are always open for students and their ideas and projects. 
                  <br/><br/>
                  The future belongs to the young.
                  <br/>
                </p>
                <Link to={"/contact"}><ButtonOutline>Contact</ButtonOutline></Link>
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