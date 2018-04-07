import React from 'react';

const User = (props) => {
    return (
    <li className="accSingle">
        <div className="listCol"><div className="nrCont"><p>{props.position + 1}</p></div></div>
        <div className="listCol"><span>{props.children}</span></div>
        <div className="listCol"><span>{props.email}</span></div>
        <div className="listCol"><button onClick={props.deleteUser}><i className="fas fa-times"></i></button></div>
    </li>)
}

export default User;