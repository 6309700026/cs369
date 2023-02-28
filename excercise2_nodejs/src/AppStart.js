import React from "react";
import AddTodo from "./AddTodo";
import "./App.css";
import Title from "./Title";
import Todos from "./Todos";

const initTasks = [
    { id: 'todo-0', content: "Do Homework", completed:false },
    { id: 'todo-1', content: "Write a report", completed:true },
    { id: 'todo-2', content: "Hangout with friends", completed:true },
    { id: 'todo-3', content: "New Task", done:false },
];
  
class App extends React.Component {
  
  // constructor() {
  //   super();
  //   this.state = { tasks: initTasks, filter: "all" };
  // }
  state = { tasks: initTasks, filter: "active" };
  onChange = (e) => {
    console.log("Select option change", e.target.value)
    this.setState({ filter: e.target.value })
  }
  render() {
    const { tasks, filter } = this.state;
  return (
      <div className="container">
      
        <h1>Todo List</h1>

        {/* make this h1 to be Title component */}
        <Title name="To-Do List" style={{ color: "red" }} />

    
        {/* AddTodo start here */}
        <h2>
          <label htmlFor="new-todo-input">What needs to be done?</label>
        </h2>
        <input type="text" id="new-todo-input" placeholder="Your task" name="text" autoComplete="off" />
        <button type="submit" className="btn">
          Add
        </button>
        {/* AddTodo end here */}

        {/* make an AddTodo component  */}
        <AddTodo />

        <span>
          <label htmlFor="filter">Filter</label>
        <select name="filter" onChange={this.onChange}>
            <option value="all">...</option>
            <option value="done">Done</option>
            <option value="active">Not Done Yet</option>
          </select>
        </span>

        {/* make a Todos to display tasks from the given initTasks object */}
        <h2 id="list-heading">3 tasks remaining</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <div className="list-item">
              <input id="todo-0" type="checkbox" defaultChecked={false} />
              <label htmlFor="todo-0">Do Homework</label>
            </div>
            <div className="btn-group">
              <button type="button" className="btn btn__danger">
                Delete
              </button>
            </div>
          </li>
          <li className="list-group-item">
            <div className="list-item">
              <input id="todo-0" type="checkbox" defaultChecked={true} />
              <label htmlFor="todo-0">Write a report</label>
            </div>
            <div className="btn-group">
              <button type="button" className="btn btn__danger">
                Delete
              </button>
            </div>
          </li>
          <li className="list-group-item">
            <div className="list-item">
              <input id="todo-0" type="checkbox" defaultChecked={true} />
              <label htmlFor="todo-0">Hang out with friends</label>
            </div>
            <div className="btn-group">
              <button type="button" className="btn btn__danger">
                Delete
              </button>
            </div>
          </li>
        </ul>
        {/* Todos end here */}

        <Todos tasks={tasks} filter="done" />

      </div>
    );
  }
}

export default App;
