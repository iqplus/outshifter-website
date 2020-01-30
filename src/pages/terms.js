import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"

import './terms.css'

import Sidebar from "../components/Sidebar/Sidebar"
import TermsData from "../components/TermsData/TermsData"
import AccordeonTerms from "../components/AccordeonTerms/AccordeonTerms"



class TermsPage extends React.Component {
    componentDidMount(){
        document.querySelector('#canvas1').style.visibility = "hidden"
        document.querySelector('#canvas2').style.visibility = "hidden"
      }
    constructor(props) {
        super(props);
        this.state = { 
            isCollapsed1: false,
            isCollapsed2: false,
            showInfo1: true,
            showInfo2: false
        };
        this.toggleMenuItem1 = this.toggleMenuItem1.bind(this);
        this.toggleMenuItem2 = this.toggleMenuItem2.bind(this);
    }

    toggleMenuItem1 () {
        if (this.state.showInfo1) {
            this.setState({
                isCollapsed1: !this.state.isCollapsed1,
                showInfo2: false,
                isCollapsed2:false
            });
        } else {
            this.setState({
                isCollapsed1: !this.state.isCollapsed1,
                showInfo1: !this.state.showInfo1,
                showInfo2: false,
                isCollapsed2:false
            });
        }
    }
    toggleMenuItem2 () {
        if (this.state.showInfo2) {
            this.setState({
                isCollapsed2: !this.state.isCollapsed2,
                showInfo1: false,
                isCollapsed1:false
            });
        } else {
            this.setState({
                isCollapsed2: !this.state.isCollapsed2,
                showInfo2: !this.state.showInfo2,
                showInfo1: false,
                isCollapsed1:false
            });
        }
    }

    render () {
        return (
            <Layout>
            <SEO title="Terms of Service" />

                <div class="container terms-wrapper">
                    <Sidebar 
                        collapsed1={this.state.isCollapsed1}
                        collapsed2={this.state.isCollapsed2}
                        toggle1={this.toggleMenuItem1}
                        toggle2={this.toggleMenuItem2}
                    />
                    <TermsData
                        info1={this.state.showInfo1}
                        info2={this.state.showInfo2}
                    />
                    <AccordeonTerms 
                        collapsed1={this.state.isCollapsed1}
                        collapsed2={this.state.isCollapsed2}
                        toggle1={this.toggleMenuItem1}
                        toggle2={this.toggleMenuItem2}
                    />
                </div>
        
            </Layout>
        );
    }
}

export default TermsPage;