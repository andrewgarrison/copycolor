import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Pallete from './components/Pallete';
import ContrastAnalyzer from './components/ContrastAnalyzer/ContrastAnalyzer';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header/>
        <div className='container'>
          <Pallete/>
          <ContrastAnalyzer/>
        </div>
      </div>
    );
  }
}

export default App;
