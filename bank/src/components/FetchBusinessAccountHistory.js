const FetchBusinessAccountHistory = () => {
  // Example transaction history data
  const BusinessAccountHistory = [
    {
      id: 34,
      companyName: "Benab Nig Ltd",
      companyAddress: [
        { AddressLineONe: "no 03 tyokia street" },
        { City: "Enugu" },
        { LocationLandMark: "0023" },
      ],
      businessFirmPhoto: "PhotoURL",
      businessRegNumber: "CAC",
      accountType: "Business",
      merchantName: "Bentab Store",
      business_id: "1234abcd",
      transactionPIn: "2645",
      customer_id: "uc12",
      accountNumber: "5555555555",
      pOS_AccountType: [{ Name: "Master_POS" }, { Name: "Sub_POS" }],
      balance: "0.45",
      openingDate: "12-1-2023",
      cardType: [
        { Name: "Verve Card" },
        { Name: "Visa Card" },
        { Name: "Master Card" },
      ],
      subscription: "Gold",
      status: [
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
      merchantName: "Martha Store",
      business_id: "123abcd",
      companyName: "Benab Nig Ltd",
      companyAddress: [
        { AddressLineONe: "no 03 tyokia street" },
        { City: "Enugu" },
        { LocationLandMark: "0023" },
      ],
      businessFirmPhoto: "PhotoURL",
      businessRegNumber: "CAC",
      transactionPIn: "2645",
      customer_id: "uc12",
      accountNumber: "7032280605",
      pOS_AccountType: [{ Name: "Master_POS" }],
      balance: "12345",
      openingDate: "12-1-2023",
      cardType: [
        { Name: "Verve Card" },
        { Name: "Visa Card" },
        { Name: "Master Card" },
      ],
      subscription: "Platinum",
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

  return BusinessAccountHistory;
};

export default FetchBusinessAccountHistory;
