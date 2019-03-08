import React, { Component } from 'react';
import Colors from '../Colors';
import './Header.css';

class Header extends Component {
    render() {
      return (
        <header style={{backgroundColor: Colors.grays.gray.hex, color: Colors.neutrals.white.hex}}>
          <div className='container'>
            <h1>CopyColor</h1>
            <h6>By Andrew Garrison</h6>
          </div>
        </header>
      );
    }
  }

export default Header;