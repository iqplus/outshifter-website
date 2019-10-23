import React from 'react';
import { StyledBurger } from './Burger.styled';

class Burger extends React.Component {
    render() {
        return (
            <StyledBurger open={this.props.open} onClick={this.props.onClick}>
                <div />
                <div />
                <div />
            </StyledBurger>
        )
    }
}

export default Burger;