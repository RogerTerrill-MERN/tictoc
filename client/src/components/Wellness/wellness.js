import React, { Component } from "react";
import "./wellness.css";
import crayons from "../../img/crayons.jpg";
import headspace from "../../img/headspace.png";
import nature from "../../img/nature.jpg";

class Wellness extends Component {
  render() {
    return (
      <div className="sign-in-container">
        <div className="text-center">
          <div className="row welcome-selection">
            <div className="col-md-4">
              <a href="https://www.calm.com/breathe" alt="">
                <img src={nature} alt="..." className="rounded-circle images" />
              </a>
              <p class="welcome-selection-title">Nature and Sounds</p>
            </div>
            <div className="col-md-4">
              <a href="www.google.com" alt="">
                <img
                  src={crayons}
                  alt="..."
                  className="rounded-circle images"
                />
              </a>
              <p className="welecome-selection-title">Coloring</p>
            </div>
            <div className="col-md-4">
              <a href="www.google.com" alt="">
                <img
                  src={headspace}
                  alt="..."
                  className="rounded-circle images"
                />
              </a>
              <p className="welcome-selection-title">Meditation</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Wellness;
