import './App.css';
import React, { Component } from 'react';  //分别暴露
import Footer from './components/Footer';
import List from './components/List'
import Header from './components/Header'

export default class App extends Component {

  addTodo = (item) => {
    this.setState({
      todos: [item, ...this.state.todos]
    })
  }

  deleteTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter(item => {
      return item.id !== id
    })
    this.setState({ todos: newTodos });
  }

  updateTodo = (id, done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todo, index) => {
      if (todo.id === id) {
        return { ...todo, done: done };
      } else {
        return todo;
      }
    }
    )
    this.setState({ todos: newTodos })
  }

  // 用于全选
  checkAll = (done) => {
    // 获取原来的todos
    const { todos } = this.state
    // 过滤数据
    const newTodos = todos.map((todo) => {
      return { ...todo, done: done }
    })
    // 更新状态
    this.setState({ todos: newTodos })
  }

  // 清除所有已经完成的
  clearAllDone = () => {
    const { todos } = this.state
    const newTodos = todos.filter((todo) => {
      return !todo.done
    })
    this.setState({ todos: newTodos })
  }

  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: true },
      { id: '003', name: '打代码', done: true },
      { id: '004', name: '午睡', done: false },
    ]
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer todos={todos} checkAll={this.checkAll} clearAllDone={this.clearAllDone} />
        </div>
      </div>
    )
  }

}