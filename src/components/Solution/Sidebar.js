import React from 'react'

import { StyledSidebar } from './Sidebar.styled'

import Logo from '../../images/logo-mobil.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faTasks, faUser, faShareAlt,
    faFileInvoice, faMoneyCheckAlt, faPlane, faGem, faChartNetwork
} from '@fortawesome/pro-duotone-svg-icons'

class Sidebar extends React.Component {

    render() {
        return(
            <StyledSidebar 
                collapsed1={this.props.collapsed1}
                collapsed2={this.props.collapsed2}
                collapsed3={this.props.collapsed3}
                collapsed4={this.props.collapsed4}
                collapsed5={this.props.collapsed5}
                collapsed6={this.props.collapsed6}
                collapsed7={this.props.collapsed7}
                collapsed8={this.props.collapsed8}
                collapsed9={this.props.collapsed9}
                collapsed10={this.props.collapsed10}
                collapsed11={this.props.collapsed11}
            >

                <div className="sidebar-header">
                    <h5>Contents</h5>
                </div>

                <ul className="list-unstyled">
                    <li className="sidebar-item sidebar-item-first">
                        <a href="#about-outshifting" onClick={this.props.toggle1}><img src={Logo} />About Outshifting</a>
                        <ol className="undermeny undermeny1">
                            <li><a href="#about-outshifting-1">How to Outshift</a></li>
                           
                        </ol>
                    </li>
                    <li className="sidebar-item">
                        <a href="#getting-started" onClick={this.props.toggle2}><FontAwesomeIcon icon={faTasks} />Getting Started</a>
                        <ol className="undermeny undermeny2">
                            <li><a href="#getting-started-1">Connect your Channels</a></li>                           
                            <li><a href="#getting-started-2">Connect your Community</a></li>
                            <li><a href="#getting-started-3">List and Source</a></li>
                            <li><a href="#getting-started-4">Outshift</a></li>
                        </ol>
                    </li>
                    <li className="sidebar-item">
                        <a href="#account" onClick={this.props.toggle3}><FontAwesomeIcon icon={faUser} />Account</a>
                    </li>
                    <li className="sidebar-item">
                        <a href="#listings" onClick={this.props.toggle4}><FontAwesomeIcon icon={faGem} />Listings</a>
                    </li>
                    <li className="sidebar-item">
                        <a href="#sourcing" onClick={this.props.toggle5}><FontAwesomeIcon icon={faShareAlt} />Sourcing</a>
                        <ol className="undermeny undermeny5">
                            <li><a href="#sourcing-1">Outsourcing</a></li>                           
                            <li><a href="#sourcing-2">Sourcing</a></li>
                        </ol>
                    </li>
                    <li className="sidebar-item">
                        <a href="#channels" onClick={this.props.toggle6}><FontAwesomeIcon icon={faChartNetwork} />Channels</a>
                        <ol className="undermeny undermeny6">
                            <li><a href="#channels-1">Your Channels</a></li>                           
                            <li><a href="#channels-2">Third-party Channels</a></li>
                        </ol>
                    </li>
                    <li className="sidebar-item">
                        <a href="#orders" onClick={this.props.toggle7}><FontAwesomeIcon icon={faFileInvoice} />Orders</a>
                    </li>
                    <li className="sidebar-item">
                        <a href="#shipping" onClick={this.props.toggle8}><FontAwesomeIcon icon={faPlane} />Shipping</a>
                        <ol className="undermeny undermeny8">
                            <li><a href="#shipping-1">Connect your courier</a></li>                           
                            <li><a href="#shipping-2">Flat Rate</a></li>
                        </ol>
                    </li>
                    {/*<li className="sidebar-item">
                        <a href="#returns" onClick={this.props.toggle9}><FaLock />Returns</a>
                    </li>
                    <li className="sidebar-item">
                        <a href="#payments" onClick={this.props.toggle10}><FaLock />Payments & Payout</a>
                    </li>*/}
                    <li className="sidebar-item">
                        <a href="#service-fee" onClick={this.props.toggle11}><FontAwesomeIcon icon={faMoneyCheckAlt} />Service Fee</a>
                        <ol className="undermeny undermeny11">
                            <li><a href="#service-fee-1">Per transaction </a></li>                           
                            <li><a href="#service-fee-2">Billing</a></li>
                            <li><a href="#service-fee-3">Referral Fee</a></li>
                        </ol>
                    </li>
                </ul>
            </StyledSidebar>
        );
    }
}

export default Sidebar;