import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    };
  }

  onNameChange = event => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  onSubmitSignIn = () => {
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      });
  };

  render() {
    return (
      <div className="container">
        <div className="ui form">
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" placeholder="Name" onChange={this.onNameChange} />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="text" name="email" placeholder="Email" onChange={this.onEmailChange} />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" onChange={this.onPasswordChange} />
          </div>
          <button
            onClick={this.onSubmitSignIn}
            className="ui button"
            type="submit"
          >
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default Register;
