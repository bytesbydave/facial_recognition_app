import React from 'react';

const Register = ({ onRouteChange }) => {
  return (
    <div className="container">
      <form className="ui form">
        <div className="field">
          <label>Name</label>
          <input type="text" name="name" placeholder="Name" />
        </div>
        <div className="field">
          <label>Email</label>
          <input type="text" name="email" placeholder="Email" />
        </div>
        <div className="field">
          <label>Password</label>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <button
          onClick={() => onRouteChange('home')}
          className="ui button"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
