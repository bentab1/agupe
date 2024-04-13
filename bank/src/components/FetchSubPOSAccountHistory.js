const FetchSubPOSAccountHistory = () => {
  // Example transaction history data
  const SubPOSAccountHistory = [
    {
      id: 34,
      accountType: "Sub_POS",
      merchantName: "Bentab Store",
      passCode: "123432",
      passWord: "benjaooe",
      transactionPIn: "2345",
      business_id: "1234abcd",
      customer_id: "uc12",
      accountNumber: "6666666666",
      balance: "12345",
      //One customer can own one master_POS and as any as sub_POS
      //user can operate it in any Device but must be authenticated before use.
      //there will be option for use to change the operationType
      pOS_OPeration_Type: [{ Name: "Virtual" }, { Name: "Physical" }],
      openingDate: "12-1-2023",
      status: [
        { isClosed: "false" },
        { isPendingVerification: "true" },
        { isBanned: "false" },
        { isSuspended: "False" },
        { isActive: "yes" },
      ],
      //user can add upto Three devices for one POS. But must be Authenticated before use. can not transfer fund else after 24 hours of change.
      //will only be able to receive fund immediately
      device: { Name: "Samsung" },
    },
    {
      id: 34,
      accountType: "Sub_POS",
      merchantName: "Bentab Store",
      passCode: "123432",
      passWord: "benjaooe",
      transactionPIn: "2345",
      business_id: "1234abcd",
      customer_id: "uc12",
      accountNumber: "5555555555",
      balance: "10124",
      //One customer can own one master_POS and as any as sub_POS
      //user can operate it in any Device but must be authenticated before use.
      //there will be option for use to change the operationType
      pOS_OPeration_Type: [{ Name: "Virtual" }, { Name: "Physical" }],
      openingDate: "12-1-2023",
      status: [
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
      merchantName: "Bentab Store",
      passCode: "123432",
      passWord: "benjaooe",
      transactionPIn: "2345",
      business_id: "1234abcd",
      customer_id: "uc12",
      accountNumber: "6666666667",
      balance: "44490",
      //One customer can own one master_POS and as any as sub_POS
      //user can operate it in any Device but must be authenticated before use.
      //there will be option for use to change the operationType
      pOS_OPeration_Type: [{ Name: "Virtual" }, { Name: "Physical" }],
      openingDate: "12-1-2023",
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
      userName: "Mather1234",
      merchantName: "Martha Store", //FK
      business_id: "123abcd",
      customer_id: "uc13",
      passCode: "123432",
      passWord: "Mataooe34",
      transactionPIn: "2645",
      accountNumber: "8032278654",
      balance: "45000",
      //user can operate it in any Device but must be authenticated before use.
      //there will be option for use to change the operationType
      pOS_OPeration_Type: [{ Name: "Virtual" }, { Name: "Physical" }],
      openingDate: "12-1-2023",
      status: [
        { isClosed: "false" },
        { isPendingVerification: "true" },
        { isBanned: "false" },
        { isSuspended: "False" },
        { isActive: "yes" },
      ],
      device: { Name: "infinix" },
    },

    {
      id: 34,
      accountType: "Sub_POS",
      userName: "Mather3345",
      merchantName: "Martha Store", //FK
      business_id: "123abcd",
      customer_id: "uc13",
      passCode: "123432",
      PassWord: "Mataooe34",
      transactionPIn: "2645",
      accountNumber: "678954333",
      balance: "45000",
      //user can operate it in any Device but must be authenticated before use.
      //there will be option for use to change the operationType
      pOS_OPeration_Type: [{ Name: "Virtual" }, { Name: "Physical" }],
      openingDate: "12-1-2023",
      status: [
        { isClosed: "false" },
        { isPendingVerification: "true" },
        { isBanned: "false" },
        { isSuspended: "False" },
        { isActive: "yes" },
      ],
      device: { Name: "infinix" },
    },
    {
      id: 34,
      accountType: "Master_POS",
      userName: "Mather3345",
      MerchantName: "Martha Store", //FK
      business_id: "123abcd",
      customer_id: "uc13",
      passCode: "123432",
      passWord: "Mataooe34",
      transactionPIn: "2645",
      accountNumber: "898954333",
      balance: "45000",
      //user can operate it in any Device but must be authenticated before use.
      //there will be option for use to change the operationType
      parentOS_OPeration_Type: [{ Name: "Virtual" }, { Name: "Physical" }],
      openingDate: "12-1-2023",
      status: [
        { isClosed: "false" },
        { isPendingVerification: "true" },
        { isBanned: "false" },
        { isSuspended: "False" },
        { isActive: "yes" },
      ],
      device: { Name: "infinix" },
    },
    {
      id: 34,
      accountType: "Master_POS",
      userName: "Mather3345",
      merchantName: "Martha Store", //FK
      business_id: "123abcd",
      customer_id: "uc13",
      passCode: "123432",
      accountNumber: "908954333",
      balance: "45000",
      //user can operate it in any Device but must be authenticated before use.
      //there will be option for use to change the operationType
      pOS_OPeration_Type: [{ Name: "Virtual" }, { Name: "Physical" }],
      openingDate: "12-1-2023",
      status: [
        { isClosed: "false" },
        { isPendingVerification: "true" },
        { isBanned: "false" },
        { isSuspended: "False" },
        { isActive: "yes" },
      ],
      device: { Name: "infinix" },
    },
  ];

  return SubPOSAccountHistory;
};

export default FetchSubPOSAccountHistory;
