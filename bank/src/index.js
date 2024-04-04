import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "./index.css";
// import TransactionHistory from "./components/TransactionHistory";
import TransactionHistory from "./components/TransactionHistory";
// import TransferAnotherBank from "./components/Transfer/TransferAnotherBank/TransferAnotherBank";
// import TransferToOwnAccount from "./components/Transfer/TransferToOwnAccount/TransferToOwnAccount";

// import TransferAnotherBank from "./components/TransferAnotherBank";
// import Transfer from "./components/Transfer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TransactionHistory />
  </React.StrictMode>
);
