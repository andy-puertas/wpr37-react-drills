import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      userInput: ''
    }
  }

  handleChange(value){
    this.setState({
      userInput: value
    })
  }
  
  render() {
    console.log(this.state)
    return (
      <div className="App">
      <h1>Input Box</h1>
      <input onChange={(e) => this.handleChange(e.target.value) }/>
      <p>{ this.state.userInput }</p>

      </div>
    );
  }
}

export default App;
