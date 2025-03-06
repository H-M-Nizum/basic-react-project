import React, { useState } from "react";

const TodoList = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  // Update item state on input change
  const AddToItem = (element) => {
    setItem(element);
  };
  // Add new item to list
  const AddToList = () => {
    if (item.trim() !== "") {
      setList([...list, item]); // Correct way to update state
      setItem(""); // Clear input field
    }
  };
  // Remove an item from the list by index
  const RemoveFromList = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };
  return (
    <div>
      <div className="border border-primary p-5 m-3">
        <h1 className="text-success text-center">
          12. Using useState() for Create a TODO list from input field.
        </h1>
        <div>
          <div>
            <table className="table table-bordered text-center">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Item</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {list.length > 0 ? (
                  list.map((element, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{element}</td>
                      <td>
                        <button
                          onClick={() => RemoveFromList(index)}
                          className="btn btn-danger btn-sm"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="text-center text-muted">
                      No items found. Please add a new item.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div>
            <input
              value={item}
              onChange={(e) => AddToItem(e.target.value)}
              type="text"
              placeholder="Add Item"
            />
            <button onClick={AddToList} className="btn btn-warning ms-2">
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
