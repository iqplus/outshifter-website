import React from 'react';
import { StyledButton } from './Button.styled';


class Button extends React.Component {
    render() {
        return(
            <StyledButton><span>{this.props.children}</span></StyledButton>
        );
    }
}

export default Button;