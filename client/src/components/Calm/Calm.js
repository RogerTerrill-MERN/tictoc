import React, { Component } from "react";
import "./Calm.css";
import Iframe from "react-iframe";

class Calm extends Component {
  render() {
    return (
      <div className="sign-in-container">
        <div className="text-center">
          <iframe
            title="breathe"
            src="https://www.calm.com/breathe"
            width="450px"
            height="450px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            allowFullScreen
            style={{
              width: 450,
              height: 450
            }}
          />
          {/* <iframe
            src=""
            ref={ref => (this.frame = ref)}
            allowfullscreen
            mozallowfullscreen
            webkitallowfullscreen
            title="breathr"
          /> */}
        </div>
      </div>
    );
  }
}

export default Calm;
