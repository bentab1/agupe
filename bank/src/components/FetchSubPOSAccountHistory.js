const FetchBusinessAccountHistory = () => {
  // Example transaction history data
  const BusinessAccountHistory = [
    {
      id: 34,
      accountType: "Sub_POS",
      MerchantName: "Bentab Store",
      PassCode: "123432",
      PassWord: "benjaooe",
      TransactionPIn: "2345",
      Business_id: "1234abcd",
      Customer_Id: "uc12",
      AccountNumber: "7032280605",
      Balance: "12345",
      //One customer can own one master_POS and as any as sub_POS
      //user can operate it in any Device but must be authenticated before use.
      //there will be option for use to change the operationType
      POS_OPeration_Type: [{ Name: "Virtual" }, { Name: "Physical" }],
      OpeningDate: "12-1-2023",
      Status: [
        { isClosed: "false" },
        { isPendingVerification: "true" },
        { isBanned: "false" },
        { isSuspended: "False" },
        { isActive: "yes" },
      ],
      //user can add upto Three devices for one POS. But must be Authenticated before use. can not transfer fund else after 24 hours of change.
      //will only be able to receive fund immediately
      Device: { Name: "Samsung" },
    },
    {
      id: 34,
      accountType: "Sub_POS",
      MerchantName: "Bentab Store",
      PassCode: "123432",
      PassWord: "benjaooe",
      TransactionPIn: "2345",
      Business_id: "1234abcd",
      Customer_Id: "uc12",
      AccountNumber: "8832280605",
      Balance: "12345",
      //One customer can own one master_POS and as any as sub_POS
      //user can operate it in any Device but must be authenticated before use.
      //there will be option for use to change the operationType
      POS_OPeration_Type: [{ Name: "Virtual" }, { Name: "Physical" }],
      OpeningDate: "12-1-2023",
      Status: [
        { isClosed: "false" },
        { isPendingVerification: "true" },
        { isBanned: "false" },
        { isSuspended: "False" },
        { isActive: "yes" },
      ],
      //user can add upto Three devices for one POS. But must be Authenticated before use. can not transfer fund else after 24 hours of change.
      //will only be able to receive fund immediately
      Device: { Name: "Samsung" },
    },
    {
      id: 34,
      accountType: "Sub_POS",
      MerchantName: "Bentab Store",
      PassCode: "123432",
      PassWord: "benjaooe",
      TransactionPIn: "2345",
      Business_id: "1234abcd",
      Customer_Id: "uc12",
      AccountNumber: "5432280605",
      Balance: "12345",
      //One customer can own one master_POS and as any as sub_POS
      //user can operate it in any Device but must be authenticated before use.
      //there will be option for use to change the operationType
      POS_OPeration_Type: [{ Name: "Virtual" }, { Name: "Physical" }],
      OpeningDate: "12-1-2023",
      Status: [
        { isClosed: "false" },
        { isPendingVerification: "true" },
        { isBanned: "false" },
        { isSuspended: "False" },
        { isActive: "yes" },
      ],
      //user can add upto Three devices for one POS. But must be Authenticated before use. can not transfer fund else after 24 hours of change.
      //will only be able to receive fund immediately
      Device: { Name: "Samsung" },
    },
    {
      id: 34,
      accountType: "Master_POS",
      UserName: "Mather1234",
      MerchantName: "Martha Store", //FK
      Business_id: "123abcd",
      Customer_Id: "uc13",
      PassCode: "123432",
      PassWord: "Mataooe34",
      TransactionPIn: "2645",
      AccuntNumber: "8032278654",
      Balance: "45000",
      //user can operate it in any Device but must be authenticated before use.
      //there will be option for use to change the operationType
      POS_OPeration_Type: [{ Name: "Virtual" }, { Name: "Physical" }],
      OpeningDate: "12-1-2023",
      Status: [
        { isClosed: "false" },
        { isPendingVerification: "true" },
        { isBanned: "false" },
        { isSuspended: "False" },
        { isActive: "yes" },
      ],
      Device: { Name: "infinix" },
    },

    {
      id: 34,
      accountType: "Master_POS",
      UserName: "Mather3345",
      MerchantName: "Martha Store", //FK
      Business_id: "123abcd",
      Customer_Id: "uc13",
      PassCode: "123432",
      PassWord: "Mataooe34",
      TransactionPIn: "2645",
      AccuntNumber: "678954333",
      Balance: "45000",
      //user can operate it in any Device but must be authenticated before use.
      //there will be option for use to change the operationType
      POS_OPeration_Type: [{ Name: "Virtual" }, { Name: "Physical" }],
      OpeningDate: "12-1-2023",
      Status: [
        { isClosed: "false" },
        { isPendingVerification: "true" },
        { isBanned: "false" },
        { isSuspended: "False" },
        { isActive: "yes" },
      ],
      Device: { Name: "infinix" },
    },
    {
      id: 34,
      accountType: "Master_POS",
      UserName: "Mather3345",
      MerchantName: "Martha Store", //FK
      Business_id: "123abcd",
      Customer_Id: "uc13",
      PassCode: "123432",
      PassWord: "Mataooe34",
      TransactionPIn: "2645",
      AccuntNumber: "898954333",
      Balance: "45000",
      //user can operate it in any Device but must be authenticated before use.
      //there will be option for use to change the operationType
      POS_OPeration_Type: [{ Name: "Virtual" }, { Name: "Physical" }],
      OpeningDate: "12-1-2023",
      Status: [
        { isClosed: "false" },
        { isPendingVerification: "true" },
        { isBanned: "false" },
        { isSuspended: "False" },
        { isActive: "yes" },
      ],
      Device: { Name: "infinix" },
    },
    {
      id: 34,
      accountType: "Master_POS",
      UserName: "Mather3345",
      MerchantName: "Martha Store", //FK
      Business_id: "123abcd",
      Customer_Id: "uc13",
      PassCode: "123432",
      PassWord: "Mataooe34",
      TransactionPIn: "2645",
      AccuntNumber: "90 8954333",
      Balance: "45000",
      //user can operate it in any Device but must be authenticated before use.
      //there will be option for use to change the operationType
      POS_OPeration_Type: [{ Name: "Virtual" }, { Name: "Physical" }],
      OpeningDate: "12-1-2023",
      Status: [
        { isClosed: "false" },
        { isPendingVerification: "true" },
        { isBanned: "false" },
        { isSuspended: "False" },
        { isActive: "yes" },
      ],
      Device: { Name: "infinix" },
    },
  ];

  return BusinessAccountHistory;
};

export default FetchBusinessAccountHistory;
