import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./css/style.css";
import Header from "./header.js";
import FirstSection from "./FirstSection.js";
import SecondSection from "./secondSection.js";
import ThirdSection from "./thirdSectiond.js";
import FourSectiond from "./fourSection.js";
import FourSection from "./fourSection.js";

const root = ReactDOMClient.createRoot(document.getElementById("root"));

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <section className="leftBar">
          <Header />
        </section>

        <section className="firstSection" id="firstSection">
          <FirstSection />
        </section>

        <section className="secondSection" id="secondSection">
          <SecondSection />
        </section>

        <section className="thirdSection" id="thirdSection">
          <ThirdSection />
        </section>

        <section className="fourSection" id="fourSection">
          <FourSection />
        </section>
      </div>
    );
  }
}

root.render(<App />);