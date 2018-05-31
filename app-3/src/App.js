import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      filterString: '',
      brands: [
        "supreme",
        "gucci",
        "louis vouitton",
        "bape",
        "guess",
        "imran",
        "micheal kors",
        "ruby",
        "heem",
        "felt",
        "unif",
        "carhartt"

      ]
    }
  }

  handleChange( filter ) {
    this.setState({
      filterString: filter
    })
  }

  render() {
    let brandsToDisplay = this.state.brands.filter( (element, index) => {
      return element.includes( this.state.filterString);
    }).map( (element, index) => {
      return <h2 key={index}>{ element }</h2>
    })

    return (
      <div className="App">
        <input onChange={ (e) => this.handleChange(e.target.value) } type="text" />
          { brandsToDisplay }
      </div>
    );
  }
}

export default App;
