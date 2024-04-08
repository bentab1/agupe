import React, { useState } from "react";
import CompletedTransaction from "./CompletedTransaction";
import OtherComponent from "./OtherComponent";

function ParentComponent({ status, setStatus }) {
  // Default status is "completed"

  return (
    <div>
      <OtherComponent status={status} setStatus={setStatus} />
      <CompletedTransaction status={status} setStatus={setStatus} />
    </div>
  );
}

export default ParentComponent;
