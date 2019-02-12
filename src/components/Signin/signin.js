import React from 'react';

const Signin = ({ onRouteChange }) => {
  return (
    <div className="container">
      <form className="ui form">
        <div className="field">
          <label>Email</label>
          <input type="text" name="email" placeholder="Email" />
        </div>
        <div className="field">
          <label>Password</label>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <button onClick={() => onRouteChange('home')} className="ui button" type="submit">
          Sign In
        </button>
        <p onClick={()=> onRouteChange('register')}>Register</p>
      </form>
    </div>
  );
};

export default Signin;
