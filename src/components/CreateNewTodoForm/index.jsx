import PropTypes from "prop-types";
import React from "react";

export class CreateNewTodoForm extends React.Component {
  state = {
    title: "",
    description: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createNewTodo(this.state);
    this.setState({ text: "", description: "" });
    event.target.reset();
    document.getElementById("newTodoModal").close();
  };

  render() {
    return (
      <div className="flex justify-center">
        <form onSubmit={this.handleSubmit} action="#" className="w-auto">
          <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
            <legend className="fieldset-legend">New Todo</legend>

            <label className="fieldset-label">Todo Title</label>
            <input
              type="text"
              className="input"
              onChange={this.handleChange}
              placeholder="Task Name..."
              name="title"
            />

            <label className="fieldset-label">Description</label>
            <textarea
              className="textarea"
              placeholder="Task Description"
              onChange={this.handleChange}
              name="description"
            ></textarea>

            <button type="submit" className="btn btn-primary">
              Create Todo
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

CreateNewTodoForm.propTypes = {
  createNewTodo: PropTypes.func.isRequired,
};

export default CreateNewTodoForm;
