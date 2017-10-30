import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import Hangman from './containers/Hangman'
import NewGame from './containers/NewGame'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title content="Hangman" />
        <Hangman />
        <NewGame />
      </div>
    );
  }
}

export default App;
