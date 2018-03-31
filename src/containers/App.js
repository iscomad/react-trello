import React, { Component } from 'react';
import './App.css';
import Card from '../components/card/Card';

class App extends Component {

  state = {
    cards: [
      { id: "card1", title: "First ever card", description: "Nothing here.." },
      { id: "card2", title: "Simple card", description: "We've just created the second card. Yay!" }
    ],
    lastId: 2
  }

  newCardData = { title: "", description: "" }

  cardTitleChangedHandler = (event) => {
    this.newCardData.title = event.target.value;
  }

  cardDescriptionChangedHandler = (event) => {
    this.newCardData.description = event.target.value;
  }

  addCard = () => {
    const card = { 
      id: "card" + this.state.lastId, 
      title: this.newCardData.title, 
      description: this.newCardData.description 
    };
    const cards = [...this.state.cards, card];
    this.setState({cards: cards, lastId: this.state.lastId + 1});
  }

  removeCard = (cardId) => {
    const cards = [...this.state.cards]
    const cardIndex = cards.findIndex(card => {
      return card.id === cardId;
    });
    cards.splice(cardIndex, 1);
    this.setState({cards: cards});
  }

  render() {
    const cards = this.state.cards.map((card) => {
      return <Card title={card.title} description={card.description} clickHandler={this.removeCard.bind(this, card.id)} />
    })

    return (
      <div className="App">
        <div className="Cards">
          {cards}
        </div>
        <div className="CardForm">
          <p>Title</p><input onChange={this.cardTitleChangedHandler} />
          <p>Description</p><input onChange={this.cardDescriptionChangedHandler} />
          <button onClick={this.addCard}>Add</button>
        </div>
      </div>
    );
  }
}

export default App;
