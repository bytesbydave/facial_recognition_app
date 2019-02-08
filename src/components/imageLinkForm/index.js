import React from 'react';

class ImageLinkForm extends React.Component {
  render () {
    return(
      <div>
        <p>
          {'This magic brain wil detect faces in your pictures; give it a try'}
        </p>
        <div>
          <input type='text'/>
          <button>Detect</button>
        </div>
      </div>
    )
  }
}

export default ImageLinkForm;