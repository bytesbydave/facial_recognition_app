import React from 'react';

const Navigation = () => {
  return (
    <div className="ui secondary  menu">
      <a href="/" className="active item">Home</a>
      <a href="/" className="item">Messages</a>
      <a href="/" className="item">Friends</a>
      <div className="right menu">
        <div className="item">
          <div className="ui icon input" />
        </div>
        <a href="/" className="ui item">Logout</a>
      </div>
    </div>
  );
};

export default Navigation;
