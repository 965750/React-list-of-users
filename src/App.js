import React, { Component } from 'react';
import './App.css';
import Users from './users/Users';

class App extends Component {

  state = {
    btnActive: false,
  }

  inputToggle = () => {
    
    let btnAdd = document.getElementById("add");
    let firstMargin = document.getElementById("inpName");
    
    btnAdd.classList.add("btnAddHid");
    btnAdd.classList.remove("btnAdd");
      
    setTimeout(function() {
        btnAdd.style.display = "none";
        firstMargin.style.marginLeft = "25px";
      },300);
    
    this.setState({
      btnActive: true
    }); 
  }

  render() {
    return (
      <div className="App">
        <div className="allCont">
          <div className="inpCont">
            <div id="add" className="btnAdd" onClick={this.inputToggle}>
              <i className="fas fa-plus-circle iAdd"></i>
              <span>Add user</span>
            </div>
            <form className={this.state.btnActive ? 'addUserForm addUserFormActive' : 'addUserForm'}>
              <input id="inpName" type="text" placeholder="Name..." />
              <input id="inpEmail" type="text" placeholder="Email..." />
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
