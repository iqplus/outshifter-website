import React, { Component } from 'react';


import PropTypes from 'prop-types';
import {StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import styled from 'styled-components';

import LogoFull from '../images/logo-icon-text.png';
import LogoMobil from '../images/logo-mobil.png';
import LogoText from '../images/outshifter-logo-text.png';
import LogoMobilWhite from '../images/logo-mobil_white.png';
import LogoTextWhite from '../images/outshifter-logo-text_white.png';
import Menu from './Menu/Menu.js';
import MenuMobil from './MenuMobil/MenuMobil.js';
import Burger from './Burger/Burger';
import ButtonOutline from '../components/Buttons/ButtonOutline'

import './header.css';

const StyledMenuName = styled.span`

    transition: ${({ open }) => open ? 'opacity 0.2s linear 0.1s' : 'opacity 0.2s linear 0.5s'};
    opacity: ${({ open }) => open ? '0' : '1'};
    position: relative;
    left: 435px;
    line-height: 48px;
    color: #4A4A4A;
    pointer-events: none; 

    @media only screen and (max-width: 1024px) {  
        display: none;
    }

`;


export default class Header extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      isOpen: false,
      lockScroll: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  
    // https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
    if (typeof window !== 'undefined') {
      let prevScrollpos = window.pageYOffset;
      window.onscroll = function () {
        const maxScroll = document.body.clientHeight - window.innerHeight;
        let currentScrollPos = window.pageYOffset;
        if (
          (maxScroll > 0 &&
            prevScrollpos > currentScrollPos &&
            prevScrollpos <= maxScroll) ||
          (maxScroll <= 0 && prevScrollpos > currentScrollPos) ||
          (prevScrollpos <= 0 && currentScrollPos <= 0)
        ) {
        } else {
        }
        if (currentScrollPos > 86) {
          document.getElementById('navbar').classList.add('sticky');
        }
        if (currentScrollPos < 86) {
          document.getElementById('navbar').classList.remove('sticky');
        }
        prevScrollpos = currentScrollPos;
      };
    }
  }

  toggleMenu() {
    console.log("click"); 
    this.setState({ isOpen: !this.state.isOpen });
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (window.innerWidth > 767 && this.wrapperRef && !this.wrapperRef.contains(event.target) ) {
      this.setState({ isOpen: false });
    }
  }


  render() {

    const blogHeader = true;

    return (

      <div>
        <MenuMobil open={this.state.isOpen} onClick={this.toggleMenu}/>
        <div className={(blogHeader ? 'header-blog fixed-top' : 'fixed-top')} id="navbar">
        <div className="container menu-class">
          <div className="row">
            <div className="col col-lg-4 align-self-center">
              <div className="logo-wrapper">
                <Link to={blogHeader ? '/blog' : '/'}><img className="desktop" src={LogoFull} /></Link>
                <Link to={blogHeader ? '/blog' : '/'}><img className="mobil logo-mobil" src={this.state.isOpen ? LogoMobilWhite
                      : LogoMobil} /> </Link>
                <Link to={blogHeader ? '/blog' : '/'} className={'logo-line'}><img className="mobil logo-text" src={this.state.isOpen ? LogoTextWhite
                      : LogoText} /> </Link>
                <Link to={'/blog'} className={!blogHeader ? 'logo-blog-no-display logo-blog' : 'logo-blog'}>blog</Link>
              </div>
            </div>
            <div className="col col-lg-8 align-self-center">
              <div ref={this.setWrapperRef} className="menu-wrapper">
                <StyledMenuName open={this.state.isOpen}>Menu</StyledMenuName>
                <Burger open={this.state.isOpen} onClick={this.toggleMenu}/>
                <Menu open={this.state.isOpen} />
                <div className="button-meny"><a href="https://app.outshifter.com/"><ButtonOutline>Sign in</ButtonOutline></a></div>
              </div>
            </div>
          </div>
        </div>
        </div>  
      </div>
    );
  }
}
