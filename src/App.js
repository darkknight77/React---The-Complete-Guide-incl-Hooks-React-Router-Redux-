import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
 
  state = {
    
    persons: [
             {name: 'john', age: 28},
             {name: 'frank', age: 43},
             {name: 'shiniami', age: 200}
]};
 
  render() {
     return (
      <div className="App">
        <h1>Hello I'm React App</h1>    
        <p>Is this working?</p>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies : Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    ); 
  
   //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Is this working?'));
  }
}

export default App;
