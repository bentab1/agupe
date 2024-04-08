import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios

const MyComponent = () => {
  const [transactionHistory, setTransactionHistory] = useState([]);
  useEffect(() => {
    // Fetch transaction history when the component mounts or when setTransactionHistory changes
    const fetchData = async (criteriaArray) => {
      try {
        // Example: Fetching data using Axios
        const response = await axios.get(
          "https://your-api-domain.com/api/customers"
        );
        // Assuming your API returns JSON data, you can directly use response.data
        setTransactionHistory(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Example: Fetching transaction history for an array of criteria and endpoint
    fetchData(
      [
        {
          userId: "exampleUserId1",
          accountType: "exampleAccountType1",
          accountNumber: "exampleAccountNumber1",
          serialNumber: "exampleSerialNumber1",
        },
        {
          userId: "exampleUserId2",
          accountType: "exampleAccountType2",
          accountNumber: "exampleAccountNumber2",
          serialNumber: "exampleSerialNumber2",
        },
        // Add more criteria objects as needed
      ],
      "https://your-api-domain.com/api/customers"
    );
  }, [setTransactionHistory]);

  return <div>{transactionHistory}</div>;
};
