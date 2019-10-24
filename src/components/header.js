import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'

import Logo from '../images/logo.png';
import LogoMobil from '../images/logo-mobil.png';
import LogoText from '../images/outshifter-logo-text.png';
import Menu from './Menu/Menu.js';
import Burger from './Burger/Burger';
import Button from './Button/Button';

import './header.css';
import { StyledMenuName } from './Header.styled';


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
          <div className="col col-lg-4 align-self-center">         
            <div className="wrapper">
              <div className="logo-wrapper">
                <img className="desktop" src={Logo} />
                <img className="mobil logo-mobil" src={LogoMobil} />
                <img className="mobil logo-text" src={LogoText} />
              </div>
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
