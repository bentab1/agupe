import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "./index.css";
import TransferToOwnAccount from "./components/TransferToOwnAccount";

// import TransferAnotherBank from "./components/TransferAnotherBank";
// import Transfer from "./components/Transfer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TransferToOwnAccount />
  </React.StrictMode>
);
