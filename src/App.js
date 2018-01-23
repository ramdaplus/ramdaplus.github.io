import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.js';
import Feature from './components/Feature/Feature.js';
import features from './features.json'

class App extends Component {
  render() {
    var featuresList = features.map((feature) => {
      return <Feature feature={feature}/>
    })
    return (
      <div className="App">
        <Header />
        <ul className="FeatureList">{ featuresList }</ul>
      </div>
    );
  }
}

export default App;
