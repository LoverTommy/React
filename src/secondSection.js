import React, { useState } from "react";
import "./css/style.css";
import pic1 from "./images/pic01.jpg";
import pic2 from "./images/pic02.jpg";
import pic3 from "./images/pic03.jpg";

function SecondSection() {
  return (
    <div className="secondSectionItems" id="secondSectionItems">
      <div className="item1">
        <img src={pic1} />
        <div className="item1Info">
          <h2>Sed ipsum dolor</h2>
          <p>
            Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
            turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.
          </p>
          <a href="#">Learn More</a>
        </div>
      </div>

      <div className="item2">
        <img src={pic2} />
        <div className="item2Info">
          <h2>Feugiat consequat</h2>
          <p>
            Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
            turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.
          </p>
          <a href="#">Learn More</a>
        </div>
      </div>

      <div className="item3">
        <img src={pic3} />
        <div className="item3Info">
          <h2>Ultricies aliquam</h2>
          <p>
            Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
            turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.
          </p>
          <a href="#">Learn More</a>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
