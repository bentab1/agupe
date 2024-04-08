import React, { useEffect } from "react";

const MyComponent = ({
  transactionHistory,
  setTransactionHistory,
  userId,
  accountType,
}) => {
  // Store destructured props in a single object variable
  const data = {
    transactionHistory,
    setTransactionHistory,
    userId,
    accountType,
  };

  useEffect(() => {
    const fetchData = async (data) => {
      // Your logic here, using the data object
    };

    // Example: Call fetchData with the data object
    fetchData(data);
  }, [data]); // Include data in the dependency array if it can change and you want to trigger useEffect on its change

  return <div>{/* Your component JSX */}</div>;
};
