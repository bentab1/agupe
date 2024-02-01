import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Footer, Header, NavBar, Notification } from "./components";
import AboutUs from './components/AboutUs/AboutUs';
import Banking from './components/Banking/Banking';
import Business from './components/Business/Business';
import ContactUs from './components/ContactUs/ContactUs';
import Contents from './components/Contents/Contents';
import Features from './components/Features/Features';
import HeaderLinkRoute from './components/HeaderLinkRoute/HeaderLinkRoute';
import Help from './components/Help/Help';
import LiveChat from './components/LiveChat/LiveChat';
import Personal from './components/Personal/Personal';
import Review from './components/Review/Review';
import AgupePay from './container/AgupePay/AgupePay';

const App = () => (
  <div className="app">
    <Router>
      <Header />
      <HeaderLinkRoute />

      <div className="content-container">
        <NavBar />
        <Routes>
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/liveChat" component={LiveChat} />
          <Route path="/help" component={Help} />
          <Route index element={<div></div>} />
          <Route path="/business" element={<Business />} />
          <Route path="/agupepay" element={<AgupePay />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/banking" element={<Banking />} />
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