import React from "react";

const ChildEventComponent = ({ ChildButtonClink }) => {
  return (
    <div>
      <h1>
        6. Pass a event or function using Props From parent component to child
        component.
      </h1>
      <button onClick={ChildButtonClink}>Alert</button>
    </div>
  );
};

export default ChildEventComponent;
