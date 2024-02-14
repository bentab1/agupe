import React, { useState } from 'react';

const Settings= () => {
  const [profilePicture, setProfilePicture] = useState(''); // Path to the current profile picture
  const [newProfilePicture, setNewProfilePicture] = useState(''); // Path to the new profile picture
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [securityQuestion, setSecurityQuestion] = useState('');
  const [newSecurityQuestion, setNewSecurityQuestion] = useState('');

  const handleProfilePictureChange = (event) => {
    setNewProfilePicture(URL.createObjectURL(event.target.files[0])); // Create a URL for the selected file
  };

  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleSecurityQuestionChange = (event) => {
    setNewSecurityQuestion(event.target.value);
  };

  const handleSaveChanges = () => {
    // Save changes to the server or perform necessary actions
    // For simplicity, we'll just log the changes to the console
    console.log('New Profile Picture:', newProfilePicture);
    console.log('New Password:', newPassword);
    console.log('New Security Question:', newSecurityQuestion);

    // You can update the state or perform other actions based on the changes
    setProfilePicture(newProfilePicture);
    setPassword(newPassword);
    setSecurityQuestion(newSecurityQuestion);

    // Optionally, you can reset the new values to empty after saving
    setNewProfilePicture('');
    setNewPassword('');
    setNewSecurityQuestion('');
  };

  return (
    <div>
      <h2>Settings</h2>

      <div>
        <label>Profile Picture:</label>
        <input type="file" accept="image/*" onChange={handleProfilePictureChange} />
        {newProfilePicture && <img src={newProfilePicture} alt="New Profile" style={{ maxWidth: '100px', maxHeight: '100px' }} />}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={handlePasswordChange}
        />
      </div>

      <div>
        <label>Security Question:</label>
        <input
          type="text"
          placeholder="Enter new security question"
          value={newSecurityQuestion}
          onChange={handleSecurityQuestionChange}
        />
      </div>

      <button onClick={handleSaveChanges}>Save Changes</button>

      <div>
        <h3>Current Settings:</h3>
        <p>Profile Picture: {profilePicture}</p>
        <p>Password: {password}</p>
        <p>Security Question: {securityQuestion}</p>
      </div>
    </div>
  );
};

export default Settings;
