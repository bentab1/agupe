/* eslint-disable react-hooks/exhaustive-deps */
import { React, useCallback, useEffect, useState } from "react";
import Select from "react-select";
import fetchTransactionHistory from "../FetchedTransactionHistory";
import "./TransactionHistory.css";

function groupTransactionsByMonth(transactions) {
  const groupedTransactions = {};
  transactions.forEach((transaction) => {
    const date = new Date(transaction.date);
    const monthYear = `${date.toLocaleString("en-US", {
      month: "long",
    })} ${date.getFullYear()}`;
    if (!groupedTransactions[monthYear]) {
      groupedTransactions[monthYear] = [];
    }
    groupedTransactions[monthYear].push(transaction);
  });
  return groupedTransactions;
}

function TransactionHistory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [groupedTransactions, setGroupedTransactions] = useState({});
  const [showCompleted, setShowCompleted] = useState(false);
  const [showUpcoming, setShowUpcoming] = useState(false);
  const [showAllTransaction, setShowAllTransaction] = useState(false);
  const [showPOSCategory, setShowPOSCategory] = useState(false);
  const [showAllTransactionCategory, setShowAllTransactionCategory] =
    useState(false);
  const [showPOSSelection, setShowPOSSelection] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [POSselectedStatus, setPOSSelectedStatus] = useState(null);
  const [selectedSubPOS, setSelectedSubPOS] = useState(null);
  const [selectedMasterPOS, setSelectedMasterPOS] = useState(null);
  const [showSubPOSTransaction, setShowSubPOSTransaction] = useState(false);
  const [selectedTransactionType, setSelectedTransactionType] = useState("");
  const [showSubPOSCategoryTransactions, setShowSubPOSCategoryTRansactions] =
    useState(false);
  const [showMasterPOSTransaction, setShowMasterPOSTransaction] =
    useState(false);
  const [selectedTransactionStatus, setSelectedTransactionStatus] =
    useState("");
  const [
    allTransactionTypeCategoryseleted,
    setAllTransactionTypeCategoryseleted,
  ] = useState("");
  const [showAllTransactionsCategory, setShowAllTransactionsCategory] =
    useState(false);
  const [
    showMasterPOSCategoryTRansactions,
    setShowMasterPOSCategoryTRansactions,
  ] = useState(false);
  const [error, setError] = useState("");

  //////
  //////

  ////////
  useEffect(() => {
    // Fetch transaction history when the component mounts
    const fetchData = async () => {
      const transactionData = fetchTransactionHistory();
      setTransactionHistory(transactionData);
    };
    fetchData();
  }, [transactionHistory]);
  ///////
  ///////
  const masterPOSTransactions = transactionHistory.filter(
    (transaction) =>
      transaction.customer_id === "uc12" && // Replace "your_customer_id" with the actual customer ID
      transaction.accountType === "Master_POS" &&
      transaction.business_id === "ubmc123"
  );

  // Extract unique combinations of accountNumber and serialNumber from all transactions
  const getMasterPOSOptions = (transactions) => {
    const uniqueMasterPOSMap = new Map();
    transactions.forEach((transaction) => {
      const { accountNumber, serialNumber, balance } = transaction;
      if (!uniqueMasterPOSMap.has(accountNumber)) {
        uniqueMasterPOSMap.set(accountNumber, { serialNumber, balance });
      }
    });

    const options = [];
    uniqueMasterPOSMap.forEach((data, accountNumber) => {
      const { serialNumber, balance } = data;
      options.push({
        label: (
          <span>
            Master POS: <br />
            Account Number: {accountNumber} <br />
            Serial Number: {serialNumber} <br />
            Balance: {balance}
          </span>
        ),
        value: accountNumber,
      });
    });
    return options;
  };
  const masterPOSOptions = getMasterPOSOptions(masterPOSTransactions);

  const MasterPOScustomStyles = {
    control: (provided, state) => ({
      ...provided,
      fontSize: "12px",
    }),
    menu: (provided, state) => ({
      ...provided,
      display: state.selectProps.menuIsOpen ? "block" : "none",
    }),
    menuList: (provided, state) => ({
      ...provided,
      fontSize: "12px",
    }),
    indicatorSeparator: () => ({}),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
    }),
  };

  const handleShowMasterPOSTransaction = () => {
    try {
      if (
        selectedMasterPOS.value <= 0 ||
        selectedMasterPOS.value === null ||
        selectedMasterPOS.value === undefined
      ) {
        setError("There is no available transaction for the selected category");
      }
      const accountNumber = selectedMasterPOS.value;
      setGroupedTransactions(
        groupTransactionsByMonth(
          transactionHistory.filter(
            (MasterPOStransaction) =>
              MasterPOStransaction.accountNumber === accountNumber
          )
        )
      );
      setShowMasterPOSTransaction(true);
      setShowUpcoming(false);
      setShowCompleted(false);
      setShowAllTransaction(false);
      setShowSubPOSTransaction(false);
      setShowSubPOSCategoryTRansactions(false);
    } catch (error) {
      console.error("An error occurred:", error);
      // You can handle the error further if needed
    }
  };

  const handleShowMasterPOSCategoryTransaction = () => {
    try {
      if (
        selectedMasterPOS.value <= 0 ||
        selectedMasterPOS.value === null ||
        selectedMasterPOS.value === undefined
      ) {
        setError("There is no available transaction for the selected category");
      }

      if (
        selectedTransactionType === null ||
        selectedTransactionType === undefined
      ) {
        setError("There is no available transaction for the selected category");
      }
      const accountNumber = selectedMasterPOS.value;
      setGroupedTransactions(
        groupTransactionsByMonth(
          transactionHistory.filter(
            (MasterPOSCategoryTransaction) =>
              MasterPOSCategoryTransaction.accountNumber === accountNumber &&
              MasterPOSCategoryTransaction.TransactionType ===
                selectedTransactionType
          )
        )
      );

      setShowMasterPOSCategoryTRansactions(true);
    } catch (error) {
      console.error("An error occurred:", error);
      // You can handle the error further if needed
    }
  };

  ///////////////
  //////////////
  //////////////
  // Filter transactions for business accounts
  const subPOSTransactions = transactionHistory.filter(
    (transaction) =>
      transaction.customer_id === "uc12" && // Replace "your_customer_id" with the actual customer ID
      transaction.accountType === "Sub_POS" &&
      transaction.business_id === "ubmc123"
  );

  // Extract unique combinations of accountNumber and serialNumber from all transactions
  const getSubPOSOptions = (transactions) => {
    const uniqueSubPOSMap = new Map();
    transactions.forEach((transaction) => {
      const { accountNumber, serialNumber, balance } = transaction;
      if (!uniqueSubPOSMap.has(accountNumber)) {
        uniqueSubPOSMap.set(accountNumber, { serialNumber, balance });
      }
    });

    const options = [];
    uniqueSubPOSMap.forEach((data, accountNumber) => {
      const { serialNumber, balance } = data;
      options.push({
        label: (
          <span>
            Sub POS: <br />
            Account Number: {accountNumber} <br />
            Serial Number: {serialNumber} <br />
            Balance: {balance}
          </span>
        ),
        value: accountNumber,
      });
    });
    return options;
  };
  const subPOSOptions = getSubPOSOptions(subPOSTransactions);
  /////////////
  const handleShowSubPOSTransaction = () => {
    try {
      if (
        selectedSubPOS.value <= 0 ||
        selectedSubPOS.value === null ||
        selectedSubPOS.value === undefined
      ) {
        setError("There is no available transaction for the selected category");
      }
      const accountNumber = selectedSubPOS.value;
      setGroupedTransactions(
        groupTransactionsByMonth(
          transactionHistory.filter(
            (SubPOStransaction) =>
              SubPOStransaction.accountNumber === accountNumber
          )
        )
      );
      setShowSubPOSTransaction(true);
      setShowUpcoming(false);
      setShowCompleted(false);
    } catch (error) {
      console.error("An error occurred:", error);
      // You can handle the error further if needed
    }
  };
  ////////////

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      fontSize: "12px",
    }),
    menu: (provided, state) => ({
      ...provided,
      display: state.selectProps.menuIsOpen ? "block" : "none",
    }),
    menuList: (provided, state) => ({
      ...provided,
      fontSize: "12px",
    }),
    indicatorSeparator: () => ({}),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
    }),
  };
  //////////////////
  const handleShowSubPOSCategoryTransaction = () => {
    try {
      if (
        selectedSubPOS.value <= 0 ||
        selectedSubPOS.value === null ||
        selectedSubPOS.value === undefined
      ) {
        setError("There is no available transaction for the selected category");
      }

      if (
        selectedTransactionType === null ||
        selectedTransactionType === undefined
      ) {
        setError("There is no available transaction for the selected category");
      }
      const accountNumber = selectedSubPOS.value;
      setGroupedTransactions(
        groupTransactionsByMonth(
          transactionHistory.filter(
            (SubPOSCategoryTransaction) =>
              SubPOSCategoryTransaction.accountNumber === accountNumber &&
              SubPOSCategoryTransaction.TransactionType ===
                selectedTransactionType
          )
        )
      );

      setShowSubPOSCategoryTRansactions(true);
    } catch (error) {
      console.error("An error occurred:", error);
      // You can handle the error further if needed
    }
  };

  function handleSelectedTransactionType(option) {
    setSelectedTransactionType(option);
  }

  ////////
  ////////
  ////////
  function toggleButton() {
    if (showStatus === true) setShowStatus(false);
    if (showPOSSelection === true) setShowPOSSelection(false);
    if (showAllTransactionCategory === true)
      setShowAllTransactionCategory(false);
    if (showPOSCategory === true) setShowPOSCategory(false);
  }
  
  function handleCategporyView() {
    if (selectedSubPOS !== null) {
      setShowAllTransactionCategory(false);
      setShowPOSCategory(true);
    }if (selectedSubPOS === null) {
      setShowAllTransactionCategory(true);
    }if (selectedMasterPOS !== null) {
      setShowAllTransactionCategory(false);
      setShowPOSCategory(true);
    } if (selectedMasterPOS === null) {
      setShowAllTransactionCategory(true);
    }
  }

  function reversePOSCategoryView() {
    setSelectedSubPOS(null);
    setSelectedMasterPOS(null);
  }
  ////////
  ////////
  ////////
  useEffect(() => {
    const grouped = groupTransactionsByMonth(transactionHistory);
    setGroupedTransactions(grouped);
    handleShowTransactionStatus();
    handleShowAllTransactions();
  }, []);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchQuery(searchTerm);
    const filtered = transactionHistory.filter((transaction) => {
      const date = new Date(transaction.date);
      const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
      const month = date
        .toLocaleString("en-US", { month: "long" })
        .toLowerCase();
      const year = date.getFullYear().toString();
      const description = transaction.description.toLowerCase();
      const merchant = transaction.merchant
        ? transaction.merchant.toLowerCase()
        : "";
      const amount = transaction.amount.toString().toLowerCase();
      const transactionType = transaction.TransactionType
        ? transaction.TransactionType.toLowerCase()
        : "";
      // Check if the transaction date is within the past 20 years
      const twentyYearsAgo = new Date();
      twentyYearsAgo.setFullYear(twentyYearsAgo.getFullYear() - 20);
      return (
        date >= twentyYearsAgo &&
        (formattedDate.includes(searchTerm) ||
          year.includes(searchTerm) ||
          month.includes(searchTerm) ||
          description.includes(searchTerm) ||
          merchant.includes(searchTerm) ||
          amount.includes(searchTerm) ||
          transactionType.includes(searchTerm))
      );
    });
    const grouped = groupTransactionsByMonth(filtered);
    setGroupedTransactions(grouped);
  };
  ///////
  ///////
  ////////
  const handleShowTransactionStatus = () => {
    const TransactionStatus = selectedTransactionStatus;
    setGroupedTransactions(
      groupTransactionsByMonth(
        transactionHistory.filter(
          (transaction) => transaction.status === TransactionStatus
        )
      )
    );
    if (TransactionStatus === null || TransactionStatus === undefined) {
      setError("No transaction found");
      setShowCompleted({});
      return;
    }
    setShowCompleted(true);
  };
  function handleTransactionStatus(value) {
    setSelectedTransactionStatus(value);
  }
  ///////
  ///////
  ///////
  const handleShowUpcoming = () => {
    setGroupedTransactions(
      groupTransactionsByMonth(
        transactionHistory.filter(
          (transaction1) => transaction1.status === "upcoming"
        )
      )
    );
    setShowUpcoming(true);
  };
  //////
  ///////
  ///////
  const handleShowAllTransactions = () => {
    setGroupedTransactions(
      groupTransactionsByMonth(
        transactionHistory.filter((transaction2) => transaction2)
      )
    );

    setShowAllTransaction(true);
  };
  /////////
  /////////
  /////////
  const handleShowAllTransactionsCategory = useCallback(() => {
    const AllTransactionTypeCategory = allTransactionTypeCategoryseleted;
    const term = setGroupedTransactions(
      groupTransactionsByMonth(
        transactionHistory.filter(
          (AllTransactionCategory) =>
            AllTransactionCategory.TransactionType ===
            AllTransactionTypeCategory
        )
      )
    );
    console.log(term);
    setShowAllTransactionsCategory(true);
  }, [allTransactionTypeCategoryseleted]);

  function handleAllTransactionTypeCategory(option) {
    setAllTransactionTypeCategoryseleted(option);
  }

  /////////
  /////////
  ////////
  useEffect(() => {
    let timer;
    if (selectedStatus) {
      timer = setTimeout(() => {
        setSelectedStatus(null);
      }, 10000); // Reset after 10 seconds
    }
    return () => clearTimeout(timer);
  }, [selectedStatus]);
  ///////
  ///////
  ///////
  useEffect(() => {
    let timer;
    if (POSselectedStatus) {
      timer = setTimeout(() => {
        setPOSSelectedStatus(null);
      }, 10000); // Reset after 10 seconds
    }
    return () => clearTimeout(timer);
  }, [POSselectedStatus]);
  /////////
  /////////
  /////////
  useEffect(() => {
    if (selectedSubPOS !== null) {
      handleShowSubPOSTransaction();
    }
  }, [handleShowSubPOSTransaction, selectedSubPOS]);

  ////////
  ////////
  return (
    <div className=" transaction-container">
      <div style={{ backgroundColor: "white" }}>
        <h3>Transaction History</h3>
        <div>
          <input
            type="text"
            placeholder="Search by Day Month and Year"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <div
          className="category-pos-status"
          style={{ display: "flex", gap: "20px" }}
        >
          <button
            onClick={() => {
              handleShowAllTransactions();
              toggleButton();
            }}
          >
            All Transactions
          </button>
          <div display={{}}>
            <button
              onClick={() => {
                toggleButton();
                handleCategporyView();
              }}
            >
              Categories
            </button>
            {showAllTransactionCategory ? (
              <div className="showAll-category-div">
                <button
                  onClick={() => {
                    toggleButton();
                  }}
                  style={{
                    display: "block",
                    marginLeft: "5px",
                    fontSize: "25px",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                >
                  &times;
                </button>
                <label style={{ marginLeft: "20px", marginTop: "20px" }}>
                  Select a category
                </label>
                <duv
                  style={{
                    display: "flex",
                    backgroundColor: "red",
                    width: "300px",
                    marginTop: "20px",
                  }}
                >
                  <ul
                    style={{
                      display: "grid",
                      padding: "20px",
                      width: "300px",
                    }}
                  >
                    <li>
                      <button
                        className="showAll-category-All-button"
                        onClick={() => {
                          handleShowAllTransactions();
                          toggleButton();
                        }}
                      >
                        All
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          handleShowAllTransactionsCategory();
                          handleAllTransactionTypeCategory("TransferToBank");
                          toggleButton();
                        }}
                      >
                        Transfer to LPay
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          handleShowAllTransactionsCategory();
                          handleAllTransactionTypeCategory("TransferToLPay");
                          toggleButton();
                        }}
                      >
                        Transfer to LPay
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          handleShowAllTransactionsCategory();
                          handleAllTransactionTypeCategory(
                            "LPayWalletTransaction"
                          );
                          toggleButton();
                        }}
                      >
                        LPay wallet Transaction
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          handleShowAllTransactionsCategory();
                          handleAllTransactionTypeCategory("AddMoney");
                          toggleButton();
                        }}
                      >
                        Add Money
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          handleShowAllTransactionsCategory();
                          handleAllTransactionTypeCategory("OtherBankDeposit");
                          toggleButton();
                        }}
                      >
                        Other bank Deposit
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          handleShowAllTransactionsCategory();
                          handleAllTransactionTypeCategory("CardWithdrawal");
                          toggleButton();
                        }}
                      >
                        Card Withdrawal
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          handleShowAllTransactionsCategory();
                          handleAllTransactionTypeCategory("Refund");
                          toggleButton();
                        }}
                      >
                        Refunds
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          handleShowAllTransactionsCategory();
                          handleAllTransactionTypeCategory("CardPayment");
                          toggleButton();
                        }}
                      >
                        Card Payment
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          handleShowAllTransactionsCategory();
                          handleAllTransactionTypeCategory("QCode");
                          toggleButton();
                        }}
                      >
                        QCode
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          handleShowAllTransactionsCategory();
                          handleAllTransactionTypeCategory("Commission");
                          toggleButton();
                        }}
                      >
                        Commission
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          handleShowAllTransactionsCategory();
                          handleAllTransactionTypeCategory("CashBack");
                          toggleButton();
                        }}
                      >
                        Cash Back
                      </button>
                    </li>
                  </ul>
                  <div>
                    <ul style={{ display: "grid", marginTop: "60px" }}>
                      <label className="billPayment-label">Bill Category</label>
                      <li>
                        <button
                          onClick={() => {
                            handleShowAllTransactionsCategory();
                            handleAllTransactionTypeCategory("TV");
                            toggleButton();
                          }}
                        >
                          TV
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            handleShowAllTransactionsCategory();
                            handleAllTransactionTypeCategory("CshBack");
                            toggleButton();
                          }}
                        >
                          Mobile Data
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            handleShowAllTransactionsCategory();
                            handleAllTransactionTypeCategory("CashBack");
                            toggleButton();
                          }}
                        >
                          Airtime
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            handleShowAllTransactionsCategory();
                            handleAllTransactionTypeCategory("CashBack");
                            toggleButton();
                          }}
                        >
                          Electricity
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            handleShowAllTransactionsCategory();
                            handleAllTransactionTypeCategory("CashBack");
                            toggleButton();
                          }}
                        >
                          Flight
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            handleShowAllTransactionsCategory();
                            handleAllTransactionTypeCategory("CashBack");
                            toggleButton();
                          }}
                        >
                          Education
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            handleShowAllTransactionsCategory();
                            handleAllTransactionTypeCategory("CashBack");
                            toggleButton();
                          }}
                        >
                          Purchase
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            handleShowAllTransactionsCategory();
                            handleAllTransactionTypeCategory("CshBack");
                            toggleButton();
                          }}
                        >
                          E-Pin
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            handleShowAllTransactionsCategory();
                            handleAllTransactionTypeCategory("CshBack");
                            toggleButton();
                          }}
                        >
                          Betting
                        </button>
                      </li>
                    </ul>
                  </div>
                </duv>
              </div>
            ) : (
              showPOSCategory && (
                <duv className="showPOS-category-div">
                  <button
                    onClick={() => {
                      toggleButton();
                      reversePOSCategoryView();
                    }}
                    style={{
                      display: "block",
                      marginLeft: "5px",
                      fontSize: "25px",
                      backgroundColor: "transparent",
                      cursor: "pointer",
                    }}
                  >
                    &times;
                  </button>
                  <label style={{ marginLeft: "20px" }}>
                    Select a c ategory
                  </label>
                  <ul
                    style={{
                      display: "grid",
                      padding: "20px",
                      position: "absolute",
                    }}
                  >
                    <li>
                      <button
                        onClick={() => {
                          toggleButton();
                          handleSelectedTransactionType("CardWithdrawal");
                          handleShowSubPOSCategoryTransaction();
                          handleShowMasterPOSCategoryTransaction();
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        Card Withdrawal
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          toggleButton();
                          handleSelectedTransactionType("CardPayment");
                          handleShowSubPOSCategoryTransaction();
                          handleShowMasterPOSCategoryTransaction();
                        }}
                      >
                        Card Payment
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          toggleButton();
                          handleSelectedTransactionType("POSQCode");
                          handleShowSubPOSCategoryTransaction();
                          handleShowMasterPOSCategoryTransaction();
                        }}
                      >
                        POS Qcode
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          toggleButton();
                          handleSelectedTransactionType("POSTransfer");
                          handleShowSubPOSCategoryTransaction();
                          handleShowMasterPOSCategoryTransaction();
                        }}
                      >
                        POS Transfer
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          toggleButton();
                          handleSelectedTransactionType("LPayUSSD");
                          handleShowSubPOSCategoryTransaction();
                          handleShowMasterPOSCategoryTransaction();
                        }}
                      >
                        LPay USSD
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          toggleButton();
                          handleSelectedTransactionType("BankUSSD");
                          handleShowSubPOSCategoryTransaction();
                          handleShowMasterPOSCategoryTransaction();
                        }}
                      >
                        Bank USSD
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          toggleButton();
                          handleSelectedTransactionType("WithDrawalCode");
                          handleShowSubPOSCategoryTransaction();
                          handleShowMasterPOSCategoryTransaction();
                        }}
                      >
                        Withdrawal Code
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          toggleButton();
                          handleSelectedTransactionType("QCodeCardTransfer");
                          handleShowSubPOSCategoryTransaction();
                          handleShowMasterPOSCategoryTransaction();
                        }}
                      >
                        Qcode Card Transfer
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          toggleButton();
                          handleSelectedTransactionType("LPayAccountTransfer");
                          handleShowSubPOSCategoryTransaction();
                          handleShowMasterPOSCategoryTransaction();
                        }}
                      >
                        LPay account Transfer
                      </button>
                    </li>
                  </ul>
                </duv>
              )
            )}
          </div>
          <div>
            <button
              onClick={() => {
                setShowPOSSelection(true);
                toggleButton();
              }}
            >
              {POSselectedStatus ? POSselectedStatus : "POS"}
            </button>
            {showPOSSelection && (
              <div className="POS-container-div">
                <ul
                  className="POS-container"
                  style={{
                    display: "grid",
                    gap: "10px",
                    backgroundColor: "blue",
                    position: "absolute",
                    zIndex: "10",
                  }}
                >
                  <li>
                    <Select
                      options={masterPOSOptions}
                      isClearable
                      isSearchable
                      placeholder="Select Master POS"
                      onChange={(selectedOption) => {
                        setSelectedMasterPOS(selectedOption);
                        toggleButton();
                        handleShowMasterPOSTransaction();
                        setPOSSelectedStatus("Master-POS");
                      }}
                      value={selectedMasterPOS}
                      styles={MasterPOScustomStyles}
                    />
                  </li>
                  <div className="subPOS-select-container">
                    <Select
                      options={subPOSOptions}
                      isClearable
                      isSearchable
                      placeholder="Select a Sub POS"
                      onChange={(selectedOption) => {
                        setSelectedSubPOS(selectedOption);
                        toggleButton();
                        handleShowSubPOSTransaction();
                        setPOSSelectedStatus("Sub-POS");
                        //useEffect is handling a function here
                      }}
                      styles={customStyles}
                      value={selectedSubPOS}
                    />
                  </div>
                </ul>
              </div>
            )}
          </div>
          <div>
            <button
              onClick={() => {
                setShowStatus(true);
                toggleButton();
              }}
            >
              {selectedStatus ? selectedStatus : "Status"}
            </button>
            {showStatus && (
              <div>
                <div
                  style={{
                    position: "absolute",
                    display: "grid",
                    gap: "20px",
                    width: "250px",
                    backgroundColor: "aqua",
                  }}
                >
                  <button
                    onClick={() => {
                      handleShowTransactionStatus();
                      handleTransactionStatus("completed");
                      toggleButton();
                      setSelectedStatus("Completed");
                    }}
                  >
                    Completed
                  </button>
                  <button
                    onClick={() => {
                      handleShowUpcoming();
                      setSelectedStatus("Upcoming");
                      toggleButton();
                    }}
                  >
                    Upcoming
                  </button>
                  <button
                    onClick={() => {
                      handleShowTransactionStatus();
                      handleTransactionStatus("Pending");
                      setSelectedStatus("Pending");
                      toggleButton();
                    }}
                  >
                    Pending
                  </button>
                  <button
                    onClick={() => {
                      setSelectedStatus("Failed");
                      toggleButton();
                    }}
                  >
                    Failed
                  </button>
                  <button
                    onClick={() => {
                      setSelectedStatus("Reversed");
                      toggleButton();
                    }}
                  >
                    Reversed
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        {error && error}
        {showCompleted && (
          <div>
            {Object.keys(groupedTransactions).map((monthYear) => (
              <div key={monthYear}>
                <h3>{monthYear}</h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {groupedTransactions[monthYear].map((transaction) => (
                    <li
                      key={transaction.id}
                      style={{
                        backgroundColor: "wheat",
                        marginBottom: "10px", // Apply 10px margin bottom
                        padding: "10px", // Apply 10px padding
                        borderRadius: "5px",
                        width: "250px", // Optional: Add rounded corners
                      }}
                    >
                      <p>Type: {transaction.TransactionType}</p>
                      <p>Date: {transaction.date}</p>
                      <p>Description: {transaction.description}</p>
                      <p>Amount: {transaction.amount}</p>
                      <p>Balance: {transaction.balance}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {showAllTransaction && (
          <div>
            {Object.keys(groupedTransactions).map((monthYear) => (
              <div key={monthYear}>
                <h3>{monthYear}</h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {groupedTransactions[monthYear].map((transaction2) => (
                    <li
                      key={transaction2.id}
                      style={{
                        backgroundColor: "wheat",
                        marginBottom: "10px", // Apply 10px margin bottom
                        padding: "10px", // Apply 10px padding
                        borderRadius: "5px",
                        width: "250px", // Optional: Add rounded corners
                      }}
                    >
                      <p>Type: {transaction2.TransactionType}</p>
                      <p>Date: {transaction2.date}</p>
                      <p>Description: {transaction2.description}</p>
                      <p>Amount: {transaction2.amount}</p>
                      <p>Balance: {transaction2.balance}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        {showAllTransactionsCategory && (
          <div>
            {Object.keys(groupedTransactions).map((monthYear) => (
              <div key={monthYear}>
                <h3>{monthYear}</h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {groupedTransactions[monthYear].map(
                    (AllTransactionCategory) => (
                      <li
                        key={AllTransactionCategory.id}
                        style={{
                          backgroundColor: "wheat",
                          marginBottom: "10px", // Apply 10px margin bottom
                          padding: "10px", // Apply 10px padding
                          borderRadius: "5px",
                          width: "250px", // Optional: Add rounded corners
                        }}
                      >
                        <p>Type: {AllTransactionCategory.TransactionType}</p>
                        <p>Date: {AllTransactionCategory.date}</p>
                        <p>Description: {AllTransactionCategory.description}</p>
                        <p>Amount: {AllTransactionCategory.amount}</p>
                        <p>Balance: {AllTransactionCategory.balance}</p>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>
        )}
        {showMasterPOSTransaction && (
          <div>
            {Object.keys(groupedTransactions).map((monthYear) => (
              <div key={monthYear}>
                <h3>{monthYear}</h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {groupedTransactions[monthYear].map(
                    (MasterPOStransaction) => (
                      <li
                        key={MasterPOStransaction.id}
                        style={{
                          backgroundColor: "wheat",
                          marginBottom: "10px", // Apply 10px margin bottom
                          padding: "10px", // Apply 10px padding
                          borderRadius: "5px",
                          width: "250px", // Optional: Add rounded corners
                        }}
                      >
                        <p>Type: {MasterPOStransaction.TransactionType}</p>
                        <p>Date: {MasterPOStransaction.date}</p>
                        <p>Description: {MasterPOStransaction.description}</p>
                        <p>Amount: {MasterPOStransaction.amount}</p>
                        <p>Balance: {MasterPOStransaction.balance}</p>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>
        )}

        {showMasterPOSCategoryTRansactions && (
          <div>
            {Object.keys(groupedTransactions).map((monthYear) => (
              <div key={monthYear}>
                <h3>{monthYear}</h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {groupedTransactions[monthYear].map(
                    (MasterPOSCategoryTransaction) => (
                      <li
                        key={MasterPOSCategoryTransaction.id}
                        style={{
                          backgroundColor: "wheat",
                          marginBottom: "10px", // Apply 10px margin bottom
                          padding: "10px", // Apply 10px padding
                          borderRadius: "5px",
                          width: "250px", // Optional: Add rounded corners
                        }}
                      >
                        <p>
                          Type: {MasterPOSCategoryTransaction.TransactionType}
                        </p>
                        <p>Date: {MasterPOSCategoryTransaction.date}</p>
                        <p>
                          Description:{" "}
                          {MasterPOSCategoryTransaction.description}
                        </p>
                        <p>Amount: {MasterPOSCategoryTransaction.amount}</p>
                        <p>Balance: {MasterPOSCategoryTransaction.balance}</p>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>
        )}
        {showSubPOSCategoryTransactions && (
          <div>
            {Object.keys(groupedTransactions).map((monthYear) => (
              <div key={monthYear}>
                <h3>{monthYear}</h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {groupedTransactions[monthYear].map(
                    (SubPOSCategoryTransaction) => (
                      <li
                        key={SubPOSCategoryTransaction.id}
                        style={{
                          backgroundColor: "wheat",
                          marginBottom: "10px", // Apply 10px margin bottom
                          padding: "10px", // Apply 10px padding
                          borderRadius: "5px",
                          width: "250px", // Optional: Add rounded corners
                        }}
                      >
                        <p>Type: {SubPOSCategoryTransaction.TransactionType}</p>
                        <p>Date: {SubPOSCategoryTransaction.date}</p>
                        <p>
                          Description: {SubPOSCategoryTransaction.description}
                        </p>
                        <p>Amount: {SubPOSCategoryTransaction.amount}</p>
                        <p>Balance: {SubPOSCategoryTransaction.balance}</p>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>
        )}
        {showSubPOSTransaction && (
          <div>
            {Object.keys(groupedTransactions).map((monthYear) => (
              <div key={monthYear}>
                <h3>{monthYear}</h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {groupedTransactions[monthYear].map((SubPOStransaction) => (
                    <li
                      key={SubPOStransaction.id}
                      style={{
                        backgroundColor: "wheat",
                        marginBottom: "10px", // Apply 10px margin bottom
                        padding: "10px", // Apply 10px padding
                        borderRadius: "5px",
                        width: "250px", // Optional: Add rounded corners
                      }}
                    >
                      <p>Type: {SubPOStransaction.TransactionType}</p>
                      <p>Date: {SubPOStransaction.date}</p>
                      <p>Description: {SubPOStransaction.description}</p>
                      <p>Amount: {SubPOStransaction.amount}</p>
                      <p>Balance: {SubPOStransaction.balance}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        {showUpcoming && (
          <div>
            {Object.keys(groupedTransactions).map((monthYear) => (
              <div key={monthYear}>
                <h3>{monthYear}</h3>
                <ul>
                  {groupedTransactions[monthYear].map((transaction1) => (
                    <li
                      key={transaction1.id}
                      style={{
                        backgroundColor: "wheat",
                        marginBottom: "10px", // Apply 10px margin bottom
                        padding: "10px", // Apply 10px padding
                        borderRadius: "5px",
                        width: "250px", // Optional: Add rounded corners
                      }}
                    >
                      <p>Date: {transaction1.date}</p>
                      <p>Description: {transaction1.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        {/* oooooooo */}
      </div>
    </div>
  );
}

export default TransactionHistory;
