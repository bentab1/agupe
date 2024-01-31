import { React, useState } from 'react';

import './App.css';
import { Banking, Business, ContactUs, Footer, Header, NavBar, Notification, Personal } from "./components";
import Contents from './components/Contents/Contents';
import Features from './components/Features/Features';
import Review from './components/Review/Review';
import { AgupePay } from './container';


const App = () => {
  const [route, setRoute] = useState(null);
  
    return (
      <div style={{ height: '100vh' }}>
        <Header />
        <div className='App'>
        <NavBar setRoute={setRoute} />
          {route === 'business' && <Business isVisible={true} />}
          {route === 'agupePay' && <AgupePay isVisible={true} />}
          {route === 'personal' && <Personal isVisible={true} />}
          {route === 'contactUs' && <ContactUs isVisible={true} />}
          {route === 'banking' && <Banking isVisible={true} />}
          <div></div>
            <Contents />
            <Features />
            <Review />
            <Notification />
          </div>
          <Footer />
        </div>
    );
  };
  export default App;