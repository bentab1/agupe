import React from "react";
// import Select from "react-select";
import AccountDefault1 from "./AccountDefault1";

const sourceAccounts = [
  {
    id: 1,
    customer_id: "uc12",
    accountType: "Savings",
    accountNumber: "2222222222",
    balance: 1135,
  },
  {
    id: 2,
    customer_id: "uc12",
    accountType: "Business",
    accountNumber: "3333333333",
    balance: 60000,
  },
  {
    id: 3,
    customer_id: "uc12",
    accountType: "Master_POS",
    serialNumber: "1234",
    accountNumber: "4444444444",
    balance: 70000,
  },
  {
    id: 4,
    customer_id: "uc12",
    accountType: "Sub_POS",
    serialNumber: "1235",
    accountNumber: "4444444444",
    balance: 90000,
  },

  {
    id: 5,
    customer_id: "uc12",
    accountType: "Sub_POS",
    serialNumber: "1236",
    accountNumber: "4444444444",
    balance: 90000,
  },

  {
    id: 6,
    customer_id: "uc12",
    accountType: "Sub_POS",
    serialNumber: "1237",
    accountNumber: "4444444444",
    balance: 90000,
  },

  {
    id: 6,
    customer_id: "uc12",
    accountType: "Sub_POS",
    serialNumber: "1238",
    accountNumber: "4444444444",
    balance: 90000,
  },
];
function MasterPOS() {
  const CURRENCY_SYMBOL = "₦";
  const account = sourceAccounts.filter(
    (account) =>
      account.accountType === "Master_POS" && account.customer_id === "uc12"
  );
  return (
    <ul
      style={{
        width: "200px",
        height: "80px",
        overflow: "hidden",
        backgroundColor: "red",
      }}
    >
      {account.map((account) => (
        <li key={account.id} className="account-item">
          <AccountDefault1
            accountType={account.accountType}
            balance={account.balance}
            currencySymbol={CURRENCY_SYMBOL}
            serialNumber={account.serialNumber}
          />
          <hr />
        </li>
      ))}
    </ul>
  );
}

export default MasterPOS;
