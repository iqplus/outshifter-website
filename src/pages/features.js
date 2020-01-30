import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

import { graphql } from 'gatsby'
import { Link } from "gatsby"

import ButtonOutline from '../components/Buttons/ButtonOutline'
import FeatureAccordion from '../components/Accordions/FeatureAccordion'
import Accordion from '../components/Accordions/Accordion'

const FeatureStylePage = styled.div`
.features {
    padding-bottom: 10%
}
@media only screen and (min-width: 1200px) {
    .break-mobil-1200 {display: none;}
}
@media only screen and (max-width: 1199px) {
    .break-desktop-1200 {display: none;}
}
`;

class FeaturesPage extends React.Component {

    componentDidMount(){
        document.querySelector('#canvas1').style.visibility = "visible"
        document.querySelector('#canvas2').style.visibility = "visible"
      }

    render() {
        return (
            <Layout>
            <SEO title="Features" />
            <FeatureStylePage>            
            <div className="main-banner">
                <canvas id="canvas1"></canvas>
                <canvas id="canvas2"></canvas>
                <div className={'masthead'}>
                    <div className={'container ' + 'h-100 '}>
                    <div className="row h-100 main-banner no-gutters">
                        <div className="col text-center">
                        <h1>Features</h1>
                        <p>
                        Grow your sales network and<br/>
                        scale your e-commerce impact
                        </p>
                        <Link to={'/account'}><ButtonOutline>Get started for free</ButtonOutline></Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid features after-canvas back-white">
                <div className="container">   
                    <div className="row">
                        <div className="col">
                            <div className="break-desktop-1200"><FeatureAccordion /></div>
                            <div className="break-mobil-1200"><Accordion /></div>
                        </div>
                    </div>
                </div>
            </div>


            </FeatureStylePage>
            </Layout>
        );
    }
}
  
export default FeaturesPage;


const FEATURES = graphql `
{
    allContentfulFeatures {
        edges {
            node {
            title
            featureCategory
            content {
                content
            }
            position
            }
        }
    }
}`