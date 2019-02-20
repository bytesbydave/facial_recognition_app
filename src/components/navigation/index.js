import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <div className="ui inverted menu">
        <div className="ui container">
          <div className="right menu">
            <span className="ui item" onClick={() => onRouteChange('signout')}>
              Log Out
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="ui inverted menu">
        <div className="ui container">
          <div className="right menu">
            <span className="ui item" onClick={() => onRouteChange('signin')}>
              Sign In
            </span>
            <span className="ui item" onClick={() => onRouteChange('register')}>
              Register
            </span>
          </div>
        </div>
      </div>
    );
  }
};

export default Navigation;
