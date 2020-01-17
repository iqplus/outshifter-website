import React from 'react';
import styled from 'styled-components';


const StyledAccordeonBox = styled.div`

    box-shadow: 6px 0 5px 0 #E1E8EC;
    padding-right: 15px;
    padding-top: 15px;
    padding-bottom: 15px;

    border-radius: 7px;

    opacity: ${({ buttonClicked }) => buttonClicked ? '1' : '0'};
    transition: ${({ buttonClicked }) => buttonClicked ? 'opacity 2s' : 'opacity 2s'};

    @media only screen and (min-width: 768px) {
        position: absolute;
    }

    @media only screen and (max-width: 768px) {
        display: ${({ buttonClicked }) => buttonClicked ? 'block' : 'none'};
        margin-bottom: 15px;
    }

`;

class AccordeonBox extends React.Component {
    render() {
        return(
            <StyledAccordeonBox buttonClicked={this.props.buttonClicked} onClick={this.props.onClick}>
                <p>{this.props.children}</p>
            </StyledAccordeonBox>
        );
    }
}

export default AccordeonBox;
