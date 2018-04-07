import React from 'react';

const Nav = (props) => {
    return (
    <div>
        <div className="inpCont">
            <div id="add" className="btnAdd" onClick={this.inputToggle}>
              <i className="fas fa-plus-circle iAdd"></i>
              <span>Add user</span>
            </div>
            <form className={this.state.btnActive ? 'addUserForm addUserFormActive' : 'addUserForm'}>
              <input ref={(input)=>{this.firstName = input}} pattern="[a-z]"  title="only letters" maxLength="20" onKeyDown={this.letterCheck} id="inpName" type="text" placeholder="Name..." />
              <input id="inpEmail" type="text" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" title="Invalid email address" placeholder="Email..." />
              <input type="submit" value="Submit"/>  
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
    </div>
    )
}

export default Nav;