import React from 'react';

const Navigation = () => {
  return (
    <div className="ui secondary  menu">
      <a className="active item">Home</a>
      <a className="item">Messages</a>
      <a className="item">Friends</a>
      <div className="right menu">
        <div className="item">
          <div className="ui icon input" />
        </div>
        <a className="ui item">Logout</a>
      </div>
    </div>
  );
};

export default Navigation;
