import { Component } from "react";
import ListView from "../listView";
import TableView from "../tableView";

// Dummy todos

export class Todos extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Todo 1",
        description: "Lorem ipsum dolor sit amet.",
        completed: true,
        time: new Date().toDateString(),
        selected: true,
      },
      {
        id: 2,
        title: "Todo 2",
        description: "Lorem ipsum dolor sit amet.",
        completed: false,
        time: new Date().toDateString(),
        selected: false,
      },
      {
        id: 3,
        title: "Todo 3",
        description: "Lorem ipsum dolor sit amet.",
        completed: false,
        time: new Date().toDateString(),
        selected: false,
      },
      {
        id: 4,
        title: "Todo 4",
        description: "Lorem ipsum dolor sit amet.",
        completed: false,
        time: new Date().toDateString(),
        selected: false,
      },
    ],
  };

  handleSelect = (id) => {
    console.log("Selected", id);
  };

  handleComplete = (id) => {
    console.log("Completed", id);
  };

  render() {
    return (
      <>
        <h1 className="bg-amber-950 text-gray-300">React ToDoS</h1>
        {/* List View */}
        <div>
          <ListView
            todos={this.state.todos}
            handleSelect={this.handleSelect}
            handleComplete={this.handleComplete}
          />
        </div>
        {/* Table View */}
        <div>
          <TableView
            todos={this.state.todos}
            handleSelect={this.handleSelect}
            handleComplete={this.handleComplete}
          />
        </div>
      </>
    );
  }
}

export default Todos;
