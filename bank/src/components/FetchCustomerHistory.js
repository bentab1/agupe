const fetchTransactionHistory = () => {
  // Example transaction history data
  const CustomerHistory = [
    {
      id: 1,
      customer_id: "uc12",
      accountType: [
        { Name: "Savings" },
        { Name: "Business" },
        { Name: "Master_POS" },
        { Name: "Sub_POS" },
      ],
      FirstName: "Mirabel",
      MiddleName: "Nne",
      LastName: "Ifunanya",
      Surname: "Benjamin",
      Address: [
        { AddressLineOne: "20a cowley road" },
        { City: "Uxbridge" },
        { State: "Middle sex" },
        { PostCode: "UBG123" },
        { Country: "United Kingdom" },
      ],
      Password: "12345abcd",
      Passcode: "123456",
      CountryCode: "+123",
      PhoneNumber: [
        { Default: "07023467889", Provider: "MTN" },
        { Altanative: "0824567869", Provider: "Airtel" },
      ],
      Email: "Benjaminchinwike@gmail.com",
      PictureURL: "URL",
      CounttryFlagURL: "URL",
      GovernmentIssuedIdNumber: [
        { NIN: "1222567890", imageURL: "URL" },
        { BVN: "12345678", ImageURL: "URL" },
      ],
      status: "upcoming",
    },
    {
      id: 1,
      customer_id: "uc13",
      accountType: [
        { Name: "Savings" },
        { Name: "Business" },
        { Name: "Master_POS" },
        { Name: "Sub_POS" },
      ],
      FirstName: "Mikel",
      MiddleName: "Chibugo",
      LastName: "Mikel",
      Surname: "Benjamin",
      Address: [
        { AddressLineOne: "20a cowley road" },
        { City: "Uxbridge" },
        { State: "Middle sex" },
        { PostCode: "UBG123" },
        { Country: "United Kingdom" },
      ],
      Password: "12345abcd",
      Passcode: "123456",
      CountryCode: "+123",
      PhoneNumber: [
        { Default: "07023467889", Provider: "MTN" },
        { Altanative: "0824567869", Provider: "Airtel" },
      ],
      Email: "Benjaminchinwike@gmail.com",
      PictureURL: "URL",
      CounttryFlagURL: "URL",
      GovernmentIssuedIdNumber: [
        { NIN: "1222567890", imageURL: "URL" },
        { BVN: "12345678", ImageURL: "URL" },
      ],
      status: "upcoming",
    },

    {
      id: 34,
      accountType: "Savings",
      Customer_Id: "uc12",
      AccuntNumber: "7032234566",
      Balance: "13456",
      OpeningDate: "12-1-2023",
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
      AccuntNumber: "7032280605",
      Balance: "12345",
      OpeningDate: "12-1-2023",
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

    {
      id: 34,
      accountType: "Business",
      MerchantName: "Bentab Store",
      Business_id: "1234abcd",
      Customer_Id: "uc12",
      AccuntNumber: "7032280605",
      POS_AccountType: [{ Name: "Master_POS" }, { Name: "Sub_POS" }],
      Balance: "12345",
      OpeningDate: "12-1-2023",
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

    {
      id: 34,
      accountType: "Business",
      MerchantName: "Martha Store",
      Business_id: "123abcd",
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

  return CustomerHistory;
};

export default fetchTransactionHistory;
