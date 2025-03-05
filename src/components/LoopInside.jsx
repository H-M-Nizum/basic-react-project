import React from "react";

const LoopInside = () => {
  const grade = ["A+", "A", "A-", "B", "C", "D", "F"];
  return (
    <div>
      <h1>3. Use Loop Inside React Component</h1>
      {grade.map((item, i) => {
        return (
          <li>
            {i}. {item}
          </li>
        );
      })}
    </div>
  );
};

export default LoopInside;
