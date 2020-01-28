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

    componentDidMount() {
        const scriptAftc = document.createElement("script");
        scriptAftc.async = true;
        scriptAftc.src = "./includes/js/aftc.min.js";
        document.head.appendChild(scriptAftc);

        const scriptThree = document.createElement("script");
        scriptThree.async = true;
        scriptThree.src = "./includes/js/three.min.js";
        document.head.appendChild(scriptThree);

        const scriptStats = document.createElement("script");
        scriptStats.async = true;
        scriptStats.src = "./includes/js/stats.min.js";
        document.head.appendChild(scriptStats);

        const scriptApp = document.createElement("script");
        scriptApp.async = true;
        scriptApp.src = "./includes/js/app.js";
        document.head.appendChild(scriptApp);

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
                        <div className="col">
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