import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Footer, Header, NavBar, Notification, Welcome } from "./components";
import AboutUs from './components/AboutUs/AboutUs';
import Banking from './components/Banking/Banking';
import Business from './components/Business/Business';
import BusinessReg from './components/BusinessReg/BusinessReg';
import ContactUs from './components/ContactUs/ContactUs';
import Contents from './components/Contents/Contents';
import Features from './components/Features/Features';
import LoginForm from './components/Form/LoginForm';
import Help from './components/Help/Help';
import JointAccountReg from './components/JointAccountReg/JointAccountReg';
import LiveChat from './components/LiveChat/LiveChat';
import Personal from './components/Personal/Personal';
import PersonalReg from './components/PersonalReg/PersonalReg';
import Review from './components/Review/Review';
import BusinessSignUp from './components/SignUp/BusinessSignUp';
import PersonalSignUp from './components/SignUp/PersonSignUp';
import BusinessSignUpRedirect from './components/SignUpRedirect/BusinessSignUpRedirect';
import AgupePay from './container/AgupePay/AgupePay';

const App = () => (
  <div className="app">
    <Router>
      <Header />
      <Welcome/>
      <NavBar />
      <div className="content-container">
        <Routes>
         <Route path="/aboutUs" element={<AboutUs/>} />
          <Route path="/liveChat" element={<LiveChat/>} />
          <Route path="/help" element={<Help/>} />
          <Route index element={<div></div>} />
          <Route path="/business" element={<Business />} />
          <Route path="/agupepay" element={<AgupePay />} />
          <Route path="/banking" element={<Banking />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/register/personal/joint" element={<JointAccountReg />} />
          <Route path="/register/personal" element={<PersonalReg/>} />
          <Route path="/register/Business" element={<BusinessReg/>} />
          <Route path="/business/signup/redirect" element={<BusinessSignUp/>} />



          <Route path="/personal/signup" element={<PersonalSignUp/>} />
          <Route path="/agupepay/signup" element={<PersonalSignUp/>} />
          <Route path="/business/signup" element={<BusinessSignUpRedirect/>} />
          <Route path="/account/login" element={<LoginForm/>} />
        </Routes>
        <Contents />
        <Features />
        <Review />
        <Notification />
      </div>
      <Footer />
    </Router>
  </div>
);

export default App;