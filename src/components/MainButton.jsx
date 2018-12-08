import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <a
        href="javascript:void(0)"
        className="main-button"
        onClick={() => this.props.updateQuestion()}
      >
        Next Question
      </a>
    );
  }
}
export default Button;
