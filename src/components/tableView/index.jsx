import "react";
import TableRow from "./TableRow";
import propTypes from "prop-types";

function TableView({ todos, handleSelect, handleComplete }) {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {/* rows */}
          {todos.map((todo) => (
            <TableRow
              key={todo.id}
              todo={todo}
              handleSelect={handleSelect}
              handleComplete={handleComplete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

TableView.propTypes = {
  todos: propTypes.array.isRequired,
  handleSelect: propTypes.func.isRequired,
  handleComplete: propTypes.func.isRequired,
};

export default TableView;
