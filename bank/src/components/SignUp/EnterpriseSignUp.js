import React, { useEffect, useState } from 'react';
import validator from 'validator';
import Footer from '../Footer/Footer';
import Notification from '../Notification/Notification';
import './enterpriseSignUp.css';

const EnterpriseSignUp = () => {

  const [formData, setFormData] = useState(() => {
    // Retrieve data from localStorage when the component mounts
    const storedData = localStorage.getItem('formData');
    return storedData ? JSON.parse(storedData) : {
      firstName: '',
      middleName: '',
      lastName: '',
      familyName: '',
      phoneNumber: '',
      email: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      postcode: '',
      password: '',
      confirmPassword: '',
      verificationCode: '',
      gender: '',
      maritalStatus: [],
      country: '',
      countryCode: '',
      dateOfBirth: '',
      idType: '',
      idNumber: '',
      idIssuedDate: '',
      idExpiryDate: '',
      // ... rest of your form fields
    };
  });
   
  const [verificationSent, setVerificationSent] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [mandatoryFieldError, setMandatoryFieldError] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState('');
  const [resendTimer, setResendTimer] = useState(60);
  const [resendErrorMessage, setResendErrorMessage] = useState('');
  const [isRegisterButtonDisabled, setIsRegisterButtonDisabled] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [passwordErrorMessageVisible, setPasswordErrorMessageVisible] = useState(false);
  const [idExpiryOption, setIdExpiryOption] = useState('please select one');
  const [verificationCodeError, setVerificationCodeError] = useState('');
  const [idExpiryDateError, setIdExpiryDateError] = useState('');
  const [bvnError, setBvnError] = useState('');
  const [isSaved, setIsSaved] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [bvn, setBVN] = useState('');

  const handleSave = () => {
    setIsSaved(true);
  };

  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    // Save form data to localStorage whenever it changes
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    // Calculate age based on date of birth
    const calculateAge = () => {
      const dob = new Date(formData.dateOfBirth);
      const today = new Date();
      const age = today.getFullYear() - dob.getFullYear();
      const monthDiff = today.getMonth() - dob.getMonth();

      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        return age - 1;
      }

      return age;
    };

    // Set age in the form data
    setFormData((prevData) => ({
      ...prevData,
      age: calculateAge(),
    }));
  }, [formData.dateOfBirth]);

  useEffect(() => {
    let timer;

    if (resendTimer > 0 && verificationSent) {
      timer = setTimeout(() => {
        setResendTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setVerificationSent(false);
      setResendTimer(60);
    }

    return () => clearTimeout(timer);
  }, [resendTimer, verificationSent]);

  useEffect(() => {
    // Enable or disable the Register button based on the verification code
    setIsRegisterButtonDisabled(!verificationSent || formData.verificationCode !== '0000');
  }, [verificationSent, formData.verificationCode]);

  useEffect(() => {
    let timer;

    if (passwordErrorMessageVisible) {
      timer = setTimeout(() => {
        setPasswordErrorMessageVisible(false);
      }, 60000); // 60 seconds
    }

    return () => clearTimeout(timer);
  }, [passwordErrorMessageVisible]);

  const [isIdExpiryDateDatePicker, setIsIdExpiryDateDatePicker] = useState(true);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
  
    setBvnError('');

    if (name === 'idExpiryDate') {
      setIsIdExpiryDateDatePicker(value.toLowerCase() !== "id does not expire");
    }
  
    if (name === 'idExpiryOption') {
      setIdExpiryOption(value);
    }
  
    setIsSaved(false); // Reset isSaved
  
    const updatedFormData = { ...formData };
  
    if (name === 'BVN') {
      const sanitizedBVN = value.replace(/\D/g, ''); // Remove non-digit characters
      if (sanitizedBVN.length === 11) {
        setBVN(sanitizedBVN);
      } else {
        setBvnError('BVN must be 11 digits');
      }
    } else if (type === 'checkbox') {
      const updatedStatus = checked
        ? [...formData.maritalStatus, value]
        : formData.maritalStatus.filter((status) => status !== value);
  
      updatedFormData.maritalStatus = updatedStatus;
    } else {
      updatedFormData[name] = value;
    }
  
    setFormData(updatedFormData);
    setIsFormValid(validateForm());
  };
  

  const handleSendVerification = () => {
    const generatedCode = Math.floor(1000 + Math.random() * 9000);
    console.log('Verification code:', generatedCode);
    setVerificationSent(true);
  };

  const handleResendVerification = () => {
    if (resendTimer > 0) {
      setResendErrorMessage('Please wait for 60 seconds before you resend.');
    } else {
      // Implement logic to resend verification code
      console.log('Resending verification code...');
      setResendTimer(60);
      setResendErrorMessage('');
    }
  };

  const handleBVNVerification = () => {
    // Perform BVN verification logic here
    // For example, check if BVN is 11 digits
    if (bvn.length === 11) {
      setRegistrationSuccess(true);
      setLoadingMessage('');
      // Redirect to Bioverify page or any other action upon successful BVN verification
      window.location.href = '/bioverify'; // Replace with the actual URL of your Bioverify page
    } else {
      console.log('Invalid BVN. Please enter a valid 11-digit BVN.');
    }
  };


  const handleRegistration = () => {
    if (validateForm()) {
      setLoadingMessage('Please wait, you will be redirected for bioverification...');
      setTimeout(() => {
        setRegistrationSuccess(true);
        setLoadingMessage('');
        window.location.href = '/bioverify';
        // Redirect to Bioverify page upon successful registration
      }, 3000); // Simulating a delay for the sake of example
    } else {
      console.log('Invalid form data. Please check your inputs.');
    }
  };

  const idTypes = [
    'Select ID Type',
    'National ID (NIN)',
    'Voters Card',
    "Driver's License",
    'Other',
  ];

  const validateForm = () => {
    const { email, password, verificationCode, phoneNumber, country, countryCode, confirmPassword, idType, idNumber, idIssuedDate, idExpiryOption, idExpiryDate } = formData;

    setMandatoryFieldError('');
    setPasswordMatchError('');
    setVerificationCodeError('');
    setIdExpiryDateError('');

    const isValid =
      validator.isEmail(email) &&
      validator.isMobilePhone(phoneNumber, 'any', { strictMode: false }) &&
      country &&
      countryCode &&
      password &&
      confirmPassword &&
      idType &&
      idNumber &&
      idIssuedDate &&
      (idExpiryOption === 'DatePicker' || (idExpiryOption === 'DoesNotExpire' && idExpiryDate.toLowerCase() === "id does not expire"));

    setIsFormValid(isValid);

    if (
      !validator.isEmail(email) ||
      !validator.isMobilePhone(phoneNumber, 'any', { strictMode: false }) ||
      !country ||
      !countryCode ||
      !password ||
      !confirmPassword ||
      !idType ||
      !idNumber ||
      !idIssuedDate
    ) {
      setMandatoryFieldError('Please fill in the mandatory fields.');
      return false;
    }

    if (isIdExpiryDateDatePicker && !idExpiryDate) {
      setMandatoryFieldError('Please enter a valid ID expiry date or type "ID does not expire".');
      return false;
    }

    if (!validator.equals(password, confirmPassword)) {
      setPasswordMatchError('Passwords do not match.');
      return false;
    }

    if (verificationSent && verificationCode !== '0000') {
      setVerificationCodeError('Invalid verification code.');
    }

    if (verificationSent && verificationCode !== '0000') {
      setMandatoryFieldError('Invalid verification code.');
      return false;
    }

    if (idExpiryOption === 'please select one') {
      setMandatoryFieldError('Please select an option for ID Expiry Date.');
      return false;
    }

    if (idExpiryOption === 'DatePicker' && !idExpiryDate) {
      setMandatoryFieldError('Please enter a valid ID expiry date.');
      return false;
    }

    if (idExpiryOption === 'DoesNotExpire' && idExpiryDate.toLowerCase() !== "id does not expire") {
      setMandatoryFieldError('Please enter "ID does not expire" for ID Expiry Date.');
      return false;
    }

    return true;
  };

  const countries = [
    'Select Country',
    'USA',
    'Canada',
    'UK',
    'Australia',
    'India',
    'Other',
  ];

  const countryCodes = [
    { code: '', label: 'Select Code' },
    { code: '+1', label: '+1 (USA)' },
    { code: '+44', label: '+44 (UK)' },
    { code: '+91', label: '+91 (India)' },
  ];

  return (
    <div style={{ display: 'grid', backgroundColor: 'white', justifyContent: 'center', marginLeft: '0', marginRight: '0' }} className='businesssignup_headpage'>
      <h3 style={{ marginLeft: '530px', marginTop: '50px', color: "rgb(10, 10, 100)" }}>
        Business account Registration:
      </h3>
      {registrationSuccess ? (
        <div>
          <p>Registration Successful! You can now log in with your credentials.</p>
        </div>
      ) : (
        <div>
        <div style={{ display: 'flex', marginLeft: '250px', marginTop: '30px', marginBottom: '30px' }}>
  <label style={{ marginLeft: '120px' }}>Fill the form below:</label>
  <label style={{ marginLeft: '30px' }}> Or enter your BVN:</label>
  <input type="text" name="BVN" onChange={handleChange} />
  {bvnError && <div style={{ color: 'red' }}>{bvnError}</div>}
  <button onClick={handleBVNVerification}>Verify BVN</button>
</div>


      
          <div style={{ marginBottom: '40px', marginLeft: '320px', width: '100%', backgroundColor: 'white' }}>
            <form style={{ display: 'grid', width: '750px', height: '1300px', backgroundColor: 'rgba(246, 216, 216, 0.92)', marginTop: '50px', paddingTop: '80px', paddingLeft: '80px' }}>
              <h3 style={{ display: 'block', marginLeft: '110px', marginBottom: '30px' }}> Business Account Registration Form:</h3>

              <div className='form_business'>
                <label>First Name*:</label>
                <input type="text" name="firstName" onChange={handleChange} className='input_form_bus' required />
              </div>

              <div className='form_business'>
                <label>Middle Name:</label>
                <input type="text" name="middleName" onChange={handleChange} className='input_form_bus' />
              </div>

              <div className='form_business'>
                <label>Last Name*:</label>
                <input type="text" name="lastName" onChange={handleChange} className='input_form_bus' required />
              </div>

              <div className='form_business'>
                <label>Family/Surname:</label>
                <input type="text" name="familyName" onChange={handleChange} className='input_form_bus' />
              </div>

              <div className='form_business'>
                <label>Date of Birth*:</label>
                <input type="date" name="dateOfBirth" onChange={handleChange} className='input_form_bus' required />
              </div>

              <div className='form_business'>
                <label>Gender* :</label>
                <div style={{ display: 'flex' }}>
                  <input type="radio" name="gender" value="male" onChange={handleChange} />
                  <label>Male</label>
                  <input type="radio" name="gender" value="female" onChange={handleChange} />
                  <label>Female</label>
                </div>
              </div>

              <div className='form_business'>
                <label>Marital Status* :</label>
                <div style={{ display: 'flex' }}>
                  <input type="checkbox" name="maritalStatus" value="single" onChange={handleChange} />
                  <label>Single</label>
                  <input type="checkbox" name="maritalStatus" value="married" onChange={handleChange} />
                  <label>Married</label>
                  <input type="checkbox" name="maritalStatus" value="divorced" onChange={handleChange} />
                  <label>Divorced</label>
                </div>
              </div>

              <div className='form_business'>
                <label>ID Type*:</label>
                <select
                  name="idType"
                  onChange={handleChange}
                  value={formData.idType}
                  className='input_form_bus'
                  required
                >
                  {idTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className='form_business'>
                <label>ID Number*:</label>
                <input type="text" name="idNumber" onChange={handleChange} className='input_form_bus' required />
              </div>

              <div className='form_business'>
                <label>ID Issued Date*:</label>
                <input type="date" name="idIssuedDate" onChange={handleChange} className='input_form_bus' required />
              </div>

              <div className='form_business'>
                <label>ID Expiry Date:</label>
                <select
                  name="idExpiryOption"
                  onChange={handleChange}
                  className='input_form_bus'
                  value={idExpiryOption}
                >
                  <option value="ChooseOne">please select one</option>
                  <option value="DatePicker">Date Picker</option>
                  <option value="DoesNotExpire">ID does not expire</option>
                </select>

                {idExpiryOption === "DatePicker" ? (
                  <input
                    type="date"
                    name="idExpiryDate"
                    onChange={handleChange}
                    className='input_form_bus'
                  />
                ) : idExpiryOption === "DoesNotExpire" ? (
                  <input
                    type="text"
                    name="idExpiryDate"
                    onChange={handleChange}
                    className='input_form_bus'
                    placeholder="Type 'ID does not expire'"
                  />
                ) : null}
                {idExpiryDateError && <div style={{ color: 'red' }}>{idExpiryDateError}</div>}
              </div>

              <div className='form_business'>
                <label>Phone Number*:</label>
                <div style={{ display: 'flex' }}>
                  <select
                    name="countryCode"
                    onChange={handleChange}
                    value={formData.countryCode}
                    style={{ width: '100px', height: '30px' }}
                    required
                  >
                    {countryCodes.map((code) => (
                      <option key={code.code} value={code.code}>
                        {code.label}
                      </option>
                    ))}
                  </select>
                  <input type="tel" name="phoneNumber" onChange={handleChange} required style={{ height: '30px', width: '150px' }} />
                </div>
              </div>

              <div className='form_business'>
                <label>Address Line 1*:</label>
                <input type="text" name="addressLine1" onChange={handleChange} className='input_form_bus' required />
              </div>

              <div className='form_business'>
                <label>Address Line 2:</label>
                <input type="text" name="addressLine2" onChange={handleChange} className='input_form_bus' />
              </div>

              <div className='form_business'>
                <label>City*:</label>
                <input type="text" name="city" onChange={handleChange} className='input_form_bus' required />
              </div>

              <div className='form_business'>
                <label>Postcode:</label>
                <input type="text" name="postcode" onChange={handleChange} className='input_form_bus' />
              </div>

              <div className='form_business'>
                <label>Email*:</label>
                <input type="email" name="email" onChange={handleChange} className='input_form_bus' required />
              </div>

              <div className='form_business'>
                <label>Password*:</label>
                <input type="password" name="password" onChange={handleChange} className='input_form_bus' required />
              </div>

              <div className='form_business'>
                <label>Confirm Password*:</label>
                <input type="password" name="confirmPassword" onChange={handleChange} className='input_form_bus' required />
              </div>

              <div className='form_business'>
                <label>Country* :</label>
                <select
                  name="country"
                  onChange={handleChange}
                  value={formData.country}
                  className='input_form_bus'
                  required
                >
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ display: 'grid' }}>
                <button onClick={handleSendVerification} disabled={verificationSent}
                  style={{ backgroundColor: 'rgb(10, 10, 100)', height: '50px', width: '190px', marginLeft: '160px' }}>
                  Send Verification Code
                </button>

                {verificationSent && (
                  <div className='form_business'>
                    <label>Enter Verification Code* :</label>
                    <input type="text" name="verificationCode" onChange={handleChange} className='input_form_bus' />
                    {resendTimer > 0 ? (
                      <div style={{ color: 'red', marginLeft: '10px' }}>
                        {resendErrorMessage || verificationCodeError || `I did not receive the code? ${resendTimer} resend after the countdown.`}
                      </div>
                    ) : (
                      <button onClick={handleResendVerification} style={{ marginLeft: '10px' }}>
                        Resend Code
                      </button>
                    )}
                  </div>
                )}
              </div>

              <div className='form_business'>
                <button
                  type="button"
                  onClick={handleRegistration}
                  disabled={!isFormValid || isRegisterButtonDisabled}
                  style={{
                    marginTop: '20px',
                    marginBottom: '30px',
                    backgroundColor: 'rgb(10, 10, 100)',
                    marginLeft: '200px',
                    height: '50px'
                  }}
                >
                  Register
                </button>
                {loadingMessage && (
                  <div style={{ marginTop: '10px', color: 'blue' }}>{loadingMessage}</div>
                )}
              </div>

              {mandatoryFieldError && (
                <div style={{ color: 'red', marginTop: '20px' }}>{mandatoryFieldError}</div>
              )}

              {passwordMatchError && (
                <div style={{ color: 'red', marginTop: '20px' }}>{passwordMatchError}</div>
              )}

              <button
                type="button"
                onClick={handleSave}
                style={{
                  marginTop: '20px',
                  marginBottom: '30px',
                  backgroundColor: 'rgb(10, 100, 10)',
                  height: '50px',
                  marginLeft: '50px',
                  width: '400px'

                }}
              >
                Save Information
              </button>

              {isSaved && (
                <div style={{ color: 'green', marginTop: '20px' }}>Your information has been saved.</div>
              )}

              <p style={{ marginLeft: '140px', fontWeight: '-moz-initial', fontSize: "11px" }}>Agupe Financial technology. All right reserved</p>
            </form>
          </div>
        </div>
      )}
      <Notification />
      <Footer />
    </div>
  );
}

export default EnterpriseSignUp;
