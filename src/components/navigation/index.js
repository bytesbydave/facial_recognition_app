import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <div className="ui secondary  menu">
        <div className="right menu">
          <p
            className="ui item"
            onClick={() => onRouteChange('signout')}
          >
            Log Out
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="ui secondary  menu">
        <div className="right menu">
          <p
            href="/"
            className="ui item"
            onClick={() => onRouteChange('signin')}
          >
            Sign In
          </p>
          <p
            href="/"
            className="ui item"
            onClick={() => onRouteChange('register')}
          >
            Register
          </p>
        </div>
      </div>
    );
  }
};

export default Navigation;
