import React, { Component } from "react";
import { Spring } from "react-spring";

class Component2 extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ duration: 1500 }}
      >
        {props => (
          <div style={props}>
            <div style={c2Style}>
              <h1>Context</h1>
              <p>
                Context provides a way to pass data through the component tree
                without having to pass props down manually at every level. In a
                typical React application, data is passed top-down (parent to
                child) via props, but this can be cumbersome for certain types
                of props (e.g. locale preference, UI theme) that are required by
                many components within an application. Context provides a way to
                share values like these between components without having to
                explicitly pass a prop through every level of the tree.
              </p>
              <button style={btn} onClick={this.props.toggle}>
                Togle Component 3
              </button>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

const c2Style = {
  background: "slateblue",
  color: "white",
  padding: "1.5rem"
};

const btn = {
  background: "#333",
  color: "#fff",
  padding: "1rem 2rem",
  border: "none",
  textTransform: "uppercase",
  margin: "15px 0"
};

export default Component2;
