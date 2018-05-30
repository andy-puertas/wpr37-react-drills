import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      brands: [
        'prada',
        'gucci',
        'bape',
        'supreme',
        'guess'
      ]
    }
  }

  render() {
    let brandsToDisplay = this.state.brands.map((element, index ) => {
      return (
        <h3 key={ index }>{ element }</h3>
      )
    })

    return (
      <div className="App">
        { brandsToDisplay }
      </div>
    );
  }
}

export default App;
