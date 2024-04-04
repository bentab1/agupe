import React from "react";

function AccountDefault({ accountType, balance, currencySymbol }) {
  return (
    <div style={{ backgroundColor: "blue", width: "200px", height: "80px" }}>
      <p>{accountType} Account- NAIRA</p>
      <p>
        {" "}
        {currencySymbol}
        {parseFloat(balance).toLocaleString("en")}
      </p>
    </div>
  );
}
export default AccountDefault;
