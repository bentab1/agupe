import React from "react";

const CategoryFilterTransaction = ({ onCategoryClick }) => {
  const categories = [
    { label: "Date", property: "formattedDate" },
    { label: "Year", property: "year" },
    { label: "Month", property: "month" },
    { label: "Description", property: "description" },
    { label: "Merchant", property: "merchant" },
    { label: "Amount", property: "amount" },
    { label: "Transaction Type", property: "transactionType" },
  ];

  const handleClick = (property) => {
    onCategoryClick(property);
  };

  return (
    <div>
      {categories.map((category) => (
        <button
          key={category.label}
          onClick={() => handleClick(category.property)}
          style={{ margin: "5px", cursor: "pointer" }}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilterTransaction;
