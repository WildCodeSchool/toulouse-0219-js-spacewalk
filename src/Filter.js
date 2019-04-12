import React, { Component } from "react";

class Filter extends Component {
  state = {};
  render() {
    return (
      <div>
        {["Science Release", "Photo Release"].map((tag, index) => (
          <button onClick={() => this.props.handleFiltertags(tag)}>
            {tag}
          </button>
        ))}
        <button onClick={() => this.props.handleFiltertags("")}>X</button>
      </div>
    );
  }
}

export default Filter;
