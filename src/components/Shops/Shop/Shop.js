import React from 'react';

const shop = (props) => {
    return <div onClick={props.clicked}>
                <p>{props.name}</p>
                <p>{props.price}</p>
                <p>{props.id}</p>
            </div>
};

export default shop;