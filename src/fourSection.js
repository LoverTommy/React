import React, { useState } from "react";
import "./css/style.css";
import gitHubIcon from "./images/github.svg";

function FourSection() {
  return (
    <div className="fourSectionContent">
      <div className="title">
        <h2>Get in touch</h2>
        <p>
          Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis
          mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget
          hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit
          quis lorem.
        </p>
      </div>
      <div className="form">
        <form name="mainForm">
          <div className="name">
            <h4>Name</h4>
            <input type="text" name="name"></input>
          </div>

          <div className="email">
            <h4>Email</h4>
            <input type="email" name="email"></input>
          </div>

          <div className="message">
            <h4>Message</h4>
            <textarea name="message"></textarea>
          </div>

          <button>Send Messege</button>
        </form>
      </div>

      <div className="contact">
        <div className="address">
          <h4>Address</h4>
          <p>
            12345 Somewhere Road #654 <br />
            Nashville, TN 00000-0000 <br />
            USA
          </p>
        </div>

        <div className="pmail">
          <h4>Email</h4>
          <a href="mailto:user@untitled.tld">user@untitled.tld</a>
        </div>

        <div className="phone">
          <h4>Phone</h4>
          <a href="tel:(000)0000000">(000) 000-0000</a>
        </div>

        <div className="social">
          <h4>Social</h4>
          <a href="#">
            <img src={gitHubIcon}></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default FourSection;
