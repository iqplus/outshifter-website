import React from 'react'

import { StyledSidebar } from './Sidebar.styled'

import IconTerms from '../../images/icon-general-terms.png'
import IconPrivacy from '../../images/icon-privacy-policy.png'

import { FaShieldAlt } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'

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
                        <a href="#general-terms" onClick={this.props.toggle1}><FaShieldAlt />About Outshifting</a>
                        <ol className="undermeny undermeny1">
                            <li><a href="#general-terms-1">How to Outshift</a></li>
                           
                        </ol>
                    </li>
                    <li className="sidebar-item">
                        <a href="#getting-started" onClick={this.props.toggle2}><FaLock />Getting Started</a>
                        <ol className="undermeny undermeny2">
                            <li><a href="#getting-started-1">Connect your Channels</a></li>                           
                            <li><a href="#getting-started-2">Connect your Community</a></li>
                        </ol>
                    </li>

                </ul>


            </StyledSidebar>
        );
    }
}

export default Sidebar;