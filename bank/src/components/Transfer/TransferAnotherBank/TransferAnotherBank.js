import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import React, { useState } from "react";
import Select from "react-select";
import "./TransferAnotherBank.css";

const bankOptions = [
  {
    value: "FirstBank",
    label: "First Bank",
    api: "/FirstBank-payment",
    image: "/FirbankLogo.png",
  },
  {
    value: "ZenithBank",
    label: "Zenith Bank",
    api: "/ZenithBank-payment",
    image: "ZenithBankLogo.png",
  },
  // Add other banks with their respective APIs
];

const sourceAccounts = [
  { accountType: "Savings", accountNumber: "2222222222", balance: 1135 },
  { accountType: "Business", accountNumber: "3333333333", balance: 60000 },
  { accountType: "Master POS", accountNumber: "4444444444", balance: 70000 },
  { accountType: "Sub POS_01", accountNumber: "4444444444", balance: 90000 },
];
// Currency symbol

const TransferAnotherBank = () => {
  const [selectedSourceAccount, setSelectedSourceAccount] = useState("");
  const [accountBalance, setAccountBalance] = useState(null);
  const [selectedBank, setSelectedBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [paymentData, setPaymentData] = useState({});
  const [showAccountForm, setShowAccountForm] = useState(true);
  const [showBankSelection, setShowBankSelection] = useState(false);
  const [showAccountNumberSearch, setShowAccountNumberSearch] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showPinForm, setShowPinForm] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [paymentPlusCharges, setPaymenPlusCharges] = useState("");
  const [error, setError] = useState("");
  const [pin, setPin] = useState("");

  const CURRENCY_SYMBOL = "₦";

  // MockAdapter instance
  const mock = new MockAdapter(axios);

  // Mock GET request to fetch account number based on bank selection
  mock.onGet("/bank-payment").reply((config) => {
    const bank = config.params.bank;
    switch (bank) {
      case "FirstBank":
        return [200, { accountNumber: "1234567890" }];
      case "ZenithBank":
        return [200, { accountNumber: "0987654321" }];
      // Add more cases for other banks
      default:
        return [404, { error: "Bank not found" }];
    }
  });

  // Mock GET request to fetch account name based on account number
  mock.onGet("/get-account-name").reply((config) => {
    const accountNumber = config.params.accountNumber;
    let name;
    if (selectedBank === "FirstBank") {
      name = accountNumber === "1234567890" ? "John Doe" : "Jane Doe"; // Mock account name for First Bank
    } else if (selectedBank === "ZenithBank") {
      name =
        accountNumber === "0987654321" ? "Benjamin Joseph" : "Benjamin Joseph"; // Mock account name for Zenith Bank
    } else {
      name = "Unknown"; // Default mock account name
    }
    return [200, { name }];
  });
  // Mock POST request to submit payment
  mock.onPost("/submit-payment").reply(200);

  // Mock POST request to submit PIN
  mock.onPost("/submit-pin").reply(200);

  const handleSourceAccountSubmit = (e) => {
    e.preventDefault();
    // Hide the source account selection form
    setShowBankSelection(true); // Show the bank selection form
  };

  const handleBankFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulate fetching account number from the server
      const response = await axios.get("/bank-payment", {
        params: { bank: selectedBank },
      });
      setAccountNumber(response.data.accountNumber);
      setShowBankSelection(false);
    } catch (error) {
      console.error("Error fetching account number:", error);
    }
  };

  const handleAccountFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulate fetching account name from the server
      const response = await axios.get("/get-account-name", {
        params: { accountNumber },
      });
      setAccountName(response.data.name);
      setShowAccountNumberSearch(false);
      setShowBankSelection(false);
      setShowPaymentForm(true);
    } catch (error) {
      console.error("Error fetching account name:", error);
    }
  };

  const handlePaymentFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check if the account balance is sufficient

      await axios.post("/submit-payment", {
        ...paymentData,
        accountName,
        accountNumber,
        paymentPlusCharges,
      });
      setShowPaymentForm(false);
      setShowAccountForm(false);
      setPaymenPlusCharges(
        parseFloat(paymentData.amount) +
          parseFloat((0.14 * paymentData.amount).toFixed(2))
      );
      setShowConfirmation(true);
    } catch (error) {
      // Simulate submitting payment data to the server
      console.error("Error submitting payment data:", error);
    }
  };

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
    alert("Viewing transaction receipt...");
  };

  const handleMakeAnotherPayment = () => {
    setSelectedBank("");
    setAccountNumber("");
    setAccountName("");
    setPaymentData({});
    setShowAccountForm(true);
    setShowPaymentForm(false);
    setShowSuccessPopup(false);
  };

  const handleSaveAsBeneficiary = () => {
    alert("Saving as beneficiary...");
  };

  const handleDone = () => {
    setSelectedBank("");
    setAccountNumber("");
    setAccountName("");
    setPaymentData({});
    setShowAccountForm(true);
    setShowPaymentForm(false);
    setShowSuccessPopup(false);
  };
  return (
    <div>
      {showAccountForm && (
        <div className="other-source-account-container">
          <button className="own-show-confirmation-close-button">&larr;</button>
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
                setSelectedSourceAccount(selected.accountType);
                setAccountBalance(selected.balance);
                setShowBankSelection(true);
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
      {showBankSelection && (
        <div className="other-bank-select-container">
          <button className="other-bonk-select-close-button">&larr;</button>
          <form onSubmit={handleBankFormSubmit}>
            {selectedBank && (
              <div>
                <img
                  src={
                    bankOptions.find((bank) => bank.value === selectedBank)
                      ?.image
                  }
                  alt="Bank Logo"
                  className="bank-logo"
                />
                <div style={{ display: "grid" }}>
                  <p>{selectedSourceAccount} Account</p>
                  <div style={{ display: "flex" }}>
                    <p>Available Balance:</p>
                    <p style={{ marginLeft: "30px" }}>
                      {CURRENCY_SYMBOL}
                      {parseFloat(accountBalance).toLocaleString("en")}
                      {}
                    </p>
                  </div>
                </div>
              </div>
            )}
            <Select
              value={
                selectedBank
                  ? {
                      value: selectedBank,
                      label: selectedBank,
                      image: selectedBank,
                    }
                  : null
              }
              onChange={(selected) => {
                setSelectedBank(selected.value);
                setShowAccountNumberSearch(true);
                setShowAccountForm(false); // Show account number search form immediately when bank is selected
              }}
              options={bankOptions}
              isSearchable
              placeholder="Select a bank"
              disabled={!showAccountForm}
              className="other-select-bank-form"
            />
          </form>
        </div>
      )}

      {showAccountNumberSearch && (
        <div className="other-show-account-number-container">
          <button className="other-show-account-number-close-button">
            &larr;
          </button>
          <form onSubmit={handleAccountFormSubmit}>
            <label htmlFor="accountNumber">Account Number:</label>
            <input
              type="text"
              id="accountNumber"
              name="accountNumber"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              required
              className="other-select-accountNumber-form"
            />
            <button type="submit">Continue</button>
          </form>
        </div>
      )}

      {showPaymentForm && (
        <div className="other-show-payment-container">
          <button className="other-show-payment-close-button">&larr;</button>
          <form onSubmit={handlePaymentFormSubmit}>
            <img
              src={
                bankOptions.find((bank) => bank.value === selectedBank)?.image
              }
              alt="Bank Logo"
              className="bank-logo"
            />
            <p> To {accountName}</p>
            <p>Bank: {selectedBank}</p>
            <p>Account Number: {accountNumber}</p>

            <div style={{ display: "flex" }}>
              <label htmlFor="amount">Amount:</label>
              <span style={{ marginRight: "5px" }}>{CURRENCY_SYMBOL}</span>{" "}
              <input
                type="text"
                id="amount"
                name="amount"
                onChange={(e) =>
                  setPaymentData({ ...paymentData, amount: e.target.value })
                }
                required
              />
            </div>
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

      {showConfirmation && (
        <div className="other-conformPayment-container">
          <button className="other-confirmation-close-button">&larr;</button>
          <div className="other-confirmation-second-container">
            <p>
              You are about to send money ({CURRENCY_SYMBOL}
              {paymentData.amount}) <br />
              To {accountName} {selectedBank} {accountNumber}:
            </p>

            <p>
              {" "}
              {CURRENCY_SYMBOL}
              {parseFloat(paymentPlusCharges).toLocaleString("en")}
            </p>
            <p>Bank: {selectedBank}</p>
            <p>Account Number: {accountNumber}</p>
            <p>Account Name: {accountName}</p>
            <p>
              Amount: {CURRENCY_SYMBOL}
              {parseFloat(paymentData.amount).toLocaleString("en")}
            </p>
            <p>Fee: {parseFloat(0.14 * paymentData.amount).toFixed(2)}</p>
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
            className="other-select-conform-pin-form"
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      )}

      {error && (
        <div>
          <p>{error}</p>
          <button>Add Money</button>
        </div>
      )}

      {showSuccessPopup && (
        <div className="own-show-success-container">
          <div className="show-success-sub-container">
            <button
              className="own-show-success-close-button"
              // onClick={handleGoBackOfSuccessForm}
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
};

export default TransferAnotherBank;
