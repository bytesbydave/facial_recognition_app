import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  if (imageUrl !== '') {
    return (
      <div className="picture-container">
        <div className="picture-display">
          <img
            id="image-input"
            src={imageUrl}
            alt="facial"
            className="pic-display"
          />
          <div
            className="bounding-box"
            style={{
              top: box.topRow,
              right: box.rightCol,
              bottom: box.bottomRow,
              left: box.leftCol
            }}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <img
          id="image-input"
          src="https://www.entupantalla.com/wp-content/uploads/2017/06/cumple_tomholland.jpg"
          alt="facial"
          className="pic-display"
        />
      </div>
    );
  }
};

export default FaceRecognition;
