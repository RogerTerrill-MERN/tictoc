import React, { Component } from "react";
import "./Report.css";
import { withRouter } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div className="sign-in-container">
        <div className="text-center">
          <form class="form-style-4" action="" method="post">
          <label for="field1">
              <span>Victim's Relationship to Suspect</span>
              <textarea
                name="field4"
                onkeyup="adjust_textarea(this)"
                required="true"
              />
            </label><label for="field4">
              <span>Address</span>
              <textarea
                name="field4"
                onkeyup="adjust_textarea(this)"
                required="true"
              />
            </label><label for="field4">
              <span>Time</span>
              <textarea
                name="field4"
                onkeyup="adjust_textarea(this)"
                required="true"
              />
            </label>
            <label for="field4">
              <span>Further Information</span>
              <textarea
                name="field4"
                onkeyup="adjust_textarea(this)"
                required="true"
              />
            </label>
            <label>
              <span> </span>
              <input type="submit" value="Submit Report" />
            </label>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
