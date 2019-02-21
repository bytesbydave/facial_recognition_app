import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div>
      <h2>{`${name}, you have submitted ${entries} entries`}</h2>
    </div>
  );
};

export default Rank;
