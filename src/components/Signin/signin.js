import React from 'react';
import '../../css/signin.css';

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
    fetch('https://still-caverns-51477.herokuapp.com/signin', {
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
      <div className="ui raised very padded text container segment form-contain">
        <div className="ui form">
          <h2>Sign In</h2>
          <div className="field">
            <label>Email</label>
            <input
              onChange={this.onEmailChange}
              type="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              onChange={this.onPasswordChange}
              type="password"
              name="password"
              placeholder="Enter password"
            />
          </div>
          <div className="ui center aligned basic segment">
            <div className="ui secondary button" onClick={this.onSubmitSignIn}
              value="Sign In">
              Sign In
            </div>
            <div className="ui horizontal divider">
              Or
            </div>
            <div className="ui button" onClick={() => onRouteChange('register')}>
              Register
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
