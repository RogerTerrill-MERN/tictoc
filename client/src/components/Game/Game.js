import React, { Component } from "react";
import "./Game.css";
import { withRouter } from 'react-router-dom';
import tetris from "../../img/tetris.png";
import candycrush from "../../img/candycrush.png";
import pacman from "../../img/pacman.png";

class Game extends Component {
  render() {
    return (
      <div className="sign-in-container">
        <div className="text-center">
          <div>
            <embed
              width="800"
              height="512"
              base="https://external.kongregate-games.com/gamez/0022/3733/live/"
              src="https://external.kongregate-games.com/gamez/0022/3733/live/embeddable_223733.swf"
              type="application/x-shockwave-flash"
            />
          </div>
          <div className="row welcome-selection">
            <div className="col-md-4">
              <a href="www.google.com" alt="">
                <img
                  
                  src={candycrush}
                  alt="..."
                  className="rounded-circle images"
                />
              </a>
              <p class="welcome-selection-title">Candy Crush</p>
            </div>
            <div className="col-md-4">
              <a href="www.google.com" alt="">
                <img src={tetris} alt="..." className="rounded-circle images" />
              </a>
              <p className="welecome-selection-title">Tetris</p>
            </div>
            <div className="col-md-4">
              <a href="www.google.com" alt="">
                <img src={pacman} alt="..." className="rounded-circle images" />
              </a>
              <p className="welcome-selection-title">Pacman</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Game);
