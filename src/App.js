import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
     return (
      <div className="App">
        <h1>Hello I'm React App</h1>    
      </div>
    ); 
 
   //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Is this working?'));
  }
}

export default App;