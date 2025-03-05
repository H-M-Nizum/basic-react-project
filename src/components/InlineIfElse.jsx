import React from "react";

const InlineIfElse = () => {
  const age = 23;
  return (
    <div>
      <h1>1. Use Inline If Else Condition</h1>
      {age >= 18 ? <h3>You Are Adult</h3> : <h3>You Are Not Adult</h3>}
    </div>
  );
};

export default InlineIfElse;
