import React from "react";
import NumberIncreaseAndDecrease from "./NumberIncreaseAndDecrease";
import TodoList from "./TodoList";

const ParentUseState = () => {
  return (
    <div className="border border-5 m-2 p-2">
      <h1 className="text-center text-danger my-2">useState()</h1>
      <div className="border border-danger">
        <NumberIncreaseAndDecrease />
        <hr />
        <TodoList />
      </div>
    </div>
  );
};

export default ParentUseState;
