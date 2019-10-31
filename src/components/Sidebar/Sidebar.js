import React from 'react'

import { StyledSidebar } from './Sidebar.styled'

class Sidebar extends React.Component {
 
    render() {
        return(
            <StyledSidebar 
                collapsed1={this.props.collapsed1}
                collapsed2={this.props.collapsed2}
            >

                <div className="sidebar-header">
                    <h5>Contents</h5>
                </div>

                <ul className="list-unstyled">
                    <li className="sidebar-item sidebar-item-first">
                        <a onClick={this.props.toggle1}>General Terms</a>
                        <ol className="undermeny undermeny1">
                            <li><a href="#general-terms-1">The Scope of Outshifter´s Platform</a></li>
                            <li><a href="#general-terms-2">Changes and Modifications to the Agreement</a></li>
                            <li><a href="#general-terms-3">Representation</a></li>
                            <li><a href="#general-terms-4">Security - Loss of Account Information</a></li>
                            <li><a href="#general-terms-5">Copyrights & Trademark</a></li>
                            <li><a href="#general-terms-6">Payments</a></li>
                            <li><a href="#general-terms-7">Shipping, Returns and Cancelations</a></li>
                            <li><a href="#general-terms-8">Customs</a></li>
                            <li><a href="#general-terms-9">Information About Product and Services</a></li>
                            <li><a href="#general-terms-10">Content</a></li>
                            <li><a href="#general-terms-11">Prohibited Items and Services</a></li>
                            <li><a href="#general-terms-12">Interactions on the Outshifter Platform</a></li>
                            <li><a href="#general-terms-13">Suggestions and Feedback</a></li>
                            <li><a href="#general-terms-14">Indemnification</a></li>
                            <li><a href="#general-terms-15">Disclaimer</a></li>
                            <li><a href="#general-terms-16">Limitation of Liability</a></li>
                            <li><a href="#general-terms-17">Governing Law and Jurisdiction</a></li>
                            <li><a href="#general-terms-18">Severability</a></li>
                        </ol>
                    </li>
                    <li className="sidebar-item">
                        <a onClick={this.props.toggle2}>Privacy Policy</a>
                        <ol className="undermeny undermeny2">
                            <li><a href="#privacy-policy-1">The Scope of Outshifter´s Platform</a></li>
                            <li><a href="#privacy-policy-2">Changes and Modifications to the Agreement</a></li>
                            <li><a href="#privacy-policy-3">Representation</a></li>
                            <li><a href="#privacy-policy-4">Security - Loss of Account Information</a></li>
                            <li><a href="#privacy-policy-5">Copyrights & Trademark</a></li>
                            <li><a href="#privacy-policy-6">Payments</a></li>
                            <li><a href="#privacy-policy-7">Shipping, Returns and Cancelations</a></li>
                            <li><a href="#privacy-policy-8">Customs</a></li>
                        </ol>
                    </li>

                </ul>


            </StyledSidebar>
        );
    }
}

export default Sidebar;