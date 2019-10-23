import React from 'react';
import { StyledButtonDropdown } from './Buttondropdown.styled';


class ButtonDropdown extends React.Component {
    render() {
        return(
            <StyledButtonDropdown buttonClicked={this.props.buttonClicked} onClick={this.props.onClick}>{this.props.children}</StyledButtonDropdown>
        );
    }
}

export default ButtonDropdown;