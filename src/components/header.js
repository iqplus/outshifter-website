import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import styled from 'styled-components';

import LogoFull from '../images/logo-icon-text.png';
import Logo from '../images/logo.png';
import LogoMobil from '../images/logo-mobil.png';
import LogoText from '../images/outshifter-logo-text.png';
import Menu from './Menu/Menu.js';
import MenuMobil from './MenuMobil/MenuMobil.js';
import Burger from './Burger/Burger';
import Button from './Button/Button';

import './header.css';


export const StyledMenuName = styled.span`

    transition: ${({ open }) => open ? 'opacity 0.2s linear 0.1s' : 'opacity 0.2s linear 0.5s'};
    opacity: ${({ open }) => open ? '0' : '1'};
    position: relative;
    left: 300px;
    line-height: 48px;
    color: #4A4A4A;

    @media only screen and (max-width: 1024px) {
    
        display: none;

    }

`;


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  
  render() {
    return (

      <div className="container menu-class">
        <div className="row">
          <MenuMobil open={this.state.isOpen} />
          <div className="col col-lg-4 align-self-center">
            <div className="logo-wrapper">
              <Link to={'/'}><img className="desktop" src={LogoFull} /></Link>
              <Link to={'/'}><img className="mobil logo-mobil" src={LogoMobil} /> </Link>
              <Link to={'/'}><img className="mobil logo-text" src={LogoText} /> </Link>
            </div>
          </div>
          <div className="col col-lg-8 align-self-center">
            <div className="menu-wrapper">
              <StyledMenuName open={this.state.isOpen}>Menu</StyledMenuName>
              <Burger open={this.state.isOpen} onClick={this.toggleMenu}/>
              <Menu open={this.state.isOpen} />
              <div className="button-meny"><Button>Sign in</Button></div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
