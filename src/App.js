import React, { Component } from 'react';
import CardList from './CardList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cardList: [],
      formTitle: ''
    }
  }

  cardSubmitHandle = (e) => {
    this.addCard({
      title: this.state.formTitle 
    });
    e.preventDefault();
  }

  changeTitle = (e) => {
    this.setState({
      formTitle: e.target.value
    })
  }

  addCard = (card) => {
    this.setState({
      formTitle: '',
      cardList: this.state.cardList.concat([card]) 
    })
  }

  render() {
    return (
      <div>
        <h1>Note List</h1>
        <form onSubmit={this.cardSubmitHandle}>
          <input
            value={this.state.formTitle}
            onChange={this.changeTitle}
          />
        </form>
        <CardList
          list={this.state.cardList}
        />
      </div>
    );
  }
}

export default App;
