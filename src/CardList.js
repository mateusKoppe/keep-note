import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeCard: null 
    }
  }

  onChangeCard = (card) => (data) => {
    const list = this.props.list
    const cardIndex = list.indexOf(card)
    list[cardIndex] = data
    this.props.onChange(list)
  }

  onClickCard = (card) => () => {
    const index = this.props.list.indexOf(card)
    this.setState({
      activeCard: index 
    })
  }

  render () {
    return (
      this.props.list.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          active={this.state.activeCard === index}
          onClick={this.onClickCard(card)}
          onChange={this.onChangeCard(card)}
        /> 
      ))
    )
  }
}

export default CardList;
