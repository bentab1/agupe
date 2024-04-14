// PersonalProfile.jsx
import { React, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { MdNotificationAdd } from "react-icons/md";
import MyProfileImage from "../Assets/MyProfileImage.jpg";
import NigeriaFlag from "../Assets/NigeriaFlag.jpg";
import MainAccounts from "../FinalWork/MainAccounts/MainAccounts";
import LogOutPage from "../LogOut/LogOutPage";
import "./personalAccount.css";

function PersonalAccount({
  options,
  selected,
  transactionHistory,
  groupTransactionsByMonth,
  setShowTransactions,
  setGroupedTransactions,
  groupedTransactions,
  setSelected,
  showTransactions,
  showBalance,
  handleToggleBalance,
  setTransactionHistory,
}) {
  const [showProfile, setShowProfile] = useState(false);
  function handleCloseProfile() {
    if (showProfile === true) setShowProfile(false);
  }

  function handleTransactionHistry() {
    window.location.href = "/subposlayout/transactions";
  }
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "rgb(250, 244, 244)",
      }}
      className="personalprofile"
    >
      <div
        style={{
          display: "grid",
          width: "300px",
          borderRight: "4px solid rgb(215, 247, 236)",
          overflowY: "scroll",
          overflowX: "hidden",
          marginTop: "20px",

          backgroundColor: "rgb(250, 244, 244)",
        }}
      >
        <div style={{ display: "flex", borderRadius: "25px" }}>
          <button
            style={{
              width: "40px",
              left: "0",
              height: "30px",
              backgroundColor: "transparent",
              color: "black",
              fontSize: "25px",
            }}
            onClick={() => {
              setShowProfile(true);
              handleCloseProfile();
            }}
          >
            <BiMenu />
          </button>
          <img
            src={NigeriaFlag}
            alt="Country flag"
            style={{
              width: "45px",
              marginLeft: "80px",
              height: "30px",
              marginTop: "15px",
            }}
          />
          <div>
            {showProfile && (
              <div
                style={{
                  left: "0",
                  paddingLeft: "20px",
                  width: "250px",
                  height: "555px",
                  borderRadius: "25px",
                  position: "absolute",
                  backgroundColor: "white",
                }}
              >
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: "white",
                    color: "black",
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setShowProfile(true);
                    handleCloseProfile();
                  }}
                >
                  &larr;
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "30px",
                    marginTop: "20px",
                    marginBottom: "20px",
                    backgroundColor: "transparent",
                  }}
                >
                  <img
                    src={NigeriaFlag}
                    alt="Country flag"
                    style={{
                      width: "55px",
                      height: "80px",
                      marginLeft: "10px",
                    }}
                  />
                  <img
                    className="image"
                    src={MyProfileImage}
                    alt=" logo"
                    style={{
                      marginTop: "0px",
                      width: "80px",
                      height: "80px",
                      borderRadius: "40px",
                    }}
                  />
                </div>
                <p style={{ marginLeft: "20px", marginBottom: "5px" }}>
                  Mirabel Mikel
                </p>
                <button
                  style={{
                    borderRadius: "20px",
                    backgroundColor: "rgb(215, 247, 236)",
                    color: "black",
                    fontSize: "12px",
                  }}
                >
                  {" "}
                  Show user details
                </button>

                <ul style={{ marginTop: "20px", display: "grid", gap: "15px" }}>
                  <li className="profile-ul-li">LPay Wallet</li>
                  <li className="profile-ul-li">Change/Reset PIN</li>
                  <li className="profile-ul-li">Change Password</li>
                  <li className="profile-ul-li">Biometric Login</li>
                  <li className="profile-ul-li"> Auto login on app start</li>
                  <li className="profile-ul-li">Biometric payments</li>
                  <li className="profile-ul-li">Transacrtion Limit</li>
                  <li className="profile-ul-li">Theme</li>
                  <li className="profile-ul-li">Video intro</li>
                </ul>

                <div style={{ marginTop: "20px" }}>
                  <button className="profile-section">Settings</button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
          <button className="profile-section">Add payment Method</button>
        </div>

        <div>
          <button className="profile-section">Create Cards</button>
        </div>

        <div>
          <button className="profile-section">Add Beneficiary</button>
        </div>

        <div>
          <button className="profile-section">Upgrade Account</button>
        </div>
        <div>
          <button className="profile-section">Subscription</button>
        </div>

        <div>
          <LogOutPage />
        </div>
      </div>

      <div
        style={{
          display: "grid",
          overflowY: "scroll",
          overflowX: "hidden",
          width: "1040px",
          backgroundColor: "rgb(250, 244, 244)",
        }}
      >
        <div
          style={{
            display: "flex",
            marginTop: "40px",
            marginLeft: "50px",
            backgroundColor: "rgb(215, 247, 236)",
            width: "860px",
            padding: "30px",
            borderRadius: "30px",
          }}
        >
          <div className="welcome_greetting">
            <button className="text_pro">Welcome Mirabel Mikel </button>
          </div>

          <div
            className="profilegallery"
            style={{
              display: "flex",
              gap: "80px",
              marginLeft: "100px",
              paddingLeft: "20px",
            }}
          >
            <div style={{ width: "50px" }}>
              <button className="text_pro">Notification</button>
            </div>

            <span style={{ fontSize: "30px" }}>
              <MdNotificationAdd />
            </span>
          </div>
          <div>
            <div style={{ marginLeft: "130px" }}>
              <p>Live Chat</p>
              <i
                className="fas fa-comment"
                style={{
                  fontSize: "25px",
                  color: "blueviolet",
                  marginLeft: "4px",
                }}
              />
            </div>
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "grid",
              backgroundColor: "transparent",
              height: "480px",
              borderRadius: "30px",
              marginLeft: "50px",
              marginTop: "0px",
              width: "430px",
              gap: "0",
            }}
          >
            <div className="accountdisplay">
              <MainAccounts
                options={options}
                selected={selected}
                transactionHistory={transactionHistory}
                groupTransactionsByMonth={groupTransactionsByMonth}
                setShowTransactions={setShowTransactions}
                setGroupedTransactions={setGroupedTransactions}
                groupedTransactions={groupedTransactions}
                setSelected={setSelected}
                showTransactions={showTransactions}
                showBalance={showBalance}
                handleToggleBalance={handleToggleBalance}
                setTransactionHistory={setTransactionHistory}
              />
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "0px",
                paddingLeft: "40px",
              }}
            >
              <div
                className="TransaferOrpaybils"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div>
                  <button className="text">LPay Wallet</button>
                </div>
                <div className="Transfer">
                  <button className="text">Transfer</button>
                </div>

                <div className="paybill">
                  <button className="text">Pay bill</button>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div className="paybill">
                  <button className="text">User ID</button>
                </div>

                <div className="paybill">
                  <button className="text">Qcode</button>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              marginLeft: "25px",
              marginTop: "70px",
              backgroundColor: "white",
              height: "120px",
              width: "390px",
              marginBottom: "8px",
              borderRadius: "30px",
              paddingTop: "50px",
            }}
          >
            <button
              className="text"
              style={{
                width: "170px",
                borderRadius: "25px",
                height: "40px",
                fontSize: "12px",
              }}
            >
              Recent Transactions
            </button>

            <button
              className="text"
              style={{
                width: "170px",
                borderRadius: "25px",
                height: "40px",
                fontSize: "12px",
              }}
            >
              Search Transactions
            </button>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            overflowX: "scroll",
            marginTop: "20px",
            height: "90px",
            backgroundColor: "white",
            width: "1023px",
            padding: "20px",
          }}
        >
          <div>
            <button className="text">Account</button>
          </div>

          <div>
            <button className="text">Generate Statement</button>
          </div>

          <div>
            <button
              className="text"
              onClick={() => {
                handleTransactionHistry();
              }}
            >
              {" "}
              Transaction Histories
            </button>
          </div>

          <div>
            <button className="text">Find ATM nearby</button>
          </div>
          <div>
            <button className="text">Need Help</button>
          </div>

          <div>
            <button className="text">More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalAccount;
