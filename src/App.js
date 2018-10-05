import React, { Component } from 'react';
import './App.css';
import Colors from './components/Colors';
import Header from './components/Header';
import ColorGrid from './components/ColorGrid';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header/>
        <div className='container'>

          {/* Color Pallete */}
          <section>
            <h6 className='c-section-heading'>01. Color Pallete</h6>
            <h3>Green</h3>
            <div className='c-swatches'>
              {Object.keys(Colors.greens).map((color, i) =>
                <ColorGrid hex={Colors.greens[color].hex} rgb={Colors.greens[color].rgb} key={i} />
              )}
            </div>

            <h3>Gray</h3>
            <div className='c-swatches'>
              {Object.keys(Colors.grays).map((color, i) =>
                <ColorGrid hex={Colors.grays[color].hex} rgb={Colors.grays[color].rgb} key={i} />
              )}
            </div>

            <h3>Neutral</h3>
            <div className='c-swatches'>
              {Object.keys(Colors.neutrals).map((color, i) =>
                <ColorGrid hex={Colors.neutrals[color].hex} rgb={Colors.neutrals[color].rgb} key={i} />
              )}
            </div>
            <div className='overlay'>
                  <div className='center'>
                    <div id='copy-message-text'>Copied!</div>
                    <div id='color-picked'></div>
                  </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
