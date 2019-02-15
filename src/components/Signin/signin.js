import React from 'react';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    };
  }

  onEmailChange = event => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ signInPassword: event.target.value });
  };

  onSubmitSignIn = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
      });
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <div className="container">
        <div className="ui form">
          <div className="field">
            <label>Email</label>
            <input
              onChange={this.onEmailChange}
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              onChange={this.onPasswordChange}
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div>
            <input
              onClick={this.onSubmitSignIn}
              className="ui button"
              type="submit"
              value="Sign In"
            />
          </div>
          <p onClick={() => onRouteChange('register')}>Register</p>
        </div>
      </div>
    );
  }
}

export default Signin;
