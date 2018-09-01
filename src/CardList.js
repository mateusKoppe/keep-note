import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
  render () {
    return (
      this.props.list.map((card, index) => (
        <Card
          title={card.title}
          description={card.description}
          key={index}
        /> 
      ))
    )
  }
}

export default CardList;
