import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Footer, Header, NavBar, Notification } from "./components";
import Banking from './components/Banking/Banking';
import Business from './components/Business/Business';
import ContactUs from './components/ContactUs/ContactUs';
import Contents from './components/Contents/Contents';
import Features from './components/Features/Features';
import Personal from './components/Personal/Personal';
import Review from './components/Review/Review';
import AgupePay from './container/AgupePay/AgupePay';

  const App = () => (
    <div className="app">
    <Router>
      <Header />
      <div className="content-container">
        <NavBar />
        <Routes>
          <Route index element={<div>Home Content</div>} />
          <Route path="/business" element={<Business />} />
          <Route path="/agupepay" element={<AgupePay />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/banking" element={<Banking />} />
        </Routes>
        <Contents />
        <Features />
        <Review />
        <Notification/>
        
      </div>
      <Footer/>
    </Router>
  </div>
  );
  
  export default App;