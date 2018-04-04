import React, {Component} from 'react';
import User from './User';

class Users extends Component {
    state = {
        users: [
            {name:"Adrian", age:27},
            {name:"Daria", age:22},
            {name:"Magda", age:37}
        ],
        title:"Users List"
    }
    render (){
        return (
            <div>
                <h1>{this.state.title}</h1>
                {
                    this.state.users.map((user)=>{
                        return <User age={user.age}>{user.name}</User>    
                    })
                }
            </div>
        )
    }
}
export default Users;