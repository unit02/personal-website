import React from "react";
import { render } from "react-dom";

import Heading from "./Heading";
import Tabs from "./Tabs";
import TabContent from "./TabContent";
require("./styles.css");

function App() {
  return (
    <div id="mainDiv">
      <Heading />
      <Tabs>
        <div label="about">
          <TabContent>hello gator</TabContent>
        </div>
        <div label="links">
          <TabContent>hello croc</TabContent>
        </div>
        <div label="contact">
          <TabContent>hello croc</TabContent>
        </div>
      </Tabs>
    </div>
  );
}

const container = document.createElement("div");
document.body.appendChild(container);
render(<App />, container);
