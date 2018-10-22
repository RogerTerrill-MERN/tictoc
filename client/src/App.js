import React, { Component } from "react";
import Login from "./components/Login/Login";
import "./App.css";
import VictimInfo from "./components/VictimInfo/VictimInfo";
import Welcome from "./components/Welcome/welcome";
import Game from "./components/Game/Game";
import Wellness from "./components/Wellness/wellness";
import Report from "./components/Report/Report";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/victiminfo">Victim Info</Link>
            </li>
            <li>
              <Link to="/welcome">Welcome</Link>
            </li>
            <li>
              <Link to="/game">Games</Link>
            </li>
            <li>
              <Link to="/wellness">Wellness</Link>
            </li>
            <li>
              <Link to="/report">Final Report</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Login} />
          <PrivateRoute path="/victiminfo" component={VictimInfo} />
          <PrivateRoute path="/welcome" component={Welcome} />
          <PrivateRoute path="/game" component={Game} />
          <PrivateRoute path="/wellness" component={Wellness} />
          <PrivateRoute path="/report" component={Report} />
        </div>
      </Router>
    );
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const fakeAuth = {
  isAuthenticated: true,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

export default App;
