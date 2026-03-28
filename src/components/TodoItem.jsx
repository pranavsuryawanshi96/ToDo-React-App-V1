function TodoItem({ todoDate, todoName }) {
  return (
    <div className="container">
      <div className="row p-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button p-btn" className="btn btn-danger w-100">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
