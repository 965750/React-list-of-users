import React, { Component } from 'react';
import './App.css';
import User from './users/User';

class App extends Component {

  state = {
        contacts: [],
        title:"Users List",
        btnActive: false
    }
  componentDidMount(){
        this.fetchData();
    }
  fetchData(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then(data => data.map(user => (
            {
                id: `${user.id}`,
                name: `${user.name}`,
                email: `${user.email}`,
            }
        )))
        .then(contacts => this.setState({
            contacts,
            isLoading: false
        }))
        .catch(error => console.log('parsing failed', error))
    }
  addSingleUser = (e) => {
    e.preventDefault();
    
    let name = this.firstNameInp.value;
    let email = this.emailInp.value;
    var url = 'https://jsonplaceholder.typicode.com/users';
      
    fetch(url, {
      method:'POST',
      headers: {
        'Accept': 'aplication/json, text/plain, */*',
        'Content-type':'aplication/json'
      },
      body:JSON.stringify({name:"just test", email:"testing"})
    })
        .then(resp => resp.json())
        .then(data => console.log(data))
  }
  deleteSingleUser = (index, e) => {
      const users = Object.assign([], this.state.contacts);
      users.splice(index, 1);
      this.setState({contacts:users});
  }

  inputToggle = () => {

    let btnAdd = document.getElementById("add");
    let firstInp = document.getElementById("inpName");
    
    btnAdd.classList.add("btnAddHid");
    btnAdd.classList.remove("btnAdd");
    
    const that = this;

    setTimeout(function() {
        btnAdd.style.display = "none";
        firstInp.style.marginLeft = "25px";
        
        that.firstNameInp.focus();
      },300);
     
    this.setState({
      btnActive: true
    });

  }
  letterCheck = (e) => {  
      
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
              <input ref={(input)=>{this.firstNameInp = input}} pattern="[a-z]"  title="only letters" maxLength="20" onKeyDown={this.letterCheck} id="inpName" type="text" placeholder="Name..." />
              <input ref={(input)=>{this.emailInp = input}} id="inpEmail" type="text" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" title="Invalid email address" placeholder="Email..." />
              <input type="submit" value="Submit" onClick={this.addSingleUser}/>  
            </form>
            <div className="errorCont">
              <div className="alertICont">
                <span>!</span>
              </div>
              <span id="errorContent">Just an simple error</span>
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
          <ul className="accList">
          {
            this.state.contacts.map((user, index)=>{
              return <User key={user.id} position={index} deleteUser={this.deleteSingleUser.bind(this, index)} email={user.email}>{user.name}</User>    
            })
          }
          </ul>
      </div>
    </div>
    );
  }
}

export default App;
