import React, { useRef } from "react";

const UseRefComponent = () => {
  let myHeadLine = useRef();
  const change = () => {
    myHeadLine.current.innerText = "Set HeadLine Using useRef Hook";
  };
  return (
    <div>
      <h1>9. Using useRef() Hook</h1>
      <h1 ref={myHeadLine}></h1>
      <button onClick={() => change()}>Change-useRef</button>
    </div>
  );
};

export default UseRefComponent;
