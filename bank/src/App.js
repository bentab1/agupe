import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Footer, Header, NavBar, Notification, Welcome } from "./components";
import AboutUs from './components/AboutUs/AboutUs';
import AdMoneyMethod from './components/AdMoneyMethod/AdMoneyMethod';
import AddMoneyBankMenu from './components/AddMoneyBankMenu/AddMoneyBankMenu';
import Banking from './components/Banking/Banking';
import Business from './components/Business/Business';
import BusinessAccount from './components/BusinessAccount/BusinessAccount';
import ContactUs from './components/ContactUs/ContactUs';
import Contents from './components/Contents/Contents';
import Enterprise from './components/Enterprise/Enterprise';
import Features from './components/Features/Features';
import Help from './components/Help/Help';
import LiveChat from './components/LiveChat/LiveChat';
import LogoutPage from './components/LogOut/LogOutPage';
import LoginPage from './components/Login/LoginPage';
import PageNotFound from './components/PageNotFound';
import Personal from './components/Personal/Personal';
import PersonalAccount from './components/PersonalAccount/PersonalAccount';
import Settings from './components/PersonalAccount/Settings';
import Review from './components/Review/Review';
import AgupePaySignUp from './components/SignUp/AgupePaySignUp';
import BusinessSignUp from './components/SignUp/BusinessSignUp';
import EnterpriseSignUp from './components/SignUp/EnterpriseSignUp';
import JointSignUp from './components/SignUp/JointSignUp';
import PersonSignUp from './components/SignUp/PersonSignUp';
import AgupePaySignUpRedirect from './components/SignUpRedirect/AgupePaySignUpRedirect';
import BusinessSignUpRedirect from './components/SignUpRedirect/BusinessSignUpRedirect';
import EnterpriseSignUpRedirect from './components/SignUpRedirect/EnterpriseSignUpRedirect';
import JointSignUpRedirect from './components/SignUpRedirect/JointSignUpRedirect';
import PersonSignUpRedirect from './components/SignUpRedirect/PersonSignUpRedirect';
import AgupePay from './container/AgupePay/AgupePay';


function App () {
  
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (username) => {
    setLoggedIn(true);
    setCurrentUser(username);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setCurrentUser(null);
  };
  return (
  
  <div className="app">
   
    <Router>
      <Header />
      <NavBar />
      <div className="content-container">

      {loggedIn && currentUser.role === 'business' && (
        <Routes>
          {/* Business account routes */}
          <Route path="/" element={<BusinessAccount />} />
          <Route path="/addmoney" element={<AdMoneyMethod />} />
          <Route path="/addthrough/bank" element={<AddMoneyBankMenu />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      )}
      
      <Routes>
     <Route path="/account/login" element={<LoginPage onLogin={handleLogin} />} />
     <Route path="/" element={<LogoutPage onLogout={handleLogout} />} />
     <Route component={PageNotFound} />
     </Routes>

        {loggedIn && currentUser.role === 'personal' && (
          <Routes>
            {/* Personal account routes */}
            <Route path="/" element={<PersonalAccount />} />
            <Route path="/addmoney" element={<AdMoneyMethod />} />
            <Route path="/addthrough/bank" element={<AddMoneyBankMenu />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
     
              )}

        <Routes>
        <Route index element={<div></div>} />
         <Route path="/aboutUs" element={<AboutUs/>} />
          <Route path="/liveChat" element={<LiveChat/>} />
          <Route path="/help" element={<Help/>} />
          <Route path="/business" element={<Business />} />
          <Route path="/agupepay" element={<AgupePay />} />
          <Route path="/banking" element={<Banking />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/account/login" element={<LoginPage/>} />
          <Route path="/personal/signup" element={<PersonSignUpRedirect/>} />
          <Route path="/agupepay/signup" element={<AgupePaySignUpRedirect/>} />
          <Route path="/business/signup" element={<BusinessSignUpRedirect/>} />
          <Route path="/joint/signup" element={<JointSignUpRedirect/>} />
          <Route path="/enterprise/signup" element={<EnterpriseSignUpRedirect/>} />
          <Route path="/business/signup/redirect" element={<BusinessSignUp/>} />
          <Route path="/person/signup/redirect" element={<PersonSignUp/>} />
          <Route path="/joint/signup/redirect" element={<JointSignUp/>} />
          <Route path="/agupepay/signup/redirect" element={<AgupePaySignUp/>} />
          <Route path="/enterprise/signup/redirect" element={<EnterpriseSignUp/>} />
          <Route component={PageNotFound} />
        </Routes> 
          
          <Contents />
          <Features />
           <Review />
          <Notification />
              </div>
         <Footer />
         <Welcome />
          </Router>
          
  </div>
);
}
export default App;