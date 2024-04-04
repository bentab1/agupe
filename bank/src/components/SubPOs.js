import React, { useEffect, useState } from "react";
import Select from "react-select";
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
    accountNumber: "4444444444",
    balance: 70000,
  },
  {
    id: 4,
    customer_id: "uc12",
    accountType: "Sub_POS",
    serialNumber: "1235",
    accountNumber: "4444444444",
    balance: 50000,
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
    balance: 60000,
  },
  {
    id: 7,
    customer_id: "uc12",
    accountType: "Sub_POS",
    serialNumber: "1238",
    accountNumber: "4444444444",
    balance: 70000,
  },
  {
    id: 8,
    customer_id: "uc12",
    accountType: "Sub_POS",
    serialNumber: "1239",
    accountNumber: "4444444444",
    balance: 80000,
  },
];

function SubPOS() {
  const [selectedAccount, setSelectedAccount] = useState(null);

  const CURRENCY_SYMBOL = "₦";
  const account = sourceAccounts.filter(
    (account) =>
      account.accountType === "Sub_POS" && account.customer_id === "uc12"
  );

  const handleSelectChange = (selectedOption) => {
    const selectedAcc = account.find((acc) => acc.id === selectedOption.value);
    setSelectedAccount(selectedAcc);
  };
  useEffect(() => {
    // Set the default selected account when the component mounts
    setSelectedAccount(account[0]);
  }, [account]); // Empty dependency array ensures this effect runs only once after mount

  return (
    <div style={{ display: "grid" }}>
      <div style={{ width: "200px" }}>
        <Select
          options={account.map((acc) => ({
            value: acc.id,
            label: `${acc.accountType} - Serial Number ${acc.serialNumber}`,
          }))}
          value={
            selectedAccount
              ? {
                  value: selectedAccount.id,
                  label: `${selectedAccount.accountType} - ${CURRENCY_SYMBOL} ${selectedAccount.balance}`,
                }
              : { value: "", label: "Select SubPOS" }
          } // Check if selectedAccount is not null before assigning value
          onChange={handleSelectChange}
          isSearchable
          placeholder="Select account"
          styles={{
            control: (provided) => ({
              ...provided,
              width: 200,
              position: "absolute",
              top: "0px",
            }),
            option: (provided) => ({
              ...provided,
              width: 200,
              maxHeight: "200px", // Set maximum height
              overflowY: "auto",
              // add more styles as needed
            }),
          }}
        />
      </div>
      <ul
        style={{
          width: "200px",
          height: "80px",
          overflow: "hidden",
          backgroundColor: "red",
        }}
      >
        {selectedAccount && (
          <li key={selectedAccount.id} className="account-item">
            <AccountDefault1
              accountType={selectedAccount.accountType}
              balance={selectedAccount.balance}
              currencySymbol={CURRENCY_SYMBOL}
              serialNumber={selectedAccount.serialNumber}
            />
            <hr />
          </li>
        )}
      </ul>
    </div>
  );
}

export default SubPOS;
