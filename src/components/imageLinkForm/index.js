import React from 'react';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p>
        {'This magic brain wil detect faces in your pictures; give it a try'}
      </p>
      <div>
        <input type="text" onChange={onInputChange} />
        <button onClick={onButtonSubmit}>Detect</button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
