import React from "react";

const RespondingEvent = () => {
  return (
    <div>
      <h1>7. Responding to event</h1>
      {/* Use Js Statement. Problem is Every time show alert when page reload*/}
      {/* <button onClick={alert("Use Js Statement.")}>Show Alert</button> */}

      {/* Use js Statement in a arrow function */}
      <button
        onClick={() => {
          alert("Show Alert When Click Button");
        }}
      >
        Show Alert
      </button>

      {/* Show alert using normal function */}
      <button
        onClick={function () {
          alert("Show Alert using normal function");
        }}
      >
        Normal Function
      </button>
    </div>
  );
};

export default RespondingEvent;
