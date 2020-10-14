import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import axios from 'axios';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

import { v4 as uuidv4 } from 'uuid';


class App extends Component {
  
  state = {
    todos:[
      {
        id: uuidv4(),
        title: 'Take out the trash',
        completed: false
      },{
        id: uuidv4(),
        title: 'Complete assignment',
        completed: false
      },{
        id: uuidv4(),
        title: 'Make dinner',
        completed: false
      },{
        id: uuidv4(),
        title: 'Room cleaning',
        completed: false
      }
    ]
    // todos:[]
  }

  //get from dummy response
// componentDidMount(){
//   axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10')
//   .then(res => this.setState({todos : res.data}))
// }

  //Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
}

  //Delete Todo
  delTodo = (id) => {

    // axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
    // .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]}));
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.id !== id;
      })

      // todos: [...this.state.todos.filter(todo => todo.id !== id)]
      
    });
  }

  //Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }

    // axios.post('http://jsonplaceholder.typicode.com/todos',newTodo)
    // .then(res => this.setState({

      
    //   todos: [...this.state.todos, newTodo]
    //   // todos: this.state.todos.push(newTodo)
    // }));
    this.setState({
      todos: [...this.state.todos, newTodo]
      // todos: this.state.todos.push(newTodo)
    });
  }

  render(){
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path = "/" render = {props => (
              <React.Fragment>
                <AddTodo addTodo = {this.addTodo}/>
                <Todos todos={this.state.todos} markComplete = {this.markComplete} delTodo = {this.delTodo}/>
              </React.Fragment>
            )}/>
            <Route path = "/about" component={About}/>
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
