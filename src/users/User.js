import React from 'react';

const User = (props) => {
    return (
    <li className="accSingle">
        <div className="listCol"></div>
        <div className="listCol"><span>{props.children}</span></div>
        <div className="listCol"><span>{props.email}</span></div>
        <div className="listCol"></div>
    </li>)
}

export default User;