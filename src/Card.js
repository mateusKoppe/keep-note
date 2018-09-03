import React from 'react'
import './Card.css'

const card = (props) => {
  const onChangeInput = (e) => {
    const card = {
      title: props.title, 
      description: props.description
    }
    props.onChange({
      ...card,
      [e.target.name]: e.target.value
    })
  }

  const inactiveCard = () => {
    return (
      <div
        className="Card"
        onClick={props.onClick}
      >
        <h2 class="Card-title">{props.title}</h2>
        <div>{props.description}</div>
      </div>
    )
  }

  const Card = () => {
    return (
      <div
        className="Card active"
        onClick={props.onClick}
      >
        <input
          name="title"
          className="Card-input Card-title"
          value={props.title}
          onChange={onChangeInput}
        />
        <textarea
          name="description"
          className="Card-input"
          rows="4"
          value={props.description}
          onChange={onChangeInput}
        />
      </div>
    )
  }


  return Card()
}

export default card;
