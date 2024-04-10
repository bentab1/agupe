import { React, useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import AdMoneyMethod from "./components/AdMoneyMethod/AdMoneyMethod";
import AddMoneyBankMenu from "./components/AddMoneyBankMenu/AddMoneyBankMenu";
import AgupePay from "./components/AgupePay/AgupePay";
import Banking from "./components/Banking/Banking";
import Business from "./components/Business/Business";
import BusinessAccount from "./components/BusinessAccount/BusinessAccount";
import ContactUs from "./components/ContactUs/ContactUs";
import UnsupportedCountrySelectionMessage from "./components/CountrySelectionSelected/UnsupportedCountrySelected";
import Features from "./components/Features/Features";
import fetchTransactionHistory from "./components/FetchedTransactionHistory.js";
import RecentTransaction from "./components/FinalWork/RecentTransaction.js";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Help from "./components/Help/Help";
import LiveChat from "./components/LiveChat/LiveChat";
import LoginPage from "./components/Login/LoginPage";
import Menu from "./components/Menu/Menu";
import NavBar from "./components/NavBar/NavBar";
import Notification from "./components/Notification/Notification";
import Personal from "./components/Personal/Personal";
import PersonalAccount from "./components/PersonalAccount/PersonalAccount";
import Review from "./components/Review/Review";
import SignUpRedirect from "./components/SignUpRedirect/SignUpRedirect";
import Welcome from "./components/Welcome/Welcome";

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

export default function App() {
  const [activeButton, setActiveButton] = useState(null);
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [groupedTransactions, setGroupedTransactions] = useState({});
  const [showTransactions, setShowTransactions] = useState(false);
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState(0);
  const [showBalance, setShowBalance] = useState(false);
  const [error, setError] = useState("");
  const authenticatedCustomerId = "uc12";
  const CURRENCY_SYMBOL = "₦";
  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  useEffect(() => {
    const fetchData = async () => {
      const transactionData = fetchTransactionHistory();

      // Check if there are transactions for the authenticated customer's account numbers
      const authenticatedCustomerTransactions = transactionData.filter(
        (transaction) =>
          transaction.customer_id === authenticatedCustomerId ||
          (transaction.business_id === authenticatedCustomerId &&
            (transaction.accountType === "Savings" ||
              transaction.accountType === "Business" ||
              transaction.accountType === "Master_POS" ||
              transaction.accountType === "Sub_POS"))
      );
      setTransactionHistory(authenticatedCustomerTransactions);
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filter transactions for each account type
    const getOptions = (transactions, accountType) => {
      const uniqueMap = new Map();
      transactions.forEach((transaction) => {
        const { accountNumber, serialNumber, balance } = transaction;
        let updatedAccountType = accountType;

        if (!transaction.business_id) {
          updatedAccountType = "Savings";
        } else if (
          transaction.accountType === "Business" &&
          !transaction.serialNumber
        ) {
          updatedAccountType = "Business";
        } else if (
          transaction.accountType === "Master_POS" &&
          transaction.business_id
        ) {
          updatedAccountType = "Master_POS";
        } else if (
          transaction.accountType === "Master_POS" &&
          transaction.serialNumber &&
          transaction.serialNumber.startsWith("BM")
        ) {
          updatedAccountType = "Master_POS";
        } else if (
          transaction.accountType === "Sub_POS" &&
          transaction.business_id
        ) {
          updatedAccountType = "Sub_POS";
        } else if (
          transaction.accountType === "Sub_POS" &&
          transaction.serialNumber &&
          transaction.serialNumber.startsWith("BMS")
        ) {
          updatedAccountType = "Sub_POS";
        }

        if (!uniqueMap.has(accountNumber)) {
          uniqueMap.set(accountNumber, {
            serialNumber,
            balance,
            accountType: updatedAccountType,
          });
        }
      });

      const options = [];
      uniqueMap.forEach((data, accountNumber) => {
        const { serialNumber, balance } = data;
        options.push({
          label: (
            <div style={{ width: "130px", height: "80px", marginLeft: "10px" }}>
              <div style={{ marginTop: "20px" }}>
                <p style={{ fontSize: "14px" }}> {accountType}: NAIRA</p>
              </div>
              <div
                style={{ marginTop: "10px", backgroundColor: "transparent" }}
              >
                <span style={{ fontSize: "15px" }}>
                  {" "}
                  {showBalance && (
                    <p>
                      {" "}
                      {CURRENCY_SYMBOL}
                      {parseFloat(balance).toLocaleString("en")}
                    </p>
                  )}
                </span>
              </div>
              <p
                style={{
                  backgroundColor: showBalance ? "royalblue" : "transparent",
                  fontSize: "11px",
                  with: "30px",
                  paddingLeft: "25px",
                  marginTop: "10px",
                  height: "29px",
                  borderRadius: "20px",
                }}
              >
                {" "}
                {showBalance ? "Account Number" : ""}{" "}
                {showBalance ? accountNumber : "xxxxxx>"}
              </p>
              <p style={{ fontSize: "11px", marginTop: "15px" }}>
                {" "}
                S/N: {showBalance ? serialNumber : ""}
              </p>
            </div>
          ),
          value: accountNumber,
        });
      });
      return options;
    };

    const accountTypes = ["Savings", "Business", "Master_POS", "Sub_POS"];

    const options = accountTypes.flatMap((type) =>
      getOptions(
        transactionHistory.filter(
          (transaction) =>
            transaction.customer_id === "uc12" &&
            transaction.accountType === type
        ),
        type
      )
    );
    setOptions(options);
  }, [transactionHistory, showBalance]);

  const handleToggleBalance = () => {
    setShowBalance(!showBalance);
  };

  useEffect(() => {
    let timeoutId;

    const resetActiveButton = () => {
      setActiveButton(null);
    };
    timeoutId = setTimeout(resetActiveButton, 10000); // Set timeout for 10 seconds
    return () => {
      clearTimeout(timeoutId); // Clear timeout on component unmount or when activeButton changes
    };
  }, [activeButton]);

  useEffect(() => {
    const grouped = groupTransactionsByMonth(transactionHistory);
    setGroupedTransactions(grouped);
  }, [transactionHistory]);
  /////
  /////

  return (
    <div className="app">
      <Router>
        <Header handleClick={handleClick} activeButton={activeButton} />
        <NavBar handleClick={handleClick} activeButton={activeButton} />
        <div className="content-container">
          <Routes>
            <Route path="/account/login" element={<LoginPage />} />
            <Route path="/personalAccount" element={<PersonalAccount />} />
            <Route path="/addmoney" element={<AdMoneyMethod />} />
            <Route path="/addthrough/bank" element={<AddMoneyBankMenu />} />
          </Routes>
          <Routes>
            <Route path="/businessAccount" element={<BusinessAccount />} />
          </Routes>
          <Routes>
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/liveChat" element={<LiveChat />} />
            <Route path="/help" element={<Help />} />
            <Route path="/business" element={<Business />} />
            <Route path="/agupepay" element={<AgupePay />} />
            <Route path="/banking" element={<Banking />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/account/signup" element={<SignUpRedirect />} />
            <Route
              path="/unSupportedCountrySelected"
              element={<UnsupportedCountrySelectionMessage />}
            />
          </Routes>

          {/* <FilteredAllTransactionAccount
            transactionHistory={transactionHistory}
            options={options}
            selected={selected}
            setSelected={setSelected}
            groupedTransactions={groupedTransactions}
            setGroupedTransactions={setGroupedTransactions}
            groupTransactionsByMonth={groupTransactionsByMonth}
            showTransactions={showTransactions}
            setShowTransactions={setShowTransactions}
            handleToggleBalance={handleToggleBalance}
            setShowBalance={setShowBalance}
            setTransactionHistory={setTransactionHistory}
          /> */}
          {/* s */}
          {/* <Contents /> */}
          <Features />
          <Review />
          <RecentTransaction
            transactionHistory={transactionHistory}
            options={options}
            selected={selected}
            setSelected={setSelected}
            groupedTransactions={groupedTransactions}
            setGroupedTransactions={setGroupedTransactions}
            groupTransactionsByMonth={groupTransactionsByMonth}
            showTransactions={showTransactions}
            setShowTransactions={setShowTransactions}
            handleToggleBalance={handleToggleBalance}
            setShowBalance={setShowBalance}
            setTransactionHistory={setTransactionHistory}
          />
          <Notification />
        </div>
        <Footer />
        <Welcome />
      </Router>
    </div>
  );
}
