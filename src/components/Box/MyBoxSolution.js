import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTasks, faUser, faShareAlt,
    faFileInvoice, faMoneyCheckAlt, faPlane, faGem,faChartNetwork
} from '@fortawesome/pro-duotone-svg-icons'


const StyledBox = styled.div`

    box-shadow: 0 0 0 1px rgba(50,50,93,.05), 0 2px 5px 0 rgba(50,50,93,.1), 0 1px 1px 0 rgba(0,0,0,.07);
    transition: box-shadow 0.5s;
    padding: 10px;
    border-radius: 6px;
    width: 100%;
    background: white;
    text-align: left;

    p {
        color: #929292!important;
        margin-left: 80px;
        font-size: 12px;
        @media only screen and (max-width: 1399px) {
            font-size: 10px;
            margin-left: 60px;
        }
    }
    .svg-inline--fa {
        position: relative;
        top: 4px;
        right: 5px;
    }
  
    &:hover {
        transition: box-shadow 1s;
        box-shadow: 0 0 0 1px rgba(50,50,93,.05), 0 7px 14px 0 rgba(50,50,93,.1), 0 3px 6px 0 rgba(0,0,0,.07);
    }

    @media only screen and (max-width: 991px) and  (min-width: 768px) {
        padding: 10px;
        height: 100px;
    }
    @media only screen and (max-width: 767px) {
        margin-bottom: 15px;
    }
`;  

class MyBoxSolution extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <StyledBox>
                <div>
                    <FontAwesomeIcon icon={this.props.icon} />
                    <h6>{this.props.headline}</h6>
                    <p>{this.props.description}</p>
                </div>
            </StyledBox>
        );
    }
}

export default MyBoxSolution;
