import React, { Component } from 'react';

export default class CreateProject extends Component {
  state = {
    title: '',
    content: '',
  };
  s;
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
          <h5 className="grey-text text-darken-3">Create Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.onChangeHandler} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea
              className="materialize-textarea"
              name="content"
              id="content"
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="input-field">
            <button className="btn pink-lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}
