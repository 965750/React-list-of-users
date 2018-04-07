import React, {Component} from 'react';
import User from './User';
import Nav from './Nav';

class Users extends Component {
    state = {
        contacts: [],
        title:"Users List"
    }
    componentDidMount(){
        this.fetchData();
    }
    fetchAdd(e){
        e.preventDefault();    
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
    deleteSingleUser = (index, e) => {
        const users = Object.assign([], this.state.contacts);
        users.splice(index, 1);
        this.setState({contacts:users});
    }
    render (){
        return (
            <div>
                
            </div>
        )
    }
}
export default Users;