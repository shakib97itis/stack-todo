import "react";
import propTypes from "prop-types";

function ListItem({ todo, handleSelect, handleComplete }) {
  return (
    <li className="list-row">
      <input
        type="checkbox"
        id={todo.id}
        checked={todo.selected}
        onChange={() => handleSelect(todo.id)}
        className="checkbox checkbox-sm checkbox-success self-center"
      />
      <div>
        <div>Todo 1</div>
        <div className="text-xs uppercase font-semibold opacity-60">
          {todo.time}
        </div>
      </div>
      <button
        onClick={() => handleComplete(todo.id)}
        className={`btn ${todo.completed ? "btn-success" : "btn-error"}`}
      >
        {todo.completed ? "Complete" : "Incomplete"}{" "}
      </button>
    </li>
  );
}

ListItem.propTypes = {
  todo: propTypes.object.isRequired,
  handleSelect: propTypes.func.isRequired,
  handleComplete: propTypes.func.isRequired,
};

export default ListItem;
