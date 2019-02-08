import React, { Component } from 'react';
import Navigation from './components/navigation';
import Logo from './components/logo';
import ImageLinkForm from './components/imageLinkForm'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <ImageLinkForm />
        {/* {        <Logo />
        <ImageLinkForm />
        <FaceRecognition />} */}
      </div>
    );
  }
}

export default App;
