export const SearchBar = ({ qwery, filterBy }) => {
  return (
    <div className="field is-grouped is-justify-content-space-between">
      <h1 className="title is-1">To Do List</h1>
      <div>
        <div className="field has-addons">
          <div className="control">
            <input
              className="input is-rounded"
              type="text"
              placeholder="Find a task"
              value={qwery}
              onChange={(event) => filterBy(event.target.value)}
            />
          </div>
          <div className="control">
            <button
              className="button is-info is-rounded"
              onClick={() => filterBy("")}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
