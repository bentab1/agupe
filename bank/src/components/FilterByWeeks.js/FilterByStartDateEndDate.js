import React, { useState } from "react";

const TransactionFilter = ({ filterTransactions }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleFilter = () => {
    // Call the filterTransactions function with the start date and end date
    filterTransactions(startDate, endDate);
  };

  return (
    <div>
      <label htmlFor="startDate">Start Date:</label>
      <input
        type="date"
        id="startDate"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <label htmlFor="endDate">End Date:</label>
      <input
        type="date"
        id="endDate"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

const TransactionList = ({ transactions }) => {
  return (
    <ul>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          <strong>Date:</strong> {transaction.date}, <strong>Amount:</strong>{" "}
          {transaction.amount}, <strong>Description:</strong>{" "}
          {transaction.description}
        </li>
      ))}
    </ul>
  );
};

const App = () => {
  const [allTransactions, setAllTransactions] = useState([
    // Sample transaction data
    { id: 1, date: "2024-01-01", amount: 100, description: "Transaction 1" },
    { id: 2, date: "2024-01-02", amount: 200, description: "Transaction 2" },
    { id: 3, date: "2024-01-03", amount: 300, description: "Transaction 3" },
  ]);
  const [filteredTransactions, setFilteredTransactions] =
    useState(allTransactions);

  const filterTransactions = (startDate, endDate) => {
    // Filter transactions based on start date and end date
    const filtered = allTransactions.filter((transaction) => {
      return transaction.date >= startDate && transaction.date <= endDate;
    });
    setFilteredTransactions(filtered);
  };

  return (
    <div>
      <h1>Transaction Filter</h1>
      <TransactionFilter filterTransactions={filterTransactions} />
      <h2>Filtered Transactions</h2>
      <TransactionList transactions={filteredTransactions} />
    </div>
  );
};

export default App;
