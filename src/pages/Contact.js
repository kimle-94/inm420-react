import React from "react";
import MyTransition from "../components/MyTransistion";
import logo from "../images/logo.svg";

export default function Contact(props) {
  return (
    <MyTransition show={props.show}>
      <div>
        <h2>Contact Me</h2>
        <div className="contact-info">
          <a href="mailto:mhkle@myseneca.ca">
            <i className="bi bi-envelope-fill"></i> mhkle@myseneca.ca
          </a>
          <a
            href="https://github.com/kimle-94"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i> kimle-94
          </a>
        </div>

        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </MyTransition>
  );
}
