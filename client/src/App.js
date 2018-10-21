import React, { Component } from 'react';
import Login from './components/Login/Login'
import './App.css';
import VictimInfo from './components/VictimInfo/VictimInfo';
import Welcome from './components/Welcome/welcome';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Login />
          {/* <VictimInfo /> */}
          {/* <Welcome /> */}
      </div>
    );
  }
}

export default App;
