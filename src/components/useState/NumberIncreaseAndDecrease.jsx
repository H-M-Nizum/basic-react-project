import React, { useState } from "react";

const NumberIncreaseAndDecrease = () => {
  const [number, setNumber] = useState(0);
  const increaseNumber = () => {
    setNumber(number + 1);
  };
  const decreaseNumber = () => {
    setNumber(number - 1);
  };
  return (
    <div>
      <div className="border border-primary p-5 m-3">
        <h1 className="text-success text-center">
          11. Using useState() for Number increase and decrease.
        </h1>
        <div className="text-center">
          <h3 className="border border-secondary d-inline-block p-3 px-5">
            Number : {number}
          </h3>
          <br />
          <div className="mt-3">
            <button
              onClick={() => increaseNumber()}
              className="btn btn-success p-2 mx-2"
            >
              Increase Number
            </button>
            <button
              onClick={() => decreaseNumber()}
              className="btn btn-danger p-2 mx-2"
            >
              Decrease Number
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberIncreaseAndDecrease;
