import React, { Component } from 'react';

import logo from '../logo.svg';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        &#169; 2020
         &#8226;
         Terms of Service
         &#8226;
         Privacy Policy
         &#8226;
         Site by Eric Kudler
      </div>
    )
  }
}

export default Footer;
