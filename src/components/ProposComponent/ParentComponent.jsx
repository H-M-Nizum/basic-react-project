import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const userData = {
    id: 1,
    name: "Nizum",
    age: 25,
    gender: "Male",
    bloodGroup: "A+",
    designation: "Software Engineer",
  };
  return (
    <div>
      <ChildComponent userData={userData} />
    </div>
  );
};

export default ParentComponent;
