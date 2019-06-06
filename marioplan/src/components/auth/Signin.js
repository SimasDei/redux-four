import React, { Component } from 'react';

export default class Signin extends Component {
  state = {
    email: '',
    password: '',
  };

  onSubmitHandler = e => {
    e.preventDefault();
    console.log(this.state);
  };
  onChangeHandler = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.onSubmitHandler}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.onChangeHandler} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.onChangeHandler} />
          </div>
          <div className="input-field">
            <button className="btn pink-lighten-1 z-depth-0">Enter</button>
          </div>
        </form>
      </div>
    );
  }
}
