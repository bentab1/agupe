import { React, useState } from "react";
import "./SearchTransactionQuery.css";

function SearchTransactionQuery({
  transactionHistory,
  setGroupedTransactions,
  groupTransactionsByMonth,
}) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchQuery(searchTerm);
    const filtered = transactionHistory.filter((transaction) => {
      const date = new Date(transaction.date);
      const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
      const month = date
        .toLocaleString("en-US", { month: "long" })
        .toLowerCase();
      const year = date.getFullYear().toString();
      const description = transaction.description.toLowerCase();
      const merchant = transaction.merchant
        ? transaction.merchant.toLowerCase()
        : "";
      const amount = transaction.amount.toString().toLowerCase();
      const transactionType = transaction.TransactionType
        ? transaction.TransactionType.toLowerCase()
        : "";
      const accountType = transaction.accountType
        ? transaction.accountType.toLowerCase()
        : ""; // Add accountType to the search criteria
      // Check if the transaction date is within the past 20 years
      // Check if the transaction date is within the past 20 years
      const twentyYearsAgo = new Date();
      twentyYearsAgo.setFullYear(twentyYearsAgo.getFullYear() - 20);
      return (
        date >= twentyYearsAgo &&
        (formattedDate.includes(searchTerm) ||
          year.includes(searchTerm) ||
          month.includes(searchTerm) ||
          description.includes(searchTerm) ||
          merchant.includes(searchTerm) ||
          amount.includes(searchTerm) ||
          transactionType.includes(searchTerm) ||
          accountType.includes(searchTerm))
      );
    });
    const grouped = groupTransactionsByMonth(filtered);
    setGroupedTransactions(grouped);
  };
  return (
    <div className="searchQuery-transaction-container">
      <h4 style={{ marginLeft: "20px" }}>Transaction Histories</h4>
      <div className="searchQuery-transaction">
        <input
          className="searchQuery-input"
          type="text"
          placeholder="Search by Reference, Amount, Date, Month, Year or Merchant"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}

export default SearchTransactionQuery;
