import React, { Component } from 'react';
import CardList from './CardList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cardList: [],
      form: {
        title: '',
        description: ''
      }
    }
  }

  cardSubmitHandle = (e) => {
    this.addCard({
      ...this.state.form
    });
    e.preventDefault();
  }

  changeField = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  addCard = (card) => {
    this.setState({
      form: {
        title: '',
        description: ''
      },
      cardList: this.state.cardList.concat([card]) 
    })
  }

  onChangeList = (newList) => {
    this.setState({
      cardList: newList 
    }) 
  }

  render() {
    return (
      <div>
        <h1>Note List</h1>
        <form onSubmit={this.cardSubmitHandle}>
          <input
            name="title"
            value={this.state.form.title}
            onChange={this.changeField}
          />
        </form>
        <CardList
          list={this.state.cardList}
          onChange={this.onChangeList}
        />
      </div>
    );
  }
}

export default App;
