import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Todos from './components/Todos';
import React, { Component } from 'react';



class App extends Component {

  tasks = {
    todos: [
      {
        id: uuidv4(),
        title: 'Task 1',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Task 2',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Task 3',
        completed: false
      }
    ]
  }

  render(){
    console.log(this.tasks.todos)
    return (
      <div className="App">
        <Todos todos = {this.tasks.todos} />
      </div>
    );
  }
}



export default App;
