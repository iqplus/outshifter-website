import React from 'react'

import { StyledSidebar } from './Sidebar.styled'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldAlt, faLockAlt, faMoneyCheckAlt } from '@fortawesome/pro-duotone-svg-icons';

class Sidebar extends React.Component {

    render() {
        return(
            <StyledSidebar 
                collapsed1={this.props.collapsed1}
                collapsed2={this.props.collapsed2}
                collapsed3={this.props.collapsed3}
            >

                <div className="sidebar-header">
                    <h5>Contents</h5>
                </div>

                <ul className="list-unstyled">
                    <li className="sidebar-item sidebar-item-first">
                        <a href="#general-terms" onClick={this.props.toggle1}><FontAwesomeIcon icon={faShieldAlt} />General Terms</a>
                        <ol className="undermeny undermeny1">
                            <li><a href="#general-terms-1">The Scope of Outshifter´s Platform</a></li>
                            <li><a href="#general-terms-2">Changes and Modifications to the Agreement</a></li>
                            <li><a href="#general-terms-3">Representation</a></li>
                            <li><a href="#general-terms-4">Security - Loss of Account Information</a></li>
                            <li><a href="#general-terms-5">Term and Termination</a></li>
                            <li><a href="#general-terms-6">Copyrights & Trademark</a></li>
                            <li><a href="#general-terms-7">Payments, Referral Fee, & Service Fee</a></li>
                            <li><a href="#general-terms-8">Shipping, Returns and Cancelations</a></li>
                            <li><a href="#general-terms-9">Content & Information About Listed Product and Services (Listings)</a></li>
                            <li><a href="#general-terms-10">Prohibited Content, Items, Products and Services</a></li>
                            <li><a href="#general-terms-11">Taxes</a></li>
                            <li><a href="#general-terms-12">Interactions on the Outshifter Platform</a></li>
                            <li><a href="#general-terms-13">Suggestions and Feedback</a></li>
                            <li><a href="#general-terms-14">Third Party Service Providers & Plug-Ins</a></li>
                            <li><a href="#general-terms-15">Indemnification</a></li>
                            <li><a href="#general-terms-16">Disclaimer</a></li>
                            <li><a href="#general-terms-17">Limitation of Liability</a></li>
                            <li><a href="#general-terms-18">Governing Law and Jurisdiction</a></li>
                            <li><a href="#general-terms-19">Severability</a></li>
                        </ol>
                    </li>
                    <li className="sidebar-item">
                        <a href="#privacy-policy" onClick={this.props.toggle2}><FontAwesomeIcon icon={faLockAlt} />Privacy Policy</a>
                        <ol className="undermeny undermeny2">
                            <li><a href="#privacy-policy-1">Personal Information Collected Through the Outshifter Platform</a></li>
                            <li><a href="#privacy-policy-2">Sharing of Your Information</a></li>
                            <li><a href="#privacy-policy-3">Information Regarding Cookies</a></li>
                            <li><a href="#privacy-policy-4">Data Retention</a></li>
                            <li><a href="#privacy-policy-5">Your Rights</a></li>
                            <li><a href="#privacy-policy-6">Information About Children</a></li>
                            <li><a href="#privacy-policy-7">Changes to the Privacy Policy</a></li>
                            <li><a href="#privacy-policy-8">How to Contact Us</a></li>
                        </ol>
                    </li>
                    <li className="sidebar-item">
                        <a href="#transactions" onClick={this.props.toggle3}><FontAwesomeIcon icon={faMoneyCheckAlt} />Transactions</a>
                        <ol className="undermeny undermeny3">
                            <li><a href="#transactions-1">Formation of Contract & Order Confirmation</a></li>
                            <li><a href="#transactions-2">Shipping, Returns, Customs and Cancelations</a></li>
                            <li><a href="#transactions-3">Payments & Prices</a></li>
                            <li><a href="#transactions-4">The Scope of the Outshifter Platform</a></li>
                        </ol>
                    </li>

                </ul>


            </StyledSidebar>
        );
    }
}

export default Sidebar;