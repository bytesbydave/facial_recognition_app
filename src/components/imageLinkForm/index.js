import React from 'react';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="ui raised very padded text container segment">
      <h3>
        {'This magic machine will detect faces in your pictures. Give it a try'}
      </h3>
      <div className="ui center aligned basic segment">
        <div className="ui left icon action input">
          <i className="search icon" />
          <input
            type="text"
            placeholder="Photo URL"
            onChange={onInputChange}
          />
          <div className="ui blue submit button" onClick={onButtonSubmit}>
            Detect
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
