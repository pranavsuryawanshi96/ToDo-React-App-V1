import { useState } from "react";

function AddToDo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };
  const handleAddButtonClicked = (event) => {
    if (todoName === "" || dueDate === "") {
      alert("Please enter both name and due date");
      return;
    }
    event.preventDefault();
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };
  return (
    <div className="container text-center">
      <form className="row p-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Todo here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            className="form-control"
            value={dueDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button
            // onSubmit={() => handleAddButtonClicked(todoName, dueDate)}
            // type="button"
            className="btn btn-success w-100"
            // onClick={() => handleAddButton(todoName, dueDate)}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddToDo;
