import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="picture-display">
      <img
        id="image-input"
        src={imageUrl}
        alt="facial"
        width="500px"
        height="auto"
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
  );
};

export default FaceRecognition;
