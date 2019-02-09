import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/navigation';
import Logo from './components/logo';
import ImageLinkForm from './components/imageLinkForm';
import Rank from './components/rank';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Particles params={particlesOptions} className="particles" />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/* {        <Logo />
        <ImageLinkForm />
        <FaceRecognition />} */}
      </div>
    );
  }
}

export default App;
