import React from "react"

import Card from "./card/Card"

const Cards = (props) => {
    return props.cards.map((card) => {
        return <Card title={card.title} description={card.description} clickHandler={props.clickHandler.bind(this, card.id)} />
      })
}

export default Cards;