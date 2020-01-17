import React from 'react';
import styled from 'styled-components';
import { FaAngleRight } from 'react-icons/fa';

const StyledButtonDropdown = styled.button`

    display: inline-block;
    border-radius: 30px;
    border: none;
    color: #4A4A4A;
    box-shadow: 0px 0 5px 0 #E1E8EC;
    font-size: 14px;
    padding: 5px 5px 5px 15px;
    background: transparent;

    svg {
        font-size: 22px;
        position: relative;
        bottom: 1px;
        color: #D8D8D8;
        transition: color 0.6s ease-in-out, transform 0.6s ease-in-out;
        color: ${({ buttonClicked }) => buttonClicked ? '#4A90E2' : '#D8D8D8'};
        transform: ${({ buttonClicked }) => buttonClicked ? 'rotate(90deg)' : 'rotate(0deg)'};
    }

    &:hover {
        transition: color 0.6s ease-in-out;
    }

    &:focus {
        outline: none;
    }

    @media only screen and (max-width: 1300px) and (min-width: 992px) {
        svg {font-size:14px;}
        font-size: 10px;
    }

`;

class ButtonDropdown extends React.Component {
    render() {
        return(
            <StyledButtonDropdown buttonClicked={this.props.buttonClicked} onClick={this.props.onClick}>{this.props.children}<FaAngleRight /></StyledButtonDropdown>
        );
    }
}

export default ButtonDropdown;