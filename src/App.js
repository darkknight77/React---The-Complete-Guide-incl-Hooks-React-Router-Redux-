import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
 
  
  render() {
     return (
      <div className="App">
        <h1>Hello I'm React App</h1>    
        <p>Is this working?</p>
        <Person name="John" age="10"/>
        <Person name="Frank" age="20">My hobbies : Racing</Person>
        <Person name="George" age="30"/>
      </div>
    ); 
  
   //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Is this working?'));
  }
}

export default App;
