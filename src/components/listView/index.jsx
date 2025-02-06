import "react";
import ListItem from "./ListItem";
import propTypes from "prop-types";

function ListView({ todos, handleSelect, handleComplete }) {
  return (
    <div>
      <ul className="list bg-base-100 rounded-box shadow-md">
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            todo={todo}
            handleSelect={handleSelect}
            handleComplete={handleComplete}
          />
        ))}
      </ul>
    </div>
  );
}

ListView.propTypes = {
  todos: propTypes.array.isRequired,
  handleSelect: propTypes.func.isRequired,
  handleComplete: propTypes.func.isRequired,
};

export default ListView;
