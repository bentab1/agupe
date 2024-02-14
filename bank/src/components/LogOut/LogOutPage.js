// LogoutPage.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutPage = ({ onLogout }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Log out logic
    onLogout();
    
    // Redirect to the home page after a delay 
    const redirectTimeout = setTimeout(() => {
      navigate('/');
    }, 20000); // 2 seconds delay, for example

    // Cleanup the timeout to prevent memory leaks
    return () => clearTimeout(redirectTimeout);
  }, [onLogout, navigate]);

  return (
    <div>
      <p>Logging out...</p>
      {/* You can add a loading spinner or other content if needed */}
    </div>
  );
};

export default LogoutPage;

