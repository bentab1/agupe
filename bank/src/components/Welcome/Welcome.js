import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './welcome.css';

const Welcome = () => {
  const navigate = useNavigate();
  const [showWelcome, setShowWelcome] = useState(false);

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowWelcome(true);
    }, 1000); // Show the screen for 5 seconds (5000 milliseconds)

    const hideTimer = setTimeout(() => {
      setShowWelcome(false);
      // Add additional logic if needed when the screen is automatically hidden
    }, 30000); // Hide the screen after 10 seconds (10000 milliseconds)

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleContinue = () => {
    console.log('Continue to App');
    navigate('/app');
  };

  const handleLearnMore = () => {
    console.log('Learn More');
    navigate('/learn-more');
  };

  return (
    showWelcome && (
      <div className="welcome-container" style={{ display: show ? 'none' : 'flex' }}>
        <div onClick={handleShow} style={{ cursor: 'pointer' }}>
          <p>X</p>
        </div>
        <div style={{ display: 'grid' }}>
          <h1>Welcome to Your App!</h1>
          <p>Learn more about our app or dive right in.</p>
          <div className="button-container">
            <button onClick={handleLearnMore}>Learn More</button>
            <button onClick={handleContinue}>Continue</button>
          </div>
        </div>
      </div>
    )
  );
};

export default Welcome;
