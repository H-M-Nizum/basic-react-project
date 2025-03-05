import React from "react";

const ImmediatelyInvokd = () => {
  const age = 14;
  return (
    <div>
      <h1>2. Immediately Invoked Function</h1>
      {(() => {
        if (age > 18) {
          return <h3>You Are Adult</h3>;
        } else if (age < 18) {
          return <h3>You Are Not Adult</h3>;
        } else {
          return <h3>Your Are 18.</h3>;
        }
      })()}
    </div>
  );
};

export default ImmediatelyInvokd;
