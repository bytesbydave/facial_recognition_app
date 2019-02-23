import React from 'react';

const Rank = ({ name, entries, isSignedIn }) => {
  if (isSignedIn) {

    return (
      <div>
        <h2>{`${name}, you have submitted ${entries} entries`}</h2>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Sign in to record your entries</h2>
      </div>
    )
  }
};

export default Rank;
