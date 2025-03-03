import "react";
import propTypes from "prop-types";
import SearchPanel from "./SearchPanel";

function Controller({
  term,
  handleSearch,
  toggleTodoForm,
  handleFilter,
  handleClearSelected,
  handleClearCompleted,
  handleReset,
  viewMode,
  toggleView,
}) {
  return (
    <div>
      <SearchPanel
        term={term}
        handleSearch={handleSearch}
        toggleTodoForm={toggleTodoForm}
      />

      <div className="mt-2 flex justify-between">
        {/* filter */}
        <div className="join">
          <button onClick={() => handleFilter("all")} className="btn join-item">
            All
          </button>
          <button
            onClick={() => handleFilter("running")}
            className="btn join-item"
          >
            Running
          </button>
          <button
            onClick={() => handleFilter("completed")}
            className="btn join-item"
          >
            Completed
          </button>
        </div>

        {/* view button */}
        <div className="flex gap-2">
          <div className="flex items-center gap-2">
            <input
              id="listView"
              type="radio"
              name="view"
              checked={viewMode === "list"}
              className="radio radio-primary"
              onChange={toggleView}
            />
            <label htmlFor="listView">List View</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              id="tableView"
              type="radio"
              name="view"
              checked={viewMode === "table"}
              className="radio radio-primary"
              onChange={toggleView}
            />
            <label htmlFor="tableView">Table View</label>
          </div>
        </div>

        {/* clear section */}
        <div>
          <div className="join">
            <button
              onClick={handleClearSelected}
              className="btn btn-error join-item"
            >
              Clear Selected
            </button>
            <button
              onClick={handleClearCompleted}
              className="btn btn-error join-item"
            >
              Clear Completed
            </button>
            <button onClick={handleReset} className="btn btn-error join-item">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Controller.propTypes = {
  term: propTypes.string.isRequired,
  viewMode: propTypes.string.isRequired,
  
  handleSearch: propTypes.func.isRequired,
  toggleTodoForm: propTypes.func.isRequired,
  handleFilter: propTypes.func.isRequired,
  handleClearSelected: propTypes.func.isRequired,
  handleClearCompleted: propTypes.func.isRequired,
  handleReset: propTypes.func.isRequired,
  toggleView: propTypes.func.isRequired,
};

export default Controller;
