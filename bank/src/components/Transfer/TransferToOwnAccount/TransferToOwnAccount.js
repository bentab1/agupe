import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import React, { useState } from "react";
import Select from "react-select";
import "./TransferToOwnAccount.css";

const sourceAccounts = [
  { accountType: "Savings", accountNumber: "2222222222", balance: 1135 },
  { accountType: "Business", accountNumber: "3333333333", balance: 60000 },
  { accountType: "Master POS", accountNumber: "4444444444", balance: 70000 },
  { accountType: "Sub POS_01", accountNumber: "4444444444", balance: 90000 },
];

function TransferToOwnAccount() {
  const [selectedSourceAccount, setSelectedSourceAccount] = useState("");
  const [accountBalance, setAccountBalance] = useState(null);
  const [accountBalance1, setAccountBalance1] = useState(null);
  const [accountNumber, setAccountNumber] = useState("");
  const [selectedDestinationAccount, setSelectedDestinationAccount] =
    useState("");
  const [paymentData, setPaymentData] = useState({});
  const [showAccountForm, setShowAccountForm] = useState(true);
  const [showDestinationAccountForm, setShowDestinationAccountForm] =
    useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showPinForm, setShowPinForm] = useState(false);
  const [pin, setPin] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [paymentPlusCharges, setPaymenPlusCharges] = useState(0);
  const [error, setError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const CURRENCY_SYMBOL = "₦";

  // Create a new MockAdapter instance
  const mock = new MockAdapter(axios);

  // Mock POST request to submit payment
  mock.onPost("/submit-payment").reply(200);

  // Mock POST request to submit PIN
  mock.onPost("/submit-pin").reply(200);

  const handleSourceAccountSubmit = (e) => {
    e.preventDefault();

    setShowAccountForm(false);
    // Hide the source account selection form
  };

  const handlePaymentFormSubmit = async (e) => {
    e.preventDefault();
    if (selectedDestinationAccount === selectedSourceAccount) {
      setErrorMessage(
        "You cannot send to the same account. Please select another destination."
      );
      return;
    }
    setPaymenPlusCharges(
      parseFloat(paymentData.amount) +
        parseFloat((0.14 * paymentData.amount).toFixed(2))
    );
    setShowPaymentForm(false);
    setShowConfirmation(true);
  };

  function handleReselectDestinationAccount(e) {
    e.preventDefault();

    setShowDestinationAccountForm(true);
    setShowPaymentForm(false);
    setErrorMessage("");
  }

  const handleConfirmation = () => {
    setShowConfirmation(false);
    setShowPinForm(true);
  };

  const handlePinSubmit = async (e) => {
    e.preventDefault();
    try {
      if (parseFloat(accountBalance) < parseFloat(paymentPlusCharges)) {
        // If balance is insufficient, set an error message
        // You can replace this with your desired error handling mechanism
        setError("Insufficient Balance");
        throw new Error("Insufficient balance");
      } else {
        await axios.post("/submit-pin", { pin });
        setShowPinForm(false);
        setShowSuccessPopup(true);
      }
    } catch (error) {
      // Simulate submitting PIN to the server
      console.error("Error submitting PIN:", error);
    }
  };

  const handleViewReceipt = () => {
    // Handle viewing receipt
    alert("Viewing transaction receipt...");
  };

  const handleMakeAnotherPayment = () => {
    // Reset state for another payment
    setAccountNumber("");
    setPaymentData({});
    setShowAccountForm(true);
    setShowSuccessPopup(false);
  };

  const handleSaveAsBeneficiary = () => {
    // Handle saving as beneficiary
    alert("Saving as beneficiary...");
  };

  const handleDone = () => {
    // Reset state and exit
    setAccountNumber("");
    setPaymentData({});
    setShowAccountForm(true);
    setShowSuccessPopup(false);
  };
  function handleGoBackOfSuccessForm() {
    setShowAccountForm(true);
    setShowSuccessPopup(false);
  }
  return (
    <div>
      {showAccountForm && (
        <div className="own-source-account-container">
          <button className="own-source-close-button">&larr;</button>
          <form onSubmit={handleSourceAccountSubmit}>
            <Select
              value={
                selectedSourceAccount
                  ? {
                      accountType: selectedSourceAccount,
                      accountNumber: sourceAccounts.find(
                        (account) =>
                          account.accountType === selectedSourceAccount
                      )?.accountNumber,
                      balance: sourceAccounts.find(
                        (account) =>
                          account.accountType === selectedSourceAccount
                      )?.balance,
                    }
                  : null
              }
              onChange={(selected) => {
                setShowAccountForm(false);
                setSelectedSourceAccount(selected.accountType);
                setAccountBalance(selected.balance);
                setShowDestinationAccountForm(true);
              }}
              options={sourceAccounts}
              isSearchable
              placeholder="Select a source account"
              className="other-bank-select-account-form"
              formatOptionLabel={(option) => (
                <div>
                  <span>{option.accountType}:</span>
                  <div style={{ display: "flex" }}>
                    <span>Account Number: {option.accountNumber}</span>
                    {option.balance !== undefined && (
                      <span>
                        {" "}
                        - Balance: {CURRENCY_SYMBOL}
                        {parseFloat(option.balance).toLocaleString("en")}
                      </span>
                    )}
                  </div>
                </div>
              )}
            />
          </form>
        </div>
      )}

      {showDestinationAccountForm && (
        <div className="own-destination-account-container">
          <button className="own-destination-account-close-button">
            &larr;
          </button>
          <form onSubmit={handleSourceAccountSubmit}>
            <Select
              value={
                selectedDestinationAccount
                  ? {
                      accountType: selectedDestinationAccount,
                      accountNumber: sourceAccounts.find(
                        (account) =>
                          account.accountType === selectedDestinationAccount
                      )?.accountNumber,
                      balance: sourceAccounts.find(
                        (account) =>
                          account.accountType === selectedDestinationAccount
                      )?.balance,
                    }
                  : null
              }
              onChange={(selectedDestination) => {
                setShowDestinationAccountForm(false);
                setSelectedDestinationAccount(selectedDestination.accountType);
                setAccountBalance1(selectedDestination.balance);
                setAccountNumber(selectedDestination.accountNumber); // Set the account number here
                setShowPaymentForm(true);
              }}
              options={sourceAccounts}
              isSearchable
              placeholder="Select a destination account"
              className="other-bank-select-account-form"
              formatOptionLabel={(option) => (
                <div>
                  <span>{option.accountType}:</span>
                  <div style={{ display: "flex" }}>
                    <span>Account Number: {option.accountNumber}</span>
                    {option.balance !== undefined && (
                      <span>
                        {" "}
                        - Balance: {CURRENCY_SYMBOL}
                        {parseFloat(option.balance).toLocaleString("en")}
                      </span>
                    )}
                  </div>
                </div>
              )}
            />
          </form>
        </div>
      )}

      {showPaymentForm && (
        <div className="own-show-payment-container">
          <button className="own-show-payment-close-button">&larr;</button>
          <p>
            {" "}
            From {selectedSourceAccount} Account <br /> Available Balance{" "}
            {CURRENCY_SYMBOL} {parseFloat(accountBalance).toLocaleString("en")}
          </p>

          <form onSubmit={handlePaymentFormSubmit}>
            <p>To</p>
            <p>Account Type {selectedDestinationAccount}</p>
            <p>Account Number: {accountNumber} </p>{" "}
            {/* Display the selected account number */}
            <label htmlFor="amount">Amount:</label>
            <input
              type="text"
              id="amount"
              name="amount"
              onChange={(e) =>
                setPaymentData({ ...paymentData, amount: e.target.value })
              }
              required
            />
            <br />
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              onChange={(e) =>
                setPaymentData({ ...paymentData, description: e.target.value })
              }
              required
            />
            <br />
            <button type="submit">Continue</button>
          </form>
        </div>
      )}
      {errorMessage && (
        <div>
          {errorMessage}{" "}
          <p>
            <button onClick={handleReselectDestinationAccount}>
              Change Destination
            </button>
          </p>
        </div>
      )}
      {showConfirmation && (
        <div className="other-sow-confirmation-container">
          <button className="own-show-confirmation-close-button">&larr;</button>
          <div>
            You are about to send money ({CURRENCY_SYMBOL}
            {parseFloat(paymentData.amount).toLocaleString("en")}) from Your
            <br />
            <p>
              Account Type {selectedSourceAccount} <br />
              Available Balance {CURRENCY_SYMBOL}
              {parseFloat(accountBalance).toLocaleString("en")}
            </p>
            <p>To</p>
            <p>
              Account Type {selectedDestinationAccount} <br />
              Current Balance {CURRENCY_SYMBOL}
              {parseFloat(accountBalance1).toLocaleString("en")}
              <br />
              Account Number {accountNumber}
            </p>
          </div>

          <p>
            {" "}
            {CURRENCY_SYMBOL}
            {parseFloat(paymentPlusCharges).toLocaleString("en")}
          </p>
          <div className="own-payment-details">
            <p>Account Number: {accountNumber}</p>
            <p>Account Type: {selectedDestinationAccount}</p>
            <p>
              Amount: {CURRENCY_SYMBOL}
              {parseFloat(paymentData.amount).toLocaleString("en")}
            </p>
            <p>
              Fee: {CURRENCY_SYMBOL}
              {parseFloat(0.14 * paymentData.amount).toLocaleString("en")}{" "}
            </p>
            <p>Description: {paymentData.description}</p>

            <p>
              Paying from:{" "}
              {
                sourceAccounts.find(
                  (source) => source.accountType === selectedSourceAccount
                )?.accountType
              }
              {"  "}Account
            </p>
            <div style={{ display: "flex" }}>
              <p>Available Balance</p>
              <p style={{ marginLeft: "30px" }}>
                {CURRENCY_SYMBOL}{" "}
                {parseFloat(
                  sourceAccounts.find(
                    (source) => source.accountType === selectedSourceAccount
                  )?.balance
                ).toLocaleString("en")}
              </p>
            </div>
          </div>

          <button onClick={handleConfirmation}>Continue</button>
        </div>
      )}
      {showPinForm && (
        <div className="own-show-pin-container">
          <button className="own-show-pin-close-button">&larr;</button>

          <form onSubmit={handlePinSubmit}>
            <label htmlFor="pin">Enter PIN:</label>
            <input
              type="password"
              id="pin"
              name="pin"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              required
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
      {error && (
        <div>
          {error}{" "}
          <p>
            <button>Add Money</button>
          </p>
        </div>
      )}
      {showSuccessPopup && (
        <div className="own-show-success-container">
          <div className="show-success-sub-container">
            <button
              className="own-show-success-close-button"
              onClick={handleGoBackOfSuccessForm}
            >
              &larr;
            </button>
            <div className="own-beneficiary-done-container">
              <button
                onClick={handleSaveAsBeneficiary}
                className="own-save-beneficiary-button"
              >
                Save as Beneficiary
              </button>
              <button onClick={handleDone} className="own-done-button">
                Done &gt;
              </button>
            </div>
            <div className="own-appreciation-container">
              <h3 className="own-payment-successful">Payment Successful!</h3>
              <em className="own-customer-appreciation">
                Thank you for banking with us
              </em>
            </div>
            <div className="own-show-success-third-container">
              <div className="own-show-success-fourth-container">
                <button
                  onClick={handleViewReceipt}
                  className="own-view-transaction-receipt"
                >
                  View Transaction Receipt &gt;
                </button>
                <button
                  onClick={handleMakeAnotherPayment}
                  className="own-make-another-payment"
                >
                  Make Another Payment &gt;
                </button>
                <button className="own-schedule-payment">
                  Schedule payment &gt;
                </button>
              </div>
              <div className="own-show-success-fifth-container">
                <button className="own-report-this-payment">
                  Report this payment &gt;
                </button>
                <button className="own-tell-us-your-experience">
                  Give us a feedback &gt;
                </button>
                <button className="own-rate-our-service">
                  Rate our services &gt;
                </button>
              </div>
            </div>
            <button className="own-refer-friend">
              Invite 5 friends to earn ₦2000 &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default TransferToOwnAccount;
