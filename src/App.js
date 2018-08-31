import React, { Component } from 'react';
import CardList from './CardList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [
        {
          title: 'Card title',
          description: 'Card description'
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>Note List</h1>
        <CardList
          list={this.state.list}
        />
      </div>
    );
  }
}

export default App;
