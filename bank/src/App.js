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
import Contents from "./components/Contents/Contents";
import UnsupportedCountrySelectionMessage from "./components/CountrySelectionSelected/UnsupportedCountrySelected";
import Features from "./components/Features/Features";
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
import AllTransactions from "./components/TransactionStatus/AllTransactions/AllTransactions";
import CompletedTransaction from "./components/TransactionStatus/CompletedTransaction/CompletedTransaction";
import FailedTransaction from "./components/TransactionStatus/FailedTransaction/FailedTransaction";
import PendingTransaction from "./components/TransactionStatus/PendingTransaction/PendingTransaction";
import ReversedTransaction from "./components/TransactionStatus/ReversedTransaction/ReversedTransaction";
import TransactionStatus from "./components/TransactionStatus/TransactionStatus";
import UpcomingTransaction from "./components/TransactionStatus/UpcomingTransaction/UpcominTransaction";
import Welcome from "./components/Welcome/Welcome";
import CategoryforAllTransaction from "./components/TransactionStatus/CategoryforAllTransaction/CategoryforAllTransaction";

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
  const [groupedTransactions, setGroupedTransactions] = useState({});
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [showAllTransactions, setShowAllTransactions] = useState(false);
  const [showCompletedTransactions, setShowCompletedTransactions] =
    useState(false);

  const [showUpcomingTransactions, setShowUpcomingTransactions] =
    useState(false);
  const [showFailedTransaction, setshowFailedTransaction] = useState(false);
  const [showPendingTransactions, setShowPendingTransactions] = useState(false);
  const [showReversedTransactions, setShowReversedTransactions] =
    useState(false);
  const [ShowCategoryForAllTransactions, setShowCategoryForAllTransactions] =
    useState(false);
  const [selectedTransactionType, setSelectedTransactionType] = useState(null);
  const [showAllCategoryMenu, setShowAllCategoyMenu] = useState(false);
  const [error, setError] = useState("");

  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
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

  //
  //

  useEffect(() => {
    const grouped = groupTransactionsByMonth(transactionHistory);
    setGroupedTransactions(grouped);
  }, [transactionHistory]);
  /////
  /////
  const handleAllTransactionStatus = () => {
    const transactionStatus = "completed";
    setGroupedTransactions(
      groupTransactionsByMonth(
        transactionHistory.filter((transaction) => transaction)
      )
    );
    if (!transactionStatus) {
      setError("No transaction found");
      setShowAllTransactions({});
      return;
    }
    setShowAllTransactions(true);
  };

  function toggleButtonAtransactions() {
    if (showAllTransactions === true) setShowAllTransactions(false);
  }
  // This lines of code below is for Completed Transaction
  const handleCompletedTransactionStatus = () => {
    const transactionStatus = "completed";
    setGroupedTransactions(
      groupTransactionsByMonth(
        transactionHistory.filter(
          (transaction) => transaction.status === "completed"
        )
      )
    );
    if (!transactionStatus) {
      setError("No transaction found");
      setShowCompletedTransactions({});
      return;
    }
    setShowCompletedTransactions(true);
  };

  function toggleButtonCompleted() {
    if (showCompletedTransactions === true) setShowCompletedTransactions(false);
  }
  ///////
  ///////
  //This lines of code below is for Upcoming Transaction
  const handleUpcomingTransactionStatus = () => {
    setGroupedTransactions(
      groupTransactionsByMonth(
        transactionHistory.filter(
          (transaction) => transaction.status === "upcoming"
        )
      )
    );
    setShowUpcomingTransactions(true);
  };

  function toggleButtonUpcoming() {
    if (showUpcomingTransactions === true) setShowUpcomingTransactions(false);
  }
  ////
  const handleFailedTransactionStatus = () => {
    const transactionStatus = "failed";
    setGroupedTransactions(
      groupTransactionsByMonth(
        transactionHistory.filter(
          (transaction) => transaction.status === "failed"
        )
      )
    );
    if (!transactionStatus) {
      setError("No transaction found");
      setshowFailedTransaction({});
      return;
    }
    setshowFailedTransaction(true);
  };

  useEffect(() => {
    const grouped = groupTransactionsByMonth(transactionHistory);
    setGroupedTransactions(grouped);
  }, [transactionHistory]);

  function toggleButtonFailed() {
    if (showFailedTransaction === true) setshowFailedTransaction(false);
  }
  //////
  //////
  //This lines of code below is for pending Transaction
  const handlePendingTransactionStatus = () => {
    const transactionStatus = "pending";
    setGroupedTransactions(
      groupTransactionsByMonth(
        transactionHistory.filter(
          (transaction) => transaction.status === "pending"
        )
      )
    );
    if (!transactionStatus) {
      setError("No transaction found");
      setShowPendingTransactions({});
      return;
    }
    setShowPendingTransactions(true);
  };

  function toggleButtonPending() {
    if (showPendingTransactions === true) setShowPendingTransactions(false);
  }
  ///////
  //////
  //This lines of code below is for Reversed Transaction
  const handleReversedTransactionStatus = () => {
    const transactionStatus = "reversed";
    setGroupedTransactions(
      groupTransactionsByMonth(
        transactionHistory.filter(
          (transaction) => transaction.status === "reversed"
        )
      )
    );
    if (!transactionStatus) {
      setError("No transaction found");
      setShowReversedTransactions({});
      return;
    }
    setShowReversedTransactions(true);
  };

  function toggleButtonReversed() {
    if (showReversedTransactions === true) setShowReversedTransactions(false);
  }
  ///////
  ///////
  const handleCategoryForTransactionStatus = () => {
    const transactionType = selectedTransactionType;
    setGroupedTransactions(
      groupTransactionsByMonth(
        transactionHistory.filter(
          (transaction) => transaction.status === selectedTransactionType
        )
      )
    );
    if (!selectedTransactionType) {
      setError("No transaction found");
      setShowCategoryForAllTransactions({});
      return;
    }
    setShowCategoryForAllTransactions(true);
  };

  function toggleButtonCategoryForAllTransaction() {
    if (ShowCategoryForAllTransactions === true)
      setShowCategoryForAllTransactions(false);
  }
  
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

          <AllTransactions
            setTransactionHistory={setTransactionHistory}
            groupedTransactions={groupedTransactions}
            showAllTransactions={showAllTransactions}
          />
          <CompletedTransaction
            setTransactionHistory={setTransactionHistory}
            groupedTransactions={groupedTransactions}
            showCompletedTransactions={showCompletedTransactions}
          />
          <UpcomingTransaction
            showUpcomingTransactions={showUpcomingTransactions}
            setTransactionHistory={setTransactionHistory}
            groupedTransactions={groupedTransactions}
          />
          <FailedTransaction
            setTransactionHistory={setTransactionHistory}
            groupedTransactions={groupedTransactions}
            showFailedTransaction={showFailedTransaction}
          />
          <PendingTransaction
            setTransactionHistory={setTransactionHistory}
            groupedTransactions={groupedTransactions}
            showPendingTransactions={showPendingTransactions}
          />
          <ReversedTransaction
            setTransactionHistory={setTransactionHistory}
            groupedTransactions={groupedTransactions}
            showReversedTransactions={showReversedTransactions}
          />
          <TransactionStatus
            handleCompletedTransactionStatus={handleCompletedTransactionStatus}
            toggleButtonCompleted={toggleButtonCompleted}
            handleUpcomingTransactionStatus={handleUpcomingTransactionStatus}
            toggleButtonUpcoming={toggleButtonUpcoming}
            handleFailedTransactionStatus={handleFailedTransactionStatus}
            toggleButtonFailed={toggleButtonFailed}
            handlePendingTransactionStatus={handlePendingTransactionStatus}
            toggleButtonPending={toggleButtonPending}
            handleReversedTransactionStatus={handleReversedTransactionStatus}
            toggleButtonReversed={toggleButtonReversed}
            handleAllTransactionStatus={handleAllTransactionStatus}
            toggleButtonAtransactions={toggleButtonAtransactions}
            transactionHistory={transactionHistory}
            setGroupedTransactions={setGroupedTransactions}
            groupTransactionsByMonth={groupTransactionsByMonth}
            groupedTransactions={groupedTransactions}
            setTransactionHistory={setTransactionHistory}
          />
          <CategoryforAllTransaction
            ShowCategoryForAllTransactions={ShowCategoryForAllTransactions}
            groupedTransactions={groupedTransactions}
            setTransactionHistory={setTransactionHistory}
          />
          <Features />
          <Review />
          <Contents />
          <Notification />
        </div>
        <Footer />
        <Welcome />
      </Router>
    </div>
  );
}
