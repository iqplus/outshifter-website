import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"

import './terms.css'

import Sidebar from "../components/SidebarSolution/Sidebar"
import TermsData from "../components/SolutionData/SolutionData"
import AccordeonSolution from "../components/AccordeonSolution/AccordeonSolution"


class SolutionPage extends React.Component {
    componentDidMount(){
        document.querySelector('#canvas1').style.visibility = "hidden"
        document.querySelector('#canvas2').style.visibility = "hidden"
    }
    constructor(props) {
        super(props);
        this.state = { 
            isCollapsed1: false,
            isCollapsed2: false,
            isCollapsed3: false,
            isCollapsed4: false,
            isCollapsed5: false,
            isCollapsed6: false,
            isCollapsed7: false,
            isCollapsed8: false,
            isCollapsed9: false,
            isCollapsed10: false,
            isCollapsed11: false,

            showInfo1: true,
            showInfo2: false,
            showInfo3: false,
            showInfo4: false,
            showInfo5: false,
            showInfo6: false,
            showInfo7: false,
            showInfo8: false,
            showInfo9: false,
            showInfo10: false,
            showInfo11: false

        };
        this.toggleMenuItem1 = this.toggleMenuItem1.bind(this);
        this.toggleMenuItem2 = this.toggleMenuItem2.bind(this);
        this.toggleMenuItem3 = this.toggleMenuItem3.bind(this);
        this.toggleMenuItem4 = this.toggleMenuItem4.bind(this);
        this.toggleMenuItem5 = this.toggleMenuItem5.bind(this);
        this.toggleMenuItem6 = this.toggleMenuItem6.bind(this);
        this.toggleMenuItem7 = this.toggleMenuItem7.bind(this);
        this.toggleMenuItem8 = this.toggleMenuItem8.bind(this);
        this.toggleMenuItem9 = this.toggleMenuItem9.bind(this);
        this.toggleMenuItem10 = this.toggleMenuItem10.bind(this);
        this.toggleMenuItem11 = this.toggleMenuItem11.bind(this);

    }

    toggleMenuItem1 () {
        if (this.state.showInfo1) {
            this.setState({
                isCollapsed1: !this.state.isCollapsed1,
                showInfo2: false,
                isCollapsed2:false,
                showInfo3: false,
                isCollapsed3:false,
                showInfo4: false,
                isCollapsed4:false,
                showInfo5: false,
                isCollapsed5:false,
                showInfo6: false,
                isCollapsed6:false,
                showInfo7: false,
                isCollapsed7:false,
                showInfo8: false,
                isCollapsed8:false,
                showInfo9: false,
                isCollapsed9:false,
                showInfo10: false,
                isCollapsed10:false,
                showInfo11: false,
                isCollapsed11:false
            });
        } else {
            this.setState({
                isCollapsed1: !this.state.isCollapsed1,
                showInfo1: !this.state.showInfo1,
                showInfo2: false,
                isCollapsed2:false,
                showInfo3: false,
                isCollapsed3:false,
                showInfo4: false,
                isCollapsed4:false,
                showInfo5: false,
                isCollapsed5:false,
                showInfo6: false,
                isCollapsed6:false,
                showInfo7: false,
                isCollapsed7:false,
                showInfo8: false,
                isCollapsed8:false,
                showInfo9: false,
                isCollapsed9:false,
                showInfo10: false,
                isCollapsed10:false,
                showInfo11: false,
                isCollapsed11:false
            });
        }
    }
    toggleMenuItem2 () {
        if (this.state.showInfo2) {
            this.setState({
                isCollapsed2: !this.state.isCollapsed2,
                showInfo1: false,
                isCollapsed1:false,
                showInfo3: false,
                isCollapsed3:false,
                showInfo4: false,
                isCollapsed4:false,
                showInfo5: false,
                isCollapsed5:false,
                showInfo6: false,
                isCollapsed6:false,
                showInfo7: false,
                isCollapsed7:false,
                showInfo8: false,
                isCollapsed8:false,
                showInfo9: false,
                isCollapsed9:false,
                showInfo10: false,
                isCollapsed10:false,
                showInfo11: false,
                isCollapsed11:false
            });
        } else {
            this.setState({
                isCollapsed2: !this.state.isCollapsed2,
                showInfo2: !this.state.showInfo2,
                showInfo1: false,
                isCollapsed1:false,
                showInfo3: false,
                isCollapsed3:false,
                showInfo4: false,
                isCollapsed4:false,
                showInfo5: false,
                isCollapsed5:false,
                showInfo6: false,
                isCollapsed6:false,
                showInfo7: false,
                isCollapsed7:false,
                showInfo8: false,
                isCollapsed8:false,
                showInfo9: false,
                isCollapsed9:false,
                showInfo10: false,
                isCollapsed10:false,
                showInfo11: false,
                isCollapsed11:false
            });
        }
    }

    toggleMenuItem3 () {
        if (this.state.showInfo3) {
            this.setState({
                isCollapsed3: !this.state.isCollapsed3,
                showInfo1: false,
                isCollapsed1:false,
                showInfo2: false,
                isCollapsed2:false,
                showInfo4: false,
                isCollapsed4:false,
                showInfo5: false,
                isCollapsed5:false,
                showInfo6: false,
                isCollapsed6:false,
                showInfo7: false,
                isCollapsed7:false,
                showInfo8: false,
                isCollapsed8:false,
                showInfo9: false,
                isCollapsed9:false,
                showInfo10: false,
                isCollapsed10:false,
                showInfo11: false,
                isCollapsed11:false
            });
        } else {
            this.setState({
                isCollapsed3: !this.state.isCollapsed3,
                showInfo3: !this.state.showInfo3,
                showInfo1: false,
                isCollapsed1:false,
                showInfo2: false,
                isCollapsed2:false,
                showInfo4: false,
                isCollapsed4:false,
                showInfo5: false,
                isCollapsed5:false,
                showInfo6: false,
                isCollapsed6:false,
                showInfo7: false,
                isCollapsed7:false,
                showInfo8: false,
                isCollapsed8:false,
                showInfo9: false,
                isCollapsed9:false,
                showInfo10: false,
                isCollapsed10:false,
                showInfo11: false,
                isCollapsed11:false
            });
        }
    }

    toggleMenuItem4 () {
        if (this.state.showInfo4) {
            this.setState({
                isCollapsed4: !this.state.isCollapsed1,
                showInfo1: false,
                isCollapsed1:false,
                showInfo2: false,
                isCollapsed2:false,
                showInfo3: false,
                isCollapsed3:false,
                showInfo5: false,
                isCollapsed5:false,
                showInfo6: false,
                isCollapsed6:false,
                showInfo7: false,
                isCollapsed7:false,
                showInfo8: false,
                isCollapsed8:false,
                showInfo9: false,
                isCollapsed9:false,
                showInfo10: false,
                isCollapsed10:false,
                showInfo11: false,
                isCollapsed11:false
            });
        } else {
            this.setState({
                isCollapsed4: !this.state.isCollapsed1,
                showInfo4: !this.state.showInfo1,
                showInfo1: false,
                isCollapsed1:false,
                showInfo2: false,
                isCollapsed2:false,
                showInfo3: false,
                isCollapsed3:false,
                showInfo5: false,
                isCollapsed5:false,
                showInfo6: false,
                isCollapsed6:false,
                showInfo7: false,
                isCollapsed7:false,
                showInfo8: false,
                isCollapsed8:false,
                showInfo9: false,
                isCollapsed9:false,
                showInfo10: false,
                isCollapsed10:false,
                showInfo11: false,
                isCollapsed11:false
            });
        }
    }
    toggleMenuItem5 () {
        if (this.state.showInfo5) {
            this.setState({
                isCollapsed5: !this.state.isCollapsed2,
                showInfo1: false,
                isCollapsed1:false,
                showInfo2: false,
                isCollapsed2:false,
                showInfo3: false,
                isCollapsed3:false,
                showInfo4: false,
                isCollapsed4:false,
                showInfo6: false,
                isCollapsed6:false,
                showInfo7: false,
                isCollapsed7:false,
                showInfo8: false,
                isCollapsed8:false,
                showInfo9: false,
                isCollapsed9:false,
                showInfo10: false,
                isCollapsed10:false,
                showInfo11: false,
                isCollapsed11:false
            });
        } else {
            this.setState({
                isCollapsed5: !this.state.isCollapsed2,
                showInfo5: !this.state.showInfo5,
                showInfo1: false,
                isCollapsed1:false,
                showInfo2: false,
                isCollapsed2:false,
                showInfo3: false,
                isCollapsed3:false,
                showInfo4: false,
                isCollapsed4:false,
                showInfo6: false,
                isCollapsed6:false,
                showInfo7: false,
                isCollapsed7:false,
                showInfo8: false,
                isCollapsed8:false,
                showInfo9: false,
                isCollapsed9:false,
                showInfo10: false,
                isCollapsed10:false,
                showInfo11: false,
                isCollapsed11:false
            });
        }
    }

    toggleMenuItem6 () {
        if (this.state.showInfo6) {
            this.setState({
                isCollapsed6: !this.state.isCollapsed3,
                showInfo1: false,
                isCollapsed1:false,
                showInfo2: false,
                isCollapsed2:false,
                showInfo3: false,
                isCollapsed3:false,
                showInfo4: false,
                isCollapsed4:false,
                showInfo5: false,
                isCollapsed5:false,
                showInfo7: false,
                isCollapsed7:false,
                showInfo8: false,
                isCollapsed8:false,
                showInfo9: false,
                isCollapsed9:false,
                showInfo10: false,
                isCollapsed10:false,
                showInfo11: false,
                isCollapsed11:false
            });
        } else {
            this.setState({
                isCollapsed6: !this.state.isCollapsed6,
                showInfo6: !this.state.showInfo6,
                showInfo1: false,
                isCollapsed1:false,
                showInfo2: false,
                isCollapsed2:false,
                showInfo3: false,
                isCollapsed3:false,
                showInfo4: false,
                isCollapsed4:false,
                showInfo5: false,
                isCollapsed5:false,
                showInfo7: false,
                isCollapsed7:false,
                showInfo8: false,
                isCollapsed8:false,
                showInfo9: false,
                isCollapsed9:false,
                showInfo10: false,
                isCollapsed10:false,
                showInfo11: false,
                isCollapsed11:false
            });
        }
    }
 
    toggleMenuItem7 () {
        if (this.state.showInfo7) {
            this.setState({
                isCollapsed7: !this.state.isCollapsed7,
                showInfo1: false,
                isCollapsed1:false,
                showInfo2: false,
                isCollapsed2:false,
                showInfo3: false,
                isCollapsed3:false,
                showInfo4: false,
                isCollapsed4:false,
                showInfo5: false,
                isCollapsed5:false,
                showInfo6: false,
                isCollapsed6:false,
                showInfo8: false,
                isCollapsed8:false,
                showInfo9: false,
                isCollapsed9:false,
                showInfo10: false,
                isCollapsed10:false,
                showInfo11: false,
                isCollapsed11:false
            });
        } else {
            this.setState({
                isCollapsed7: !this.state.isCollapsed7,
                showInfo7: !this.state.showInfo7,
                showInfo1: false,
                isCollapsed1:false,
                showInfo2: false,
                isCollapsed2:false,
                showInfo3: false,
                isCollapsed3:false,
                showInfo4: false,
                isCollapsed4:false,
                showInfo5: false,
                isCollapsed5:false,
                showInfo6: false,
                isCollapsed6:false,
                showInfo8: false,
                isCollapsed8:false,
                showInfo9: false,
                isCollapsed9:false,
                showInfo10: false,
                isCollapsed10:false,
                showInfo11: false,
                isCollapsed11:false
            });
        }
    }
    toggleMenuItem8 () {
        if (this.state.showInfo8) {
            this.setState({
                isCollapsed8: !this.state.isCollapsed8,
                showInfo1: false,
                isCollapsed1:false,
                showInfo2: false,
                isCollapsed2:false,
                showInfo3: false,
                isCollapsed3:false,
                showInfo4: false,
                isCollapsed4:false,
                showInfo5: false,
                isCollapsed5:false,
                showInfo7: false,
                isCollapsed7:false,
                showInfo6: false,
                isCollapsed6:false,
                showInfo9: false,
                isCollapsed9:false,
                showInfo10: false,
                isCollapsed10:false,
                showInfo11: false,
                isCollapsed11:false
            });
        } else {
            this.setState({
                isCollapsed8: !this.state.isCollapsed8,
                showInfo8: !this.state.showInfo8,
                showInfo1: false,
                isCollapsed1:false,
                showInfo2: false,
                isCollapsed2:false,
                showInfo3: false,
                isCollapsed3:false,
                showInfo4: false,
                isCollapsed4:false,
                showInfo5: false,
                isCollapsed5:false,
                showInfo7: false,
                isCollapsed7:false,
                showInfo6: false,
                isCollapsed6:false,
                showInfo9: false,
                isCollapsed9:false,
                showInfo10: false,
                isCollapsed10:false,
                showInfo11: false,
                isCollapsed11:false
            });
        }
    }
    toggleMenuItem9 () {
        if (this.state.showInfo9) {
            this.setState({
                isCollapsed9: !this.state.isCollapsed9,
                showInfo1: false,
                isCollapsed1:false,
                showInfo2: false,
                isCollapsed2:false,
                showInfo3: false,
                isCollapsed3:false,
                showInfo4: false,
                isCollapsed4:false,
                showInfo5: false,
                isCollapsed5:false,
                showInfo7: false,
                isCollapsed7:false,
                showInfo8: false,
                isCollapsed8:false,
                showInfo6: false,
                isCollapsed6:false,
                showInfo10: false,
                isCollapsed10:false,
                showInfo11: false,
                isCollapsed11:false
            });
        } else {
            this.setState({
                isCollapsed9: !this.state.isCollapsed9,
                showInfo9: !this.state.showInfo9,
                showInfo1: false,
                isCollapsed1:false,
                showInfo2: false,
                isCollapsed2:false,
                showInfo3: false,
                isCollapsed3:false,
                showInfo4: false,
                isCollapsed4:false,
                showInfo5: false,
                isCollapsed5:false,
                showInfo7: false,
                isCollapsed7:false,
                showInfo8: false,
                isCollapsed8:false,
                showInfo6: false,
                isCollapsed6:false,
                showInfo10: false,
                isCollapsed10:false,
                showInfo11: false,
                isCollapsed11:false
            });
        }
    }
    toggleMenuItem10 () {
        if (this.state.showInfo10) {
            this.setState({
                isCollapsed10: !this.state.isCollapsed10,
                showInfo1: false,
                isCollapsed1:false,
                showInfo2: false,
                isCollapsed2:false,
                showInfo3: false,
                isCollapsed3:false,
                showInfo4: false,
                isCollapsed4:false,
                showInfo5: false,
                isCollapsed5:false,
                showInfo7: false,
                isCollapsed7:false,
                showInfo8: false,
                isCollapsed8:false,
                showInfo9: false,
                isCollapsed9:false,
                showInfo6: false,
                isCollapsed6:false,
                showInfo11: false,
                isCollapsed11:false
            });
        } else {
            this.setState({
                isCollapsed10: !this.state.isCollapsed10,
                showInfo10: !this.state.showInfo10,
                showInfo1: false,
                isCollapsed1:false,
                showInfo2: false,
                isCollapsed2:false,
                showInfo3: false,
                isCollapsed3:false,
                showInfo4: false,
                isCollapsed4:false,
                showInfo5: false,
                isCollapsed5:false,
                showInfo7: false,
                isCollapsed7:false,
                showInfo8: false,
                isCollapsed8:false,
                showInfo9: false,
                isCollapsed9:false,
                showInfo6: false,
                isCollapsed6:false,
                showInfo11: false,
                isCollapsed11:false
            });
        }
    }
    toggleMenuItem11 () {        
        if (this.state.showInfo11) {
        this.setState({
            isCollapsed11: !this.state.isCollapsed11,
            showInfo1: false,
            isCollapsed1:false,
            showInfo2: false,
            isCollapsed2:false,
            showInfo3: false,
            isCollapsed3:false,
            showInfo4: false,
            isCollapsed4:false,
            showInfo5: false,
            isCollapsed5:false,
            showInfo7: false,
            isCollapsed7:false,
            showInfo8: false,
            isCollapsed8:false,
            showInfo9: false,
            isCollapsed9:false,
            showInfo10: false,
            isCollapsed10:false,
            showInfo6: false,
            isCollapsed6:false
        });
    } else {
        this.setState({
            isCollapsed11: !this.state.isCollapsed11,
            showInfo11: !this.state.showInfo11,
            showInfo1: false,
            isCollapsed1:false,
            showInfo2: false,
            isCollapsed2:false,
            showInfo3: false,
            isCollapsed3:false,
            showInfo4: false,
            isCollapsed4:false,
            showInfo5: false,
            isCollapsed5:false,
            showInfo7: false,
            isCollapsed7:false,
            showInfo8: false,
            isCollapsed8:false,
            showInfo9: false,
            isCollapsed9:false,
            showInfo10: false,
            isCollapsed10:false,
            showInfo6: false,
            isCollapsed6:false
        });
    }}


    render () {
        return (
            <Layout>
            <SEO title="Terms of Service" />

                <div class="container terms-wrapper">
                    <Sidebar 
                        collapsed1={this.state.isCollapsed1}
                        collapsed2={this.state.isCollapsed2}
                        collapsed3={this.state.isCollapsed3}
                        collapsed4={this.state.isCollapsed4}
                        collapsed5={this.state.isCollapsed5}
                        collapsed6={this.state.isCollapsed6}
                        collapsed7={this.state.isCollapsed7}
                        collapsed8={this.state.isCollapsed8}
                        collapsed9={this.state.isCollapsed9}
                        collapsed10={this.state.isCollapsed10}
                        collapsed11={this.state.isCollapsed11}
                        toggle1={this.toggleMenuItem1}
                        toggle2={this.toggleMenuItem2}
                        toggle3={this.toggleMenuItem3}
                        toggle4={this.toggleMenuItem4}
                        toggle5={this.toggleMenuItem5}
                        toggle6={this.toggleMenuItem6}
                        toggle7={this.toggleMenuItem7}
                        toggle8={this.toggleMenuItem8}
                        toggle9={this.toggleMenuItem9}
                        toggle10={this.toggleMenuItem10}
                        toggle11={this.toggleMenuItem11}
                    />

                    <TermsData
                        info1={this.state.showInfo1}
                        info2={this.state.showInfo2}
                        info3={this.state.showInfo3}
                        info4={this.state.showInfo4}
                        info5={this.state.showInfo5}
                        info6={this.state.showInfo6}
                        info7={this.state.showInfo7}
                        info8={this.state.showInfo8}
                        info9={this.state.showInfo9}
                        info10={this.state.showInfo10}
                        info11={this.state.showInfo11}
                    />

                    <AccordeonSolution 
                        collapsed1={this.state.isCollapsed1}
                        collapsed2={this.state.isCollapsed2}
                        collapsed3={this.state.isCollapsed3}
                        collapsed4={this.state.isCollapsed4}
                        collapsed5={this.state.isCollapsed5}
                        collapsed6={this.state.isCollapsed6}
                        collapsed7={this.state.isCollapsed7}
                        collapsed8={this.state.isCollapsed8}
                        collapsed9={this.state.isCollapsed9}
                        collapsed10={this.state.isCollapsed10}
                        collapsed11={this.state.isCollapsed11}

                        toggle1={this.toggleMenuItem1}
                        toggle2={this.toggleMenuItem2}
                        toggle3={this.toggleMenuItem3}
                        toggle4={this.toggleMenuItem4}
                        toggle5={this.toggleMenuItem5}
                        toggle6={this.toggleMenuItem6}
                        toggle7={this.toggleMenuItem7}
                        toggle8={this.toggleMenuItem8}
                        toggle9={this.toggleMenuItem9}
                        toggle10={this.toggleMenuItem10}
                        toggle11={this.toggleMenuItem11}
                    />
                </div>
        
            </Layout>
        );
    }
}

export default SolutionPage;