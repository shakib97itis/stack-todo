import "react";
import propTypes from "prop-types";

function SearchPanel({ term, handleSearch, toggleTodoForm }) {
  return (
    <div className="flex justify-between gap-3">
      <label className="input grow">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          className="grow"
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search"
          value={term}
        />
        <kbd className="kbd kbd-sm">⌘</kbd>
        <kbd className="kbd kbd-sm">K</kbd>
      </label>

      <button onClick={toggleTodoForm} className="btn btn-success">
        New Todo
      </button>
    </div>
  );
}

SearchPanel.propTypes = {
  term: propTypes.string.isRequired,
  handleSearch: propTypes.func.isRequired,
  toggleTodoForm: propTypes.func.isRequired,
};

export default SearchPanel;
