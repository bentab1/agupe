import React, { useState } from "react";

const ExampleComponent = () => {
  const [allTransactions, setAllTransactions] = useState([
    // Sample transaction data
    { id: 1, date: "2024-01-01", amount: 100, description: "Transaction 1" },
    { id: 2, date: "2024-01-02", amount: 200, description: "Transaction 2" },
    { id: 3, date: "2024-01-03", amount: 300, description: "Transaction 3" },
  ]);
  const [filteredTransactions, setFilteredTransactions] =
    useState(allTransactions);

  const filterTransactions = (startDate, endDate) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    const currentDayOfWeek = currentDate.getDay(); // 0 (Sunday) to 6 (Saturday)

    const startOfWeek = new Date(
      currentYear,
      currentMonth,
      currentDay - currentDayOfWeek
    );
    const endOfWeek = new Date(
      currentYear,
      currentMonth,
      currentDay + (6 - currentDayOfWeek)
    );

    const lastWeekStart = new Date(startOfWeek);
    lastWeekStart.setDate(lastWeekStart.getDate() - 7);
    const lastWeekEnd = new Date(endOfWeek);
    lastWeekEnd.setDate(lastWeekEnd.getDate() - 7);

    const lastTwoWeeksStart = new Date(lastWeekStart);
    lastTwoWeeksStart.setDate(lastTwoWeeksStart.getDate() - 7);
    const lastTwoWeeksEnd = new Date(lastWeekEnd);
    lastTwoWeeksEnd.setDate(lastTwoWeeksEnd.getDate() - 7);

    let filtered = [];
    switch (startDate) {
      case "thisWeek":
        filtered = allTransactions.filter(
          (transaction) =>
            new Date(transaction.date) >= startOfWeek &&
            new Date(transaction.date) <= endOfWeek
        );
        break;
      case "lastWeek":
        filtered = allTransactions.filter(
          (transaction) =>
            new Date(transaction.date) >= lastWeekStart &&
            new Date(transaction.date) <= lastWeekEnd
        );
        break;
      case "lastTwoWeeks":
        filtered = allTransactions.filter(
          (transaction) =>
            new Date(transaction.date) >= lastTwoWeeksStart &&
            new Date(transaction.date) <= lastWeekEnd
        );
        break;
      default:
        // Handle other cases or default behavior
        break;
    }

    setFilteredTransactions(filtered);
  };

  return (
    <div>
      <div>
        <button onClick={() => filterTransactions("thisWeek")}>
          This Week
        </button>
        <button onClick={() => filterTransactions("lastWeek")}>
          Last Week
        </button>
        <button onClick={() => filterTransactions("lastTwoWeeks")}>
          Last Two Weeks
        </button>
      </div>
      <div>
        {filteredTransactions.map((transaction) => (
          <div key={transaction.id}>
            <p>Date: {transaction.date}</p>
            <p>Description: {transaction.description}</p>
            <p>Amount: {transaction.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExampleComponent;
