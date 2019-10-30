import React from 'react';
import { StyledAccordeonBox } from './AccordeonBox.styled';


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
