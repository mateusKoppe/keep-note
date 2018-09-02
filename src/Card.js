import React, { Component } from 'react';

class Card extends Component {
  inactiveCard () {
    return (
      <div onClick={this.props.onClick}>
        <h2>{this.props.title}</h2>
        <div>{this.props.description}</div>
      </div>
    )
  }

  activeCard () {
    return (
      <div onClick={this.props.onClick}>
        <input
          name="title"
          value={this.props.title}
          onChange={this.onChangeInput}
        />
        <input
          name="description"
          value={this.props.description}
          onChange={this.onChangeInput}
        />
      </div>
    )
  }

  onChangeInput = (e) => {
    const card = {
      title: this.props.title, 
      description: this.props.description
    }
    this.props.onChange({
      ...card,
      [e.target.name]: e.target.value
    })
  }
  
  render () {
    return this.props.active
      ? this.activeCard()
      : this.inactiveCard()
  }
}

export default Card;
