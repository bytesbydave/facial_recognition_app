import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from './components/navigation';
import FaceRecognition from './components/faceRecognition';
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

const app = new Clarifai.App({
  apiKey: process.env.REACT_APP_CLARIFAI_API_KEY
});

class App extends Component {
  state = { input: '', imageUrl: '' };

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    console.log(this.state.imageUrl);
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        'https://samples.clarifai.com/face-det.jpg'
      )
      .then(
        function(response) {
          console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
          // do something with response
        },
        function(err) {
          // there was an error
        }
      );
  };

  render() {
    return (
      <div className="App">
        <Navigation />
        <Particles params={particlesOptions} className="particles" />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
