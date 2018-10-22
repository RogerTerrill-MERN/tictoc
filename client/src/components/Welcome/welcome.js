import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./welcome.css";
import game from "../../img/game.png";
import write from "../../img/write.jpg";
import heart from "../../img/heart.jpg";

class Welcome extends Component {
  render() {
    return (
      <div className="sign-in-container">
        <div className="text-center">
          <h1 className="h3 mb-3 font-weight-bold title">
            We understand that this is a stressful time. Your safety is
            extremely important. <br />
            Please let us know if you have any safety concerns so we can address
            them.
          </h1>

          <h1 className="h4 mb-3 font-weight-bold title">
            Would you like to play a game, share your story or take a moment to
            focus on your breath?
          </h1>
          <div className="row welcome-selection">
            <div className="col-md-4">
              <img
                onClick={() => this.props.history.push("/game")}
                src={game}
                alt="..."
                className="rounded-circle images"
              />
              <p class="welcome-selection-title">GAMES</p>
            </div>
            <div className="col-md-4">
              <img
                onClick={() => this.props.history.push("/mystory")}
                src={write}
                alt="..."
                className="rounded-circle images"
              />
              <p className="welecome-selection-title">MY STORY</p>
            </div>
            <div className="col-md-4">
              <img
                onClick={() => this.props.history.push("/wellness")}
                src={heart}
                alt="..."
                className="rounded-circle images"
              />
              <p className="welcome-selection-title">WELLNESS</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Welcome);
