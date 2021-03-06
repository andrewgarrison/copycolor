import React, { Component } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import './ColorGrid.css';
import chooseColor from '../Helpers.js';

class ColorGrid extends Component {
    state = {
      value: '',
      copied: false,
    }
  
    hideCopiedMessage() {
      let page = document.getElementsByClassName('overlay');
      let copyMessageText = document.getElementById('copy-message-text');
      let colorPicked = document.getElementById('color-picked');
      page[0].classList.remove('show');
      copyMessageText.classList.remove('show');
      colorPicked.innerHTML = '';
      page[0].style.backgroundColor = 'transparent';
    }
  
    showCopiedMessage(hex, rgb) {
      let page = document.getElementsByClassName('overlay');
      let copyMessageText = document.getElementById('copy-message-text');
      let colorPicked = document.getElementById('color-picked');
      page[0].classList.add('show');
      colorPicked.innerHTML = hex;
      colorPicked.style.color = chooseColor(rgb)
      copyMessageText.classList.add('show');
      page[0].style.backgroundColor = hex;
      setTimeout(this.hideCopiedMessage, 1500);
    }
  
    render() {
      return (
          <div className='c-swatch'>
            <CopyToClipboard 
              key={this.props.hex.toString()} 
              text={this.props.hex.toString()} 
              onCopy={() => this.setState({copied: true})}
            >
              <div onClick={(e) => this.showCopiedMessage(this.props.hex.toString(), this.props.rgb.toString())} className='c-swatch-color' style={{backgroundColor: this.props.hex}}></div>
            </CopyToClipboard>
            <div className='c-swatch-info'>
              <p>Hex: {this.props.hex}</p>
              <p>RGB: {this.props.rgb}</p>
            </div>
          </div>
      );
    }
  }

  export default ColorGrid;