import React from 'react'
import PropTypes from "prop-types"
import { Link } from 'gatsby'
import LogoWhite from '../images/logo-mobil_white.png'



const Footer = () =>{
    return(
        <footer className="footer">
          <div className="container">
            <div className="row footer-links">
              <div className="col-12 col-sm-12 col-md text-left">
                <h5>
                <Link to={'/solution'}>
                  Solution
                </Link>
                </h5>
                <p>
                  <Link to={'/features'}>
                  Features
                  </Link>
                </p>
                <p>
                <Link to={'/pricing'}>
                  Pricing
                </Link>
                </p>
              </div>
              <div className="col-12 col-sm-12 col-md text-left">
                <h5>
                  <Link to={'/company'}>
                  Company
                  </Link>
                  </h5>
                <p>
                  <Link to={'/about'}>
                  About
                  </Link>
                </p>
                <p>
                <Link to={'/carreers'}>
                  Carreers
                </Link>
                </p>
                <p>
                <Link to={'/terms'}>
                  Terms & Conditions
                </Link>
                </p>
                <p>
                <Link to={'/terms'}>
                  Legal Notice
                </Link>
                </p>
                </div>
              <div className="col-12 col-sm-12 col-md text-left">
                <h5>
                  <Link to={'/company'}>
                  Comunity
                  </Link>
                </h5>
                <p>
                  <Link to={'/about'}>
                  Developers
                  </Link>
                </p>
                <p>
                  <Link to={'/about'}>
                  API Documentation
                </Link>
                </p>
                <p>
                <Link to={'/contact'}>
                  Contact
                </Link>
                </p>
              </div>
              <div className="col-12 col-sm-12 col-md text-left">
                <h5>
                  <Link to={'/company'}>
                    Support
                  </Link>
                </h5>
                <p>
                <Link to={'/contact'}>
                  Help center
                </Link>
                </p>
                <p>
                <Link to={'#'}>
                  Getting started
                </Link>
                </p>
                <p>
                  <Link to={'/solution'}>
                    Documentation
                  </Link>
                </p>

              </div>
            </div>
          </div>
          <div className="container">
            <div className="row copyright">
                <div className="col">
                <img src={LogoWhite} alt="logo white" />
                  <p>© 2020 Outshifter AS. All rights reserved.</p>
                  <p>Developed by <Link to={'https://www.iqplus.no'}>iQPLUS.</Link></p>
                </div>
            </div>
          </div>
        </footer>
    )
}
export default Footer