import React, { useState } from "react";
import "./css/style.css";
import { type } from "@testing-library/user-event/dist/type";

function Header() {
  const [itemActive, setActive] = useState({});

  return (
    <div className="barItems" id="barItems">
      <div className="item1" id="item1" onClick={itemActivate}>
        <a href="#firstSection">Welcome</a>
        <hr />
      </div>
      <div className="item2" id="item2" onClick={itemActivate}>
        <a href="#secondSection" id="item2Link">
          Who We Are
        </a>
        <hr id="item2Hr" />
      </div>
      <div className="item3" id="item3" onClick={itemActivate}>
        <a href="#thirdSection">What We Do</a>
        <hr />
      </div>
      <div className="item4" id="item4" onClick={itemActivate}>
        <a href="#fourSection">Get In Touch</a>
        <hr />
      </div>
    </div>
  );

  function itemActivate(e) {
    const target = e.currentTarget;
    setActive({ [target.id]: true });
    const targetLink = target.firstElementChild;
    const targetHr = target.lastElementChild;
    targetLink.style.color = "White";
    targetHr.style.cssText =
      "animation-name: hrAnimateActive; animation-duration: 1s; animation-fill-mode: forwards;";

    for (let i in itemActive) {
      const item = document.getElementById(i);
      const itemLink = item.firstElementChild;
      const itemHr = item.lastElementChild;
      itemLink.style.color = "rgba(255, 255, 255, 0.342)";
      itemHr.style.cssText =
        "animation-name: hrAnimateNoActive; animation-duration: 1s; animation-fill-mode: forwards;";
    }
  }
}

export default Header;
