import React from 'react';

const Friend = (props) => {
    return <li>{props.friend.name}, {props.friend.age}</li>
}

export default Friend