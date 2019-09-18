import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class header extends Component {

  state = {
    links: [
      {
        id: 1,
        path: "/",
        text: "home"
      },
      {
        id: 2,
        path: "/",
        text: "solution"
      },
      {
        id: 3,
        path: "/",
        text: "careers"
      },
      {
        id: 4,
        path: "/",
        text: "about"
      },
      {
        id: 5,
        path: "/",
        text: "FAQ & Suport"
      }
    ]
  }

  render() {
    return (
      <div>
        <p>header</p>
      </div>
    );
  }
}
