import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from 'styled-components'
import ButtonDropdown from "../components/ButtonDropdown/ButtonDropdown"

import FeatureAccordion from '../components/FeatureAccordion/FeatureAccordion'

class FeaturesPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
        };
        this.toggleButton = this.toggleButton.bind(this);
    }

    toggleButton() {
        this.setState({
            dashboard: !this.state.dashboard,
        });
    }

    render() {

        return (
            <Layout>
            <SEO title="Features" />
                        
                {/* Banner */}
                <div className="container-fluid ">   
                    <div className="row">
                    </div>
                </div>

                <div className="container">   
                    <div className="row">
                        <div className="col">
                            <FeatureAccordion />
                        </div>
                    </div>
                </div>
        
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


{/* Buttons */}
{/* <div className="container">   
    <div className="row">
        <div className="col">
            <h4>Management</h4>
            <StaticQuery query={FEATURES} render={data =>{
                function filtermanagement(value) {return value.node.featureCategory === "Management";};
                const featureFilter = data.allContentfulFeatures.edges.filter(filtermanagement);
                const featureManagement = featureFilter.sort( (a,b) => a.node.position - b.node.position );
                return featureManagement.map((item) => {
                    return <div><ButtonDropdown buttonClicked={this.state.dashboard} onClick={this.toggleButton1}>{item.node.title}</ButtonDropdown><br/></div>
                });
            }} />
        </div>
        <div className="col">
            <h4>Products</h4>
            <StaticQuery query={FEATURES} render={data =>{
                function filtermanagement(value) {return value.node.featureCategory === "Products";};
                const featureFilter = data.allContentfulFeatures.edges.filter(filtermanagement);
                const featureManagement = featureFilter.sort( (a,b) => a.node.position - b.node.position );
                const featureManagementItem = featureManagement.node.title;
                return featureManagementItem.map((item) => {
                    return <div><ButtonDropdown buttonClicked={this.state.item} onClick={this.item}>{item}</ButtonDropdown><br/></div>
                });
            }} />
        </div>
        <div className="col">
            <h4>Channels</h4>
            <StaticQuery query={FEATURES} render={data =>{
                function filtermanagement(value) {return value.node.featureCategory === "Channels";};
                const featureFilter = data.allContentfulFeatures.edges.filter(filtermanagement);
                const featureManagement = featureFilter.sort( (a,b) => a.node.position - b.node.position );
                return featureManagement.map((item) => {
                    return <div><ButtonDropdown buttonClicked={this.state.item.node.title} onClick={this.item.node.title}>{item.node.title}</ButtonDropdown><br/></div>
                });
            }} />
        </div>
        <div className="col">
            <h4>Resources</h4>
            <StaticQuery query={FEATURES} render={data =>{
                function filtermanagement(value) {return value.node.featureCategory === "Resources";};
                const featureFilter = data.allContentfulFeatures.edges.filter(filtermanagement);
                const featureManagement = featureFilter.sort( (a,b) => a.node.position - b.node.position );
                return featureManagement.map((item) => {
                    return <div><ButtonDropdown buttonClicked={this.state.item.node.title} onClick={this.item.node.title}>{item.node.title}</ButtonDropdown><br/></div>
                });
            }} />
        </div>
    </div>
</div>*/}