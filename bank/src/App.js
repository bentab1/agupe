import { React } from "react";
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
import UnsupportedCountrySelectionMessage from "./components/CountrySelectionMessage/UnsupportedCountrySelectionMessage";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Help from "./components/Help/Help";
import LiveChat from "./components/LiveChat/LiveChat";
import LoginPage from "./components/Login/LoginPage";
import NavBar from "./components/NavBar/NavBar";
import Notification from "./components/Notification/Notification";
import Personal from "./components/Personal/Personal";
import PersonalAccount from "./components/PersonalAccount/PersonalAccount";
import Review from "./components/Review/Review";
import SignUpRedirect from "./components/SignUpRedirect/SignUpRedirect";
import Welc from "./components/Welcome/Welc";
import Welcome from "./components/Welcome/Welcome";
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <NavBar />
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
          <Contents />
          <Features />
          <Review />
          <Welc />
          <Notification />
        </div>
        <Footer />
        <Welcome />
      </Router>
    </div>
  );
}
export default App;
