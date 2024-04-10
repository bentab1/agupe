const FetchBusinessAccountHistory = () => {
  // Example transaction history data
  const BusinessAccountHistory = [
    {
      id: 34,
      CompanyName: "Benab Nig Ltd",
      CompanyAddress: [
        { AddressLineONe: "no 03 tyokia street" },
        { City: "Enugu" },
        { LocationLandMark: "0023" },
      ],
      BusinessFirmPhoto: "PhotoURL",
      BusinessRegNumber: "CAC",
      accountType: "Business",
      MerchantName: "Bentab Store",
      Business_id: "1234abcd",
      TransactionPIn: "2645",
      Customer_Id: "uc12",
      AccuntNumber: "7032280605",
      POS_AccountType: [{ Name: "Master_POS" }, { Name: "Sub_POS" }],
      Balance: "0.45",
      OpeningDate: "12-1-2023",
      CardType: [
        { Name: "Verve Card" },
        { Name: "Visa Card" },
        { Name: "Master Card" },
      ],
      Subscription: "Gold",
      Status: [
        { isClosed: "false" },
        { isPendingVerification: "true" },
        { isBanned: "false" },
        { isSuspended: "False" },
        { isActive: "yes" },
      ],
      Device: [{ Name: "Samsung" }],
    },

    {
      id: 34,
      accountType: "Business",
      MerchantName: "Martha Store",
      Business_id: "123abcd",
      CompanyName: "Benab Nig Ltd",
      CompanyAddress: [
        { AddressLineONe: "no 03 tyokia street" },
        { City: "Enugu" },
        { LocationLandMark: "0023" },
      ],
      BusinessFirmPhoto: "PhotoURL",
      BusinessRegNumber: "CAC",
      TransactionPIn: "2645",
      Customer_Id: "uc12",
      AccuntNumber: "7032280605",
      POS_AccountType: [{ Name: "Master_POS" }],
      Balance: "12345",
      OpeningDate: "12-1-2023",
      CardType: [
        { Name: "Verve Card" },
        { Name: "Visa Card" },
        { Name: "Master Card" },
      ],
      Subscription: "Platinum",
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

  return BusinessAccountHistory;
};

export default FetchBusinessAccountHistory;
