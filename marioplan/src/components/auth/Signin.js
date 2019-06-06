import React, { Component } from 'react'

export default class Signin extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={}>
          <h5 className="grey-text text-darken-3">
            Sign In
          </h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={} />
          </div>
          <div className="input-field">
            <button className="pink-lighten-1 z-depth-0">Enter</button>
          </div>
        </form>
      </div>
    )
  }
}
