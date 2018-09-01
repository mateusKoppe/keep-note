import React, { Component } from 'react';

class CardList extends Component {
  cardRender (card, index) {
    return (
      <div key={index}>
        <h2>{card.title}</h2>
        <div>{card.description}</div>
      </div>
    )
  }

  render () {
    return (
      this.props.list.map(this.cardRender)
    )
  }

}

export default CardList;
