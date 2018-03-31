import React from 'react'

import './Card.css'

const Card = (props) => {
    return (
        <div className="Card">
            <button onClick={props.clickHandler}>X</button>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
}

export default Card;