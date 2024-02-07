import React, { useState } from 'react';
import validator from 'validator';
import './JointAccountReg.css';

function JointAccountReg() {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    familyName: '',
    phoneNumber: '',
    email: '',
    address: '',
    password: '',
    verificationCode: '',
  });
  const [verificationSent, setVerificationSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSendVerification = () => {
    //send verification code via email or SMS
    const generatedCode = Math.floor(1000 + Math.random() * 9000);
    console.log('Verification code:', generatedCode);

    // verification status
    setVerificationSent(true);
  };

  const handleRegistration = () => {
    // Perform registration logic here
    if (validateForm()) {
      console.log('Registration successful!');
    } else {
      console.log('Invalid form data. Please check your inputs.');
    }
  };

  const validateForm = () => {
    const { email, password, verificationCode, phoneNumber } = formData;

    // Validate email
    if (!validator.isEmail(email) || !validator.isEmail(phoneNumber) ) {
      console.log('Invalid email address');
      return false;
    }

    // password validation
    const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      console.log('Invalid password. Password must meet the specified criteria.');
      return false;
    }

    // Validate phone number
    if (verificationSent && verificationCode !== '0000') {
      //verification status
      console.log('Invalid verification code');
      return false;
    }

    return true;
  };
 
  return (
    <div style={{display:'grid'}}>

                <h3 style={{marginLeft:'470px',marginTop:'20px', color:"royalblue"}}>
             Joint Account Registeration:</h3>
      <div style={{display:'flex', marginLeft:'110px', marginTop:'30px', marginBottom:'30px'}}>
     <label style={{marginLeft:'40px'}}>Fill the form below:</label>
      <label  style={{marginLeft:'30px'}}> Or enter 2 major BVN:</label>
      <label  style={{marginLeft:'30px'}}> First person BVN:</label>
      <input type="BVN" name="BVN" onChange={handleChange} />
      <label  style={{marginLeft:'30px'}}> Second Person BVN:</label>
      <input type="BVN" name="BVN" onChange={handleChange} />

      </div>
        <form style={{display:'grid', width:'40%', marginLeft:'350px'}}>
      <label>First Name:</label>
      <input type="text" name="firstName" onChange={handleChange} />

      <label>Middle Name:</label>
      <input type="text" name="middleName" onChange={handleChange} />

      <label>Last Name:</label>
      <input type="text" name="lastName" onChange={handleChange} />

      <label>Family/Surname:</label>
      <input type="text" name="familyName" onChange={handleChange} />

      <label>Phone Number*:</label>
      <input type="tel" name="phoneNumber" onChange={handleChange} />
      <label>Adress:</label>
      <input type="adress" name="address" onChange={handleChange} />
      <label>Email:</label>
      <input type="email" name="email" onChange={handleChange} />
      <label>Password*:</label>
      <input type="password" name="password" onChange={handleChange} />

      {verificationSent && (
        <>
          <label>Verification Code* :</label>
          <input type="text" name="verificationCode" onChange={handleChange} />
        </>
      )}
      <button onClick={handleSendVerification} disabled={verificationSent}>
        Send Verification Code to
      </button>

      <label>Email:</label>
      <input type="email" name="email" onChange={handleChange} />
      <label> Or phoneNumber:</label>
      <input type="phoneNumber" name="phoneNumber" onChange={handleChange} />
      <button onClick={handleRegistration}>Register</button>
      </form>
    </div>
  );
};
export default JointAccountReg