import React from "react";
import logo from "../images/logo.svg";

export default function Home() {
  return (
    <div>
      <h2>Welcome to my home page</h2>
      <p className="detail">
        This is the INM420 assignment that helps me practice with React and
        React Router
      </p>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}
