import React from 'react';
import { StyledBurger } from './Burger.styled';

class Burger extends React.Component {
    render() {
        return (
            <StyledBurger open={this.props.open} onClick={this.props.onClick} position={this.props.position} top={this.props.top} right={this.props.right}
>
                <div />
                <div />
                <div />
            </StyledBurger>
        )
    }
}

export default Burger;