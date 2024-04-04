import React from "react";
// import Select from "react-select";
import AccountDefault from "./AccountDefault";

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
    accountNumber: "5555555555",
    balance: 90000,
  },

  {
    id: 6,
    customer_id: "uc12",
    accountType: "Sub_POS",
    serialNumber: "1237",
    accountNumber: "66666666666",
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

function SavingAccount() {
  const CURRENCY_SYMBOL = "₦";
  const account = sourceAccounts.filter(
    (account) =>
      account.accountType === "Savings" && account.customer_id === "uc12"
  );

  // const account = sourceAccounts.find((account) => account.id === 1);
  // const account2 = sourceAccounts.find((account2) => account2.id === 2);

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
          <AccountDefault
            accountType={account.accountType}
            balance={account.balance}
            currencySymbol={CURRENCY_SYMBOL}
          />
          <hr />
        </li>
      ))}
    </ul>
  );
}

export default SavingAccount;
