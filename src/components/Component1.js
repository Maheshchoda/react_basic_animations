import React from "react";
import { Spring } from "react-spring";

export default function Component1() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {props => (
        <div style={props}>
          <div style={c1Style}>
            <h1>Context</h1>
            <p>
              Context provides a way to pass data through the component tree
              without having to pass props down manually at every level. In a
              typical React application, data is passed top-down (parent to
              child) via props, but this can be cumbersome for certain types of
              props (e.g. locale preference, UI theme) that are required by many
              components within an application. Context provides a way to share
              values like these between components without having to explicitly
              pass a prop through every level of the tree.
            </p>
            <Spring
              from={{ opacity: 0 }}
              to={{ opacity: 10 }}
              config={{ duration: 10000 }}
            >
              {props => (
                <div style={props}>
                  <h1 style={counter}>{props.opacity.toFixed()}</h1>
                </div>
              )}
            </Spring>
          </div>
        </div>
      )}
    </Spring>
  );
}

const c1Style = {
  background: "steelblue",
  color: "white",
  padding: "1.5rem"
};

const counter = {
  background: "#333",
  textAlign: "center",
  width: "100px",
  borderRadius: "50%",
  margin: "1rem auto"
};
