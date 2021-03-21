import React from "react";
import logo from "../images/logo.svg";

export default function About() {
  return (
    <div>
      <h2>Hi, I am Kim</h2>
      <p className="detail">
        I'm an Interactive Media Design student at Seneca College
      </p>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}
