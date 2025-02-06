import "react";
import propTypes from "prop-types";

function TableRow({ todo, handleSelect, handleComplete }) {
  return (
    <tr>
      <th>
        <input
          type="checkbox"
          id={todo.id}
          checked={todo.selected}
          onChange={() => handleSelect(todo.id)}
          className="checkbox checkbox-md checkbox-success self-center"
        />
      </th>
      <td>{todo.title}</td>
      <td>{todo.description}</td>
      <td>{todo.time}</td>
      <td>
        <button
          onClick={() => handleComplete(todo.id)}
          className={`btn ${
            todo.completed ? "btn-success" : "btn-error"
          } block w-full`}
        >
          {todo.completed ? "Complete" : "Incomplete"}{" "}
        </button>
      </td>
    </tr>
  );
}

TableRow.propTypes = {
  todo: propTypes.object.isRequired,
  handleSelect: propTypes.func.isRequired,
  handleComplete: propTypes.func.isRequired,
};

export default TableRow;
