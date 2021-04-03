import React from "react";
import MyTransition from "../components/MyTransistion";
import logo from "../images/logo.svg";

export default function Projects(props) {
  return (
    <MyTransition show={props.show}>
      <div>
        <h2>Welcome to my projects page</h2>
        <p>
          Check out my projects{" "}
          <a
            href="https://www.behance.net/kimle-designer"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
        </p>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </MyTransition>
  );
}
