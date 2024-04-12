const FetchMasterPOSAcoountHistory = () => {
  // Example transaction history data
  const MasterPOSAcoountHistory = [
    {
      id: 34,
      accountType: "Master_POS",
      merchantName: "Bentab Store",
      business_id: "1234abcd",
      customer_id: "uc12",
      transactionPIn: "2645",
      accountNumber: "5555555555",
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
      accountType: "Master_POS",
      merchantName: "Martha Store",
      business_id: "123abcd",
      customer_id: "uc13",
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
      Device: { Name: "infinix" },
    },
  ];

  return MasterPOSAcoountHistory;
};

export default FetchMasterPOSAcoountHistory;
