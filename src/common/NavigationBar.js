import React, { Component } from 'react';

import logo from '../logo.svg';
import './NavigationBar.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar variant="dark">
        <Navbar.Brand href="/">
          <FontAwesomeIcon icon={faLink} />
          {' '}
          Mark(ov) My Words
        </Navbar.Brand>
      </Navbar>
    )
  }
}

export default NavigationBar;
