// PersonalProfile.jsx
import React from "react";
import Myimage from "../Assets/Myimage.png";
import NigeriaFlag from "../Assets/NigeriaFlag.jpg";
import MainAccounts from "../FinalWork/MainAccounts/MainAccounts";
import LogOutPage from "../LogOut/LogOutPage";
import "./personalAccount.css";
function personalAccount({
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
        <div style={{ display: "flex" }}>
          <div>
            <img
              className="image"
              src={Myimage}
              alt=" logo"
              style={{ marginTop: "20px" }}
            />
          </div>
          <div style={{ marginTop: "20px", marginLeft: "40px" }}>
            <img
              src={NigeriaFlag}
              alt="Country flag"
              style={{ width: "50px" }}
            />
          </div>
        </div>
        <div>
          <button className="profile-section">Add payment Method</button>
        </div>

        <div>
          <button className="profile-section">Card</button>
        </div>

        <div>
          <button className="profile-section">Beneficiary</button>
        </div>

        <div>
          <button className="profile-section">Subscription</button>
        </div>

        <div>
          <button className="profile-section">Settings</button>
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
            width: "930px",
            padding: "30px",
            borderRadius: "30px",
          }}
        >
          <div className="welcome_greetting">
            <p className="text_pro">Welcome</p>
          </div>

          <div
            className="profilegallery"
            style={{ display: "flex", marginLeft: "290px" }}
          >
            <div>
              <button className="text_pro">Notification</button>
            </div>

            <div>
              <button className="text_pro">pics</button>
            </div>

            <div style={{ display: "grid" }}>
              <button className="text_pro">
                <p>Benjamin </p>
                <p>Benjamin@gmail.com </p>
              </button>
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
                fontSize: "11px",
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
                fontSize: "11px",
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
            <button className="text">AgupePay</button>
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
              Transaction History
            </button>
          </div>

          <div>
            <button className="text">Find ATM nearby</button>
          </div>

          <div>
            <button className="text">More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default personalAccount;
