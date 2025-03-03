import { Component } from "react";
import ListView from "../ListView";
import TableView from "../TableView";
import CreateTodoForm from "../CreateNewTodoForm";
import Controller from "../controller";

export class Todos extends Component {
  state = {
    searchTerm: "",
    viewMode: "list",
    filter: "all",
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
    const todos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, selected: !todo.selected };
      }
      return todo;
    });

    this.setState({ todos });
  };

  handleComplete = (id) => {
    const todos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos });
  };

  createNewTodo = (todo) => {
    todo.id = this.state.todos.length + 1;
    todo.completed = false;
    todo.time = new Date().toDateString();
    todo.selected = false;
    const todos = [...this.state.todos, todo];
    this.setState({ todos });
  };

  toggleTodoForm = () => {
    document.getElementById("newTodoModal").showModal();
  };

  handleSearch = (term) => {
    this.setState({ searchTerm: term });
  };

  performSearch = () => {
    return this.state.todos.filter((todo) =>
      todo.title
        .toLocaleLowerCase()
        .includes(this.state.searchTerm.toLocaleLowerCase())
    );
  };

  handleFilter = (filter) => {
    this.setState({ filter });
  };

  performFilter = (todos) => {
    if (this.state.filter === "all") {
      return todos;
    } else if (this.state.filter === "running") {
      return todos.filter((todo) => todo.completed === false);
    } else if (this.state.filter === "completed") {
      return todos.filter((todo) => todo.completed === true);
    }
  };

  toggleView = () => {
    if (this.state.viewMode === "list") {
      this.setState({ viewMode: "table" });
    } else if (this.state.viewMode === "table") {
      this.setState({ viewMode: "list" });
    }
  };

  handleClearSelected = () => {
    const todos = this.state.todos.filter((todo) => todo.selected === false);
    this.setState({ todos });
  };

  handleClearCompleted = () => {
    const todos = this.state.todos.filter((todo) => todo.completed === false);
    this.setState({ todos });
  };

  handleReset = () => {
    this.setState({
      searchTerm: "",
      viewMode: "list",
      filter: "all",
    });
  };

  // generate view
  generateView = () => {
    const searchedTodos = this.performSearch();
    const todos = this.performFilter(searchedTodos);

    if (this.state.viewMode === "list") {
      return (
        <ListView
          todos={todos}
          handleSelect={this.handleSelect}
          handleComplete={this.handleComplete}
        />
      );
    } else if (this.state.viewMode === "table") {
      return (
        <TableView
          todos={todos}
          handleSelect={this.handleSelect}
          handleComplete={this.handleComplete}
        />
      );
    }
  };

  render() {
    return (
      <>
        <h1 className="bg-amber-950 text-center mb-2 text-2xl py-1 text-gray-300">
          My Todo App
        </h1>

        {/* Controller */}
        <Controller
          toggleTodoForm={this.toggleTodoForm}
          viewMode={this.state.viewMode}
          toggleView={this.toggleView}
          term={this.state.searchTerm}
          handleSearch={this.handleSearch}
          handleFilter={this.handleFilter}
          handleClearSelected={this.handleClearSelected}
          handleClearCompleted={this.handleClearCompleted}
          handleReset={this.handleReset}
        />

        {/* List View */}
        <div>{this.generateView()}</div>

        {/* MODAL */}
        <dialog id="newTodoModal" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">NewTodo</h3>
            <CreateTodoForm createNewTodo={this.createNewTodo} />
          </div>
        </dialog>
      </>
    );
  }
}

export default Todos;
