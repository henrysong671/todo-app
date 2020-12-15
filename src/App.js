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


  toggleComplete = (id) =>{
    this.setState({ todos: this.tasks.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  deleteTodo = (id) =>{
    //console.log(id)
    this.setState({ todos: [...this.tasks.todos.filter(todo => todo.id !== id)] });
  }

  render(){
    //console.log(this.tasks.todos)
    return (
      <div className="App">
        <Todos todos = {this.tasks.todos} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}



export default App;
