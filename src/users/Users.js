import React, {Component} from 'react';
import User from './User';

class Users extends Component {
    state = {
        users: [
            {name:"Adrian", age:27},
            {name:"Daria", age:22},
            {name:"Magda", age:37}
        ],
        contacts: [],
        title:"Users List"
    }
    componentDidMount(){
        this.fetchData();
    }
    fetchData(){
        fetch('https://randomuser.me/api/?results=50&nat=us,dk,fr,gb')
        .then(resp => resp.json())
        .then(data => data.results.map(user => (
            {
                name: `${user.name.first} ${user.name.last}`,
                username: `${user.login.username}`,
                email: `${user.email}`,
                location: `${user.location.street}, ${user.location.city}`
            }
        )))
        .then(contacts => this.setState({
            contacts,
            isLoading: false
        }))
        .catch(error => console.log('parsing failed', error))
    }
    render (){
        return (
            <div>
                <h1>{this.state.title}</h1>
                {
                    this.state.contacts.map((user)=>{
                        return <User key={user.username} age={user.username}>{user.name}</User>    
                    })
                }
            </div>
        )
    }
}
export default Users;