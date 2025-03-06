import React, { useRef } from "react";

// useRef() can Caching expensive computations.
const UseRefAPICall = () => {
  let ApiData = useRef(null);
  let myPTag = useRef();

  const FetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // Caching Response data
    ApiData.current = await response.json();
  };
  const ShowData = () => {
    myPTag.current.innerText = JSON.stringify(ApiData);
  };
  return (
    <div>
      <h1>10. API Call And Show Data using useRef() Like Cashing.</h1>
      {/* show data in this p tag */}
      <p ref={myPTag}></p>
      <button onClick={FetchData}>API Call</button>
      <button onClick={ShowData}>Show Data</button>
    </div>
  );
};

export default UseRefAPICall;
