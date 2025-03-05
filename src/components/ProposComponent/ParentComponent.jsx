import React from "react";
import ChildComponent from "./ChildComponent";
import ChildEventComponent from "./ChildEventComponent";

const ParentComponent = () => {
  const userData = {
    id: 1,
    name: "Nizum",
    age: 25,
    gender: "Male",
    bloodGroup: "A+",
    designation: "Software Engineer",
  };

  //   child button click event
  const ButtonClick = () => {
    alert("Show Alart Using Props");
  };
  return (
    <div>
      <ChildComponent userData={userData} />
      <ChildEventComponent ChildButtonClink={ButtonClick} />
    </div>
  );
};

export default ParentComponent;
