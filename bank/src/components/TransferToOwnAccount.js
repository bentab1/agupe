import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import React, { useState } from "react";
import Select from "react-select";

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

  return (
    <div>
      {showAccountForm && (
        <div className="other-select-account-container">
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
        <div className="other-select-account-container">
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
        <div>
          <p>
            {" "}
            From {selectedSourceAccount} Account <br /> Available Balance{" "}
            {accountBalance}
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
        <div className="other-select-conformPayment-container">
          <p>
            You are about to send money ({CURRENCY_SYMBOL}
            {parseFloat(paymentData.amount).toLocaleString("en")}) from Your
            <br />
            <p>
              Account Type {selectedSourceAccount} <br />
              Available Balance{" "}
              {parseFloat(accountBalance).toLocaleString("en")}
            </p>
            <p>To</p>
            <p>
              Account Type {selectedDestinationAccount} <br />
              Current Balance {parseFloat(accountBalance1).toLocaleString("en")}
              <br />
              Account Number {accountNumber}
            </p>{" "}
            :
          </p>

          <p>
            {" "}
            {CURRENCY_SYMBOL}
            {parseFloat(paymentPlusCharges).toLocaleString("en")}
          </p>

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

          <button onClick={handleConfirmation}>Continue</button>
        </div>
      )}
      {showPinForm && (
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
        <div className="popup">
          <h2>Payment Successful!</h2>
          <button onClick={handleViewReceipt}>View Transaction Receipt</button>
          <button onClick={handleMakeAnotherPayment}>
            Make Another Payment
          </button>
          <button onClick={handleSaveAsBeneficiary}>Save as Beneficiary</button>
          <button onClick={handleDone}>Done</button>
        </div>
      )}
    </div>
  );
}

export default TransferToOwnAccount;
