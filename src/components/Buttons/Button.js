import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`

    border: none;
    display: inline-block;
    border-radius: 30px;
    color: white;
    position: relative;
    z-index: 1;
    padding: 8px 40px;
    box-shadow: rgb(226, 226, 226) 1px 1px 5px 2px;
    background: #5873e5;
    background: -moz-linear-gradient(left, #5873e5 0%, #3dcef4 100%);
    background: -webkit-gradient(linear, left top, right top, color-stop(0%,#5873e5), color-stop(100%,#3dcef4));
    background: -webkit-linear-gradient(left, #5873e5 0%,#3dcef4 100%);
    background: -o-linear-gradient(left, #5873e5 0%,#3dcef4 100%);
    background: -ms-linear-gradient(left, #5873e5 0%,#3dcef4 100%);
    background: linear-gradient(to right, #5873e5 0%,#3dcef4 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5873e5', endColorstr='#3dcef4',GradientType=1 );

    span {
        line-height: 16px;
    }
    
    &:hover {
        transition: color 0.4s ease-in-out;
        color: #4A90E2;
    }

    &:focus {
        outline: none;
    }

    &:hover:before, 
    &:hover:after {
        content: ' ';
        position: absolute;
        border-radius: 99px;
    }

    &:hover:before {
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -2;
        background: #5873e5;
        background: -moz-linear-gradient(left, #5873e5 0%, #3dcef4 100%);
        background: -webkit-gradient(linear, left top, right top, color-stop(0%,#5873e5), color-stop(100%,#3dcef4));
        background: -webkit-linear-gradient(left, #5873e5 0%,#3dcef4 100%);
        background: -o-linear-gradient(left, #5873e5 0%,#3dcef4 100%);
        background: -ms-linear-gradient(left, #5873e5 0%,#3dcef4 100%);
        background: linear-gradient(to right, #5873e5 0%,#3dcef4 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5873e5', endColorstr='#3dcef4',GradientType=1 );
    }

    &:hover:after {
        top: 2px; 
        bottom: 2px;
        left: 2px;
        right: 2px;
        background-color: white;
        z-index: -1;
        opacity: 1;
        transition: all 0.4s ease-in-out;
    }

    &:after {
        opacity: 0;
    }

`;

class Button extends React.Component {
    render() {
        return(
            <StyledButton><span>{this.props.children}</span></StyledButton>
        );
    }
}

export default Button;