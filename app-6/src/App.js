import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       list: [],
//       input: ''
//     };

//     this.handleAddTask = this.handleAddTask.bind( this );
//   }

//   handleInputChange( value ) {
//     this.setState({ input: value });
//   }

//   handleAddTask() {
//     this.setState({ 
//       list: [...this.state.list, this.state.input ], 
//       input: '' 
//     });
//   }

//   render() {
//     let list = this.state.list.map( ( element, index ) => {
//       return (
//         <Todo key={ index } task={ element } />
//       )
//     })

//     return (
//       <div className="App">
//         <h1>My to-do list:</h1>

//         <div>
//           <input value={this.state.input} 
//                  placeholder="Enter new task" 
//                  onChange={ (e) => this.handleInputChange( e.target.value ) }
//           />

//           <button onClick={ this.handleAddTask }>Add</button>
//         </div>

//         <br />

//         { list }
//       </div>
//     );
//   }
// }

// export default App;