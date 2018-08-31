import React, { Component } from 'react';

class CardList extends Component {
  render () {
    return (
      this.props.list.map(this.cardRender)
    )
  }

  cardRender (card) {
    return (
      <div>
        <h2>{card.title}</h2>
        <div>{card.description}</div>
      </div>
    )
  }
}

export default CardList;
