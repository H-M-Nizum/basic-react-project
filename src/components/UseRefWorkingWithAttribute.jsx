import React, { useRef } from "react";

const UseRefWorkingWithAttribute = () => {
  let changeImageAndAttribute = useRef(null);

  const Change = () => {
    if (changeImageAndAttribute.current) {
      changeImageAndAttribute.current.src = "https://placehold.co/600x400";
      changeImageAndAttribute.current.setAttribute("height", "200px");
      changeImageAndAttribute.current.setAttribute("width", "300px");
    }
  };

  return (
    <div>
      <img
        ref={changeImageAndAttribute} // Correcting the ref assignment
        src="https://placehold.co/600x400?text=Hello+World"
        alt="Placeholder Image"
      />
      <button onClick={Change}>Change Image</button>
    </div>
  );
};

export default UseRefWorkingWithAttribute;
