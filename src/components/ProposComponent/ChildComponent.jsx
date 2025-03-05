import React from "react";

const ChildComponent = ({ userData }) => {
  return (
    <div>
      <h1>5. Pass Props From Parent Component to Child Component</h1>
      <div style={styles.card}>
        <h2 style={styles.title}>{userData.name}</h2>
        <p>
          <strong>ID:</strong> {userData.id}
        </p>
        <p>
          <strong>Age:</strong> {userData.age}
        </p>
        <p>
          <strong>Gender:</strong> {userData.gender}
        </p>
        <p>
          <strong>Blood Group:</strong> {userData.bloodGroup}
        </p>
        <p>
          <strong>Designation:</strong> {userData.designation}
        </p>
      </div>
    </div>
  );
};
// Simple inline styles for the card
const styles = {
  card: {
    width: "300px",
    padding: "20px",
    margin: "20px auto",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    backgroundColor: "#fff",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    color: "#333",
    marginBottom: "10px",
  },
};
export default ChildComponent;
