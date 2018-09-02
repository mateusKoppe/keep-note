import React from 'react'

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
      <div onClick={props.onClick}>
        <h2>{props.title}</h2>
        <div>{props.description}</div>
      </div>
    )
  }

  const activeCard = () => {
    return (
      <div onClick={props.onClick}>
        <input
          name="title"
          value={props.title}
          onChange={onChangeInput}
        />
        <input
          name="description"
          value={props.description}
          onChange={onChangeInput}
        />
      </div>
    )
  }


  return props.active
    ? activeCard()
    : inactiveCard()
}

export default card;
