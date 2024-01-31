import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './welcome.css';

const Welcome = () => {
  const history = useNavigate();
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowWelcome(true);
    }, 5000); // Show the screen for 5 seconds (5000 milliseconds)

    const hideTimer = setTimeout(() => {
      setShowWelcome(false);
      // Add additional logic if needed when the screen is automatically hidden
    }, 10000); // Hide the screen after 10 seconds (10000 milliseconds)

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleContinue = () => {
    console.log('Continue to App');
    history.push('/app');
  };

  const handleLearnMore = () => {
    console.log('Learn More');
    history.push('/learn-more');
  };

  return (
    showWelcome && (
      <div className="welcome-container">
        <h1>Welcome to Your App!</h1>
        <p>Learn more about our app or dive right in.</p>
        <div className="button-container">
          <button onClick={handleLearnMore}>Learn More</button>
          <button onClick={handleContinue}>Continue</button>
        </div>
      </div>
    )
  );
};

export default Welcome;
