const FetchSavingsAccountHistory = () => {
  // Example transaction history data
  const SavingsAccountHistory = [
    {
      id: 34,
      accountType: "Savings",
      customer_id: "uc12",
      transactionPIn: "2645",
      accountNumber: "4444444444",
      balance: "13456",
      openingDate: "12-1-2023",
      accountLevel: "Regular",
      cardType: [
        { Name: "Verve Card" },
        { Name: "Visa Card" },
        { Name: "Master Card" },
      ],
      status: [
        { isClosed: "false" },
        { isPendingVerification: "true" },
        { isBanned: "false" },
        { isSuspended: "False" },
        { isActive: "yes" },
      ],
      device: [{ Name: "Nokia" }],
    },
    {
      id: 34,
      accountType: "Savings",
      customer_id: "uc13",
      transactionPIn: "2645",
      accountNumber: "7032282345",
      balance: "12345",
      openingDate: "12-1-2023",
      accountLevel: "Starter",
      cardType: [
        { Name: "Verve Card" },
        { Name: "Visa Card" },
        { Name: "Master Card" },
      ],
      status: [
        { isClosed: "false" },
        { isPendingVerification: "true" },
        { isBanned: "false" },
        { isSuspended: "False" },
        { isActive: "yes" },
      ],
      device: [{ Name: "Samsung" }],
    },
  ];

  return SavingsAccountHistory;
};

export default FetchSavingsAccountHistory;

//starter savings account can do transfer of maxim limit of 50k, when awaiting full verification.
//After Id verification, he can do as much as 1m per pay
//After source of income verification, he can do 25m per day . that premium savings.
