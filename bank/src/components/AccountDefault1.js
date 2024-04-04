import React from "react";

function AccountDefault({
  accountType,
  balance,
  currencySymbol,
  serialNumber,
}) {
  return (
    <div style={{ backgroundColor: "blue", width: "280px", height: "200px" }}>
      <p>{accountType} Account- NAIRA</p>
      <p>
        {" "}
        {currencySymbol}
        {parseFloat(balance).toLocaleString("en")}
      </p>
      <p>Serial Number: {serialNumber}</p>
    </div>
  );
}
export default AccountDefault;
