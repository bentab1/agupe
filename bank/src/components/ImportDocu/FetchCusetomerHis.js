import React, { useEffect, useState } from "react";
import axios from "axios";

const AccountTypeList = () => {
  const [customerInfo, setCustomerInfo] = useState({});
  const [accountTypes, setAccountTypes] = useState([]);

  useEffect(() => {
    // Fetch customer history and account type history data
    const fetchHistoryData = async () => {
      try {
        const customerHistoryResponse = await axios.get(
          "/api/customer/history"
        );
        const accountTypeHistoryResponse = await axios.get(
          "/api/accountType/history"
        );

        // Extract authenticated customer ID from your authentication system
        const authenticatedCustomerId = "your_authenticated_customer_id";

        // Filter customer history data by authenticated customer ID
        const filteredCustomerHistory = customerHistoryResponse.data.filter(
          (entry) => entry.customerId === authenticatedCustomerId
        );

        // Extract customer information (assuming there's only one customer)
        const customer = filteredCustomerHistory[0];
        setCustomerInfo(customer);

        // Filter account type history data by authenticated customer ID
        const filteredAccountTypeHistory =
          accountTypeHistoryResponse.data.filter(
            (entry) => entry.customerId === authenticatedCustomerId
          );

        // Extract unique account types with associated card information if available
        const uniqueAccountTypes = filteredAccountTypeHistory.reduce(
          (accumulator, current) => {
            const existingAccountType = accumulator.find(
              (type) =>
                type.name === current.name &&
                type.accountNumber === current.accountNumber
            );
            if (!existingAccountType) {
              accumulator.push({
                name: current.name,
                accountNumber: current.accountNumber,
                serialNumber: current.serialNumber,
                userName: current.userName,
                deviceName: current.deviceName,
                deviceId: current.deviceId,
                card: {
                  cardNumber: current.cardNumber,
                  ccv: current.ccv,
                  expirationDate: current.expirationDate,
                },
              });
            }
            return accumulator;
          },
          []
        );

        // Set the unique account types in state
        setAccountTypes(uniqueAccountTypes);
      } catch (error) {
        console.error("Error fetching history data:", error);
      }
    };

    fetchHistoryData();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  // Destructure customer information
  const { firstName, middleName, lastName, email } = customerInfo;

  return (
    <div>
      <h2>Customer Information</h2>
      <p>
        <strong>First Name:</strong> {firstName}
      </p>
      <p>
        <strong>Middle Name:</strong> {middleName}
      </p>
      <p>
        <strong>Last Name:</strong> {lastName}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <h2>Account Types</h2>
      <ul>
        {accountTypes.map((accountType, index) => (
          <li key={index}>
            <strong>Name:</strong> {accountType.name}
            <br />
            <strong>Account Number:</strong> {accountType.accountNumber}
            <br />
            <strong>Serial Number:</strong> {accountType.serialNumber}
            <br />
            <strong>User Name:</strong> {accountType.userName}
            <br />
            <strong>Device Name:</strong> {accountType.deviceName}
            <br />
            <strong>Device ID:</strong> {accountType.deviceId}
            <br />
            {accountType.card && (
              <>
                <strong>Card Number:</strong> {accountType.card.cardNumber}
                <br />
                <strong>CCV:</strong> {accountType.card.ccv}
                <br />
                <strong>Expiration Date:</strong>{" "}
                {accountType.card.expirationDate}
                <br />
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountTypeList;
