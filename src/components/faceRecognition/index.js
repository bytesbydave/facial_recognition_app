import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt='facial' width='500px' height="auto" />
    </div>
  );
};

export default FaceRecognition;
