const FetchSavingsAccountHistory = () => {
  // Example transaction history data
  const SavingsAccountHistory = [
    {
      id: 34,
      accountType: "Savings",
      Customer_Id: "uc12",
      TransactionPIn: "2645",
      AccuntNumber: "7032234566",
      Balance: "13456",
      OpeningDate: "12-1-2023",
      //starter savings account can do transfer of maxim limit of 50k, when awaiting full verification.
      //After Id verification, he can do as much as 1m per pay
      //After source of income verification, he can do 25m per day . that premium savings.
      AccountLevel: "Regular",
      CardType: [
        { Name: "Verve Card" },
        { Name: "Visa Card" },
        { Name: "Master Card" },
      ],
      Status: [
        { isClosed: "false" },
        { isPendingVerification: "true" },
        { isBanned: "false" },
        { isSuspended: "False" },
        { isActive: "yes" },
      ],
      Device: [{ Name: "Nokia" }],
    },
    {
      id: 34,
      accountType: "Savings",
      Customer_Id: "uc13",
      TransactionPIn: "2645",
      AccuntNumber: "7032280605",
      Balance: "12345",
      OpeningDate: "12-1-2023",
      AccountLevel: "Starter",
      CardType: [
        { Name: "Verve Card" },
        { Name: "Visa Card" },
        { Name: "Master Card" },
      ],
      Status: [
        { isClosed: "false" },
        { isPendingVerification: "true" },
        { isBanned: "false" },
        { isSuspended: "False" },
        { isActive: "yes" },
      ],
      Device: [{ Name: "Samsung" }],
    },
  ];

  return SavingsAccountHistory;
};

export default FetchSavingsAccountHistory;
