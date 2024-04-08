import React from "react";
import CompletedTransaction from "./TransactionStatus/CompletedTransaction/CompletedTransaction";

function OtherComponent({ setStatus }) {
  // const [showTransaction]
  return (
    <div style={{ position: "absolute", zIndex: "10" }}>
      <button onClick={() => setStatus("completed")}>Completed</button>
      <button onClick={() => setStatus("upcoming")}>Pending</button>
      <CompletedTransaction setStatus={setStatus} />
      {/* Add more buttons for other status options if needed */}
    </div>
  );
}

export default OtherComponent;
