import React from "react";

function Extrafile() {
  return (
    <div>
      {/* const options = [
    {
      label: "Transaction Status",
      options: [
        { value: "completed", label: "Completed Transaction" },
        { value: "upcoming", label: "Upcoming Transaction" },
      ],
    },
    {
      label: "Transaction Type",
      options: [
        { value: "cardWithdrawal", label: "Card Withdrawal" },
        { value: "cardDeposit", label: "Card Deposit" },
        { value: "transferToOtherBank", label: "Transfer to Other Bank" },
        { value: "transferToOpay", label: "Transfer to Opay" },
      ],
    },
    {
      label: "Bill Category",
      options: [
        { value: "mobileData", label: "Mobile Data" },
        { value: "airtime", label: "Airtime" },
        { value: "tv", label: "TV" },
        { value: "electricity", label: "Electricity" },
      ],
    },
  ]; */}
      {/* 
<div>
        <Select
          options={options}
          onChange={handleChange}
          placeholder="All category"
          isSearchable
        />
      </div> */}

      {/* <div>
       
        <Select
          options={[
            { value: "Master_POS", label: "Master POS" },
            { value: "Sub_POS", label: "Sub POS" },
          ]}
          value={selectedPOS}
          onChange={handlePOSSelectChange}
          placeholder="Select POS"
          isSearchable
        />
      </div> */}
      {/* <div style={{ marginTop: "20px" }}>
      
        <Select
          options={
            selectedPOS && selectedPOS.value === "Master_POS"
              ? masterPOSSerialNumbers.map((serialNumber) => ({
                  value: serialNumber,
                  label: `Serial Number ${serialNumber}`,
                }))
              : selectedPOS && selectedPOS.value === "Sub_POS"
              ? subPOSSerialNumbers.map((serialNumber) => ({
                  value: serialNumber,
                  label: `Serial Number ${serialNumber}`,
                }))
              : []
          }
          value={selectedSerialNumber}
          onChange={handleSerialNumberChange}
          placeholder="Select Serial Number"
          isSearchable
          isDisabled={!selectedPOS}
        />
      </div> */}
      {/* <div style={{ marginTop: "20px" }}>
     
        <Select
          options={transactionTypes.map((transactionType) => ({
            value: transactionType,
            label: transactionType,
          }))}
          value={selectedTransactionType}
          onChange={handleTransactionTypeChange}
          placeholder="Select Transaction Type"
          isSearchable
          isDisabled={!selectedSerialNumber}
        />
      </div> */}

      {/*       
  const masterPOSSerialNumbers = [
    ...new Set(
      transactionHistory
        .filter((transaction) => transaction.accountType === "Master_POS")
        .map((transaction) => transaction.serialNumber)
    ),
  ];

  // Get unique serial numbers for Sub POS
  const subPOSSerialNumbers = [
    ...new Set(
      transactionHistory
        .filter((transaction) => transaction.accountType === "Sub_POS")
        .map((transaction) => transaction.serialNumber)
    ),
  ]; */}
      {/* 
  useEffect(() => {
    if (selectedSerialNumber) {
      const filteredTransactions = transactionHistory.filter(
        (transaction) => transaction.serialNumber === selectedSerialNumber.value
      );
      const uniqueTransactionTypes = [
        ...new Set(
          filteredTransactions.map((transaction) => transaction.TransactionType)
        ),
      ];
      setSelectedTransactionType(null); // Reset selected transaction type
      setTransactionTypes(uniqueTransactionTypes);
    }
  }, [selectedSerialNumber]);

  // Get unique transaction types

  // Handle POS selection change
  const handlePOSSelectChange = (selectedOption) => {
    setSelectedPOS(selectedOption);
    setSelectedSerialNumber(null); // Reset selected serial number
    setSelectedTransactionType(null); // Reset selected transaction type
  };

  // Handle serial number selection change
  const handleSerialNumberChange = (selectedOption) => {
    setSelectedSerialNumber(selectedOption);
  };

  // Handle transaction type selection change
  const handleTransactionTypeChange = (selectedOption) => {
    setSelectedTransactionType(selectedOption);
  }; */}
    </div>
  );
}

export default Extrafile;
