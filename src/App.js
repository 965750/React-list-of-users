import React, { Component } from 'react';
import './App.css';
import Users from './users/Users';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="allCont">
          <div className="inpCont">
            <div className="btnAdd">
              <i className="fas fa-plus-circle iAdd"></i>
              <span>Add user</span>
            </div>
            <form>
              <input type="text" placeholder="Name..." />
              <input type="text" placeholder="Email..." />
              <input type="submit" value="Submit" />  
            </form>
            <div className="errorCont">
              <span>Just an simple error</span>
            </div>
          </div>
          <div className="titleCont">
            <div className="listCol">
              <h4>LP</h4>
            </div>
            <div className="listCol">
              <h4>User</h4>
            </div>
            <div className="listCol">
              <h4>E-Mail</h4>
            </div>
            <div className="listCol">
            </div>
          </div>
          <Users />
      </div>
    </div>
    );
  }
}

export default App;
